"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  catalogFallbackImage,
  type CatalogCollection,
} from "@/lib/catalog-data";
import { SmoothScroll, Navbar, Footer } from "@/components/the-edit/TheEdit";
import {
  ArticleRow,
  FloatingImage,
  Marquee,
  type MagazineArticle,
} from "@/components/magazine/Magazine";

type Props = {
  catalogCollections: CatalogCollection[];
};

function formatCollectionYears(collection: CatalogCollection): string {
  const years = collection.pieces.map((piece) => piece.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? String(min) : `${min} - ${max}`;
}

function collectionCoverImage(collection: CatalogCollection): string {
  return collection.pieces[0]?.image ?? catalogFallbackImage;
}

export function CollectionsPageClient({ catalogCollections }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const magazineArticles = useMemo<MagazineArticle[]>(
    () =>
      catalogCollections.map((collection, index) => ({
        title: collection.title,
        category: collection.tagline,
        image: collectionCoverImage(collection),
        color: ["bg-stone-500", "bg-red-700", "bg-indigo-900", "bg-emerald-800"][index % 4],
      })),
    [catalogCollections],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <SmoothScroll>
      <main
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveIndex(-1)}
        className="min-h-screen w-full bg-[#f4f4f0] text-black selection:bg-black selection:text-white"
      >
      <Navbar />
      <FloatingImage activeIndex={activeIndex} x={mouseX} y={mouseY} articles={magazineArticles} />

      <section className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 border-b border-black bg-[#f4f4f0] overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={magazineArticles[0]?.image ?? catalogFallbackImage}
              className="w-full h-full object-cover opacity-80"
              alt="Visuel principal"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 top-24 z-0 overflow-hidden md:hidden">
          <img
            src={magazineArticles[1]?.image ?? catalogFallbackImage}
            className="w-full h-full object-cover opacity-60"
            alt="Visuel principal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f4f0] via-[#f4f4f0]/80 to-transparent" />
        </div>

        <div className="relative z-10 flex justify-between items-start md:items-end w-full max-w-7xl">
        
          <span className="font-mono text-xs uppercase tracking-widest text-black/70 right-0">
           
          </span>
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col justify-end mt-24 md:mt-0">
          

          <div className="mt-16 flex justify-start md:mt-24 md:justify-end md:items-end md:mix-blend-difference">
              <Link
                href={catalogCollections[0] ? `/collections/${catalogCollections[0].id}` : "/collections"}
                className="group rounded-full border border-black md:border-white px-8 py-4 text-black md:text-white hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black transition-all duration-300 flex items-center gap-4"
              >
                <span className="uppercase text-xs font-bold tracking-widest">Voir la collection</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
        </div>
      </section>

      <Marquee text="Collections &bull; Oeuvres &bull; Decouvrir &bull; " />

      <section className="px-6 md:px-12 py-24 min-h-[50vh]">
        <div className="mb-12 flex items-center gap-2">
          <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Collections en vedette
          </span>
        </div>

        <div className="flex flex-col">
          {magazineArticles.map((article, index) => (
            <Link
              key={`${article.title}-${index}`}
              href={`/collections/${catalogCollections[index]?.id ?? ""}`}
              className="block"
            >
              <ArticleRow
                index={index}
                title={article.title}
                category={formatCollectionYears(catalogCollections[index]!)}
                setIndex={setActiveIndex}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-6 md:px-12 md:py-8">
        <div className="mx-auto flex max-w-[1600px] justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[10px] uppercase tracking-[0.24em] text-white/70 transition hover:border-white hover:text-white"
          >
            Demande privee
            <span className="text-xs">→</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
    </SmoothScroll>
  );
}
