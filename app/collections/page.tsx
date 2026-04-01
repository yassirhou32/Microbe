import {
  buildCatalogWithImages,
  collectionImagePaths,
} from "@/lib/catalog-data";
import { CollectionsPageClient } from "./collections-client";

export default async function CollectionsPage() {
  let paths: readonly string[] = collectionImagePaths;
  // Sur Vercel, ne pas importer le module fs / discovery : évite le trace de tout public/images.
  if (process.env.VERCEL !== "1") {
    const { getLocalCollectionImagePaths } = await import(
      "@/lib/discover-collection-images"
    );
    const discovered = getLocalCollectionImagePaths();
    if (discovered.length > 0) paths = discovered;
  }

  const catalogCollections = buildCatalogWithImages(paths);

  return <CollectionsPageClient catalogCollections={catalogCollections} />;
}
