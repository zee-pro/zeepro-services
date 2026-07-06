import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <Link
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="size-6" />
    </Link>
  );
}
