import {
  buildCatalogWithImages,
  collectionImagePaths,
} from "@/lib/catalog-data";
import { getLocalCollectionImagePaths } from "@/lib/discover-collection-images";
import { CollectionsPageClient } from "./collections-client";

export default function CollectionsPage() {
  const discovered = getLocalCollectionImagePaths();
  const paths = discovered.length > 0 ? discovered : [...collectionImagePaths];
  const catalogCollections = buildCatalogWithImages(paths);

  return <CollectionsPageClient catalogCollections={catalogCollections} />;
}
