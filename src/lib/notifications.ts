import nodemailer from "nodemailer";
import { SITE_CONFIG } from "./constants";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  service: string;
  message: string;
}

function formatServiceLabel(service: string): string {
  const labels: Record<string, string> = {
    "interior-finishing": "Interior Renovation & Construction",
    joinery: "Joinery & Custom Woodwork",
    "mechanical-electromechanical": "Mechanical & Electromechanical",
    "plumbing-sanitary": "Plumbing & Sanitary Works",
    general: "General Inquiry",
  };
  return labels[service] ?? service;
}

function buildEmailBody(data: FormData): string {
  return [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `WhatsApp: ${data.whatsapp}`,
    `Service: ${formatServiceLabel(data.service)}`,
    "",
    `Message:`,
    data.message,
  ].join("\n");
}

function buildWhatsAppMessage(data: FormData): string {
  return [
    `*New Inquiry - ${SITE_CONFIG.name}*`,
    ``,
    `*Name:* ${data.name}`,
    `*Company:* ${data.company}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Service:* ${formatServiceLabel(data.service)}`,
    ``,
    `*Message:*`,
    data.message,
  ].join("\n");
}

export async function sendEmail(data: FormData): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.log("[Email] SMTP not configured. Form data:", {
      to: SITE_CONFIG.email,
      from: data.email,
      subject: `New inquiry from ${data.company} - ${formatServiceLabel(data.service)}`,
      body: buildEmailBody(data),
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"${SITE_CONFIG.name} Contact" <${user}>`,
    to: SITE_CONFIG.email,
    replyTo: data.email,
    subject: `New inquiry from ${data.company} - ${formatServiceLabel(data.service)}`,
    text: buildEmailBody(data),
  });
}

export async function sendWhatsApp(data: FormData): Promise<void> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId || !accessToken) {
    console.log("[WhatsApp] API not configured. Form data:", {
      to: SITE_CONFIG.whatsappNumber,
      message: buildWhatsAppMessage(data),
    });
    return;
  }

  const response = await fetch(
    `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: SITE_CONFIG.whatsappNumber,
        type: "text",
        text: { body: buildWhatsAppMessage(data) },
      }),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("[WhatsApp] Failed to send message:", err);
  }
}
