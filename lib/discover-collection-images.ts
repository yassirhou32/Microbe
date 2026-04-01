import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

/**
 * Liste les images dans public/images/ (chemins URL Next: /images/nom.ext).
 * A utiliser uniquement cote serveur (page, route handler, etc.).
 */
export function getLocalCollectionImagePaths(): string[] {
  const dir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return [];
  }
  const names = fs
    .readdirSync(dir)
    .filter(
      (f) =>
        IMAGE_EXT.test(f) &&
        !f.startsWith(".") &&
        fs.statSync(path.join(dir, f)).isFile(),
    );
  names.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }),
  );
  return names.map((f) => `/images/${encodeURIComponent(f)}`);
}
