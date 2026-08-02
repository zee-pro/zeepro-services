import sharp from "sharp";
import { rm } from "node:fs/promises";
import { join } from "node:path";

sharp.cache(false);

const SERVICES_DIR = "public/images/services";
const MAX_WIDTH = 1280;

const jobs = [
  { src: "wall-tiling.webp", dst: "wall-tiling.webp" },
  { src: "ac-installation-service.webp", dst: "ac-installation.webp" },
  { src: "Decorative Millwork.avif", dst: "decorative-millwork.avif" },
  { src: "ventilation-system-installation-services.jpg", dst: "ventilation-system.jpg" },
  { src: "brickclad-installation-2.jpg", dst: "cladding-installation.jpg" },
  { src: "Emergency Leak Detection & Repair.jpg", dst: "leak-detection.jpg" },
];

const outputFormat = (path) => {
  if (path.endsWith(".webp")) return "webp";
  if (path.endsWith(".avif")) return "avif";
  return "jpeg";
};

for (const job of jobs) {
  const srcPath = join(SERVICES_DIR, job.src);
  const dstPath = join(SERVICES_DIR, job.dst);
  const format = outputFormat(job.dst);

  const pipeline = sharp(srcPath);
  const meta = await pipeline.metadata();
  if (meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  switch (format) {
    case "jpeg":
      pipeline.jpeg({ quality: 72, mozjpeg: true });
      break;
    case "webp":
      pipeline.webp({ quality: 75 });
      break;
    case "avif":
      pipeline.avif({ quality: 55 });
      break;
  }

  const buf = await pipeline.toBuffer();
  await rm(srcPath, { force: true });
  const outMeta = await sharp(buf).metadata();
  console.log(
    `${job.dst.padEnd(32)} ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}  ${(buf.length / 1024).toFixed(0)}KB`,
  );
  const { writeFile } = await import("node:fs/promises");
  await writeFile(dstPath, buf);
}
