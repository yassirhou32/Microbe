import { notFound } from "next/navigation";
import {
  buildCatalogWithImages,
  collectionImagePaths,
} from "@/lib/catalog-data";
import CollectionDetailClient from "./collection-detail-client";

type PageProps = {
  params: Promise<{ collectionId: string }>;
};

export default async function CollectionDetailPage({ params }: PageProps) {
  const { collectionId } = await params;

  let paths: readonly string[] = collectionImagePaths;
  const { getLocalCollectionImagePaths } = await import(
    "@/lib/discover-collection-images"
  );
  const discovered = getLocalCollectionImagePaths();
  if (discovered.length > 0) paths = discovered;

  const collections = buildCatalogWithImages(paths);
  const collection = collections.find((item) => item.id === collectionId);

  if (!collection) {
    notFound();
  }

  return <CollectionDetailClient collection={collection} />;
}
