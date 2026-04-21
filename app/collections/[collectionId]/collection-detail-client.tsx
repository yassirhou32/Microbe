"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, Search } from "lucide-react";
import {
  ArticleRow,
  FloatingImage,
  Marquee,
  type MagazineArticle,
} from "@/components/magazine/Magazine";
import { catalogFallbackImage, type CatalogCollection } from "@/lib/catalog-data";
import { SmoothScroll, Navbar, Footer } from "@/components/the-edit/TheEdit";

type Props = {
  collection: CatalogCollection;
};

export default function CollectionDetailClient({ collection }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pieceArticles = useMemo<MagazineArticle[]>(
    () =>
      collection.pieces.map((piece, index) => ({
        title: piece.title,
        category: `${piece.year}`,
        image: piece.image ?? catalogFallbackImage,
        color: ["bg-stone-500", "bg-red-700", "bg-indigo-900", "bg-emerald-800"][index % 4],
      })),
    [collection.pieces],
  );

  const heroImage = collection.pieces[0]?.image ?? catalogFallbackImage;

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
      <FloatingImage activeIndex={activeIndex} x={mouseX} y={mouseY} articles={pieceArticles} />

      <section className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 border-b border-black bg-[#f4f4f0] overflow-hidden pt-32">
        <div className="absolute top-4 right-4 bottom-4 w-full md:w-[70%] z-0 rounded-sm overflow-hidden hidden md:block">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              className="w-full h-full object-cover grayscale opacity-80"
              alt={collection.title}
            />
          </motion.div>
        </div>

        <div className="absolute inset-x-4 top-24 bottom-4 z-0 rounded-sm overflow-hidden md:hidden">
          <img src={heroImage} className="w-full h-full object-cover grayscale opacity-60" alt={collection.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f4f0] via-[#f4f4f0]/80 to-transparent" />
        </div>

        <div className="relative z-10 flex justify-between items-start md:items-end w-full max-w-7xl">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-black/70">Numero 01</span>
            <span className="font-mono text-xs uppercase tracking-widest text-black border-b border-black pb-1">
              {collection.tagline}
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-black/70 right-0">MMXXVI</span>
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col justify-end mt-24 md:mt-0">
          <h1 className="font-serif text-[19vw] md:text-[12vw] leading-[0.75] tracking-tighter text-black uppercase mix-blend-normal">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden"
            >
              {collection.title}
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block italic md:ml-[15vw] overflow-hidden text-black md:text-white md:mix-blend-difference"
            >
              ARCHIVES.
            </motion.span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 md:mt-24">
            <div className="md:col-span-4 font-mono text-xs leading-relaxed uppercase tracking-wide text-black md:text-white md:mix-blend-difference max-w-sm">
              <strong className="text-black md:text-white">Note Editoriale —</strong>
              <br />
              <br />
              {collection.description}
            </div>
            <div className="md:col-span-8 flex justify-start md:justify-end items-end md:mix-blend-difference">
              <Link
                href="/collections"
                className="group rounded-full border border-black md:border-white px-8 py-4 text-black md:text-white hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black transition-all duration-300 flex items-center gap-4"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="uppercase text-xs font-bold tracking-widest">Retour aux collections</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee text={`${collection.title} &bull; Oeuvres &bull; Details &bull; `} />

      <section className="px-6 md:px-12 py-24 min-h-[50vh]">
        <div className="mb-12 flex items-center gap-2">
          <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Oeuvres en vedette
          </span>
        </div>

        <div className="flex flex-col">
          {collection.pieces.map((piece, index) => (
            <ArticleRow
              key={piece.id}
              index={index}
              title={piece.title}
              category={`${piece.year} · ${piece.dimensions}`}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {collection.pieces.map((piece, index) => (
            <motion.article
              key={`${piece.id}-card`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="border border-black/15 bg-white p-4 md:p-6"
            >
              <img
                src={piece.image ?? catalogFallbackImage}
                alt={piece.title}
                className="h-[300px] md:h-[420px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">{piece.title}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-600">
                {piece.year} · {piece.dimensions}
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                {piece.technique} sur {piece.support}
              </p>
              <p className="mt-1 text-sm text-neutral-700">{piece.tirage}</p>
              {piece.encadrement ? <p className="mt-1 text-sm text-neutral-700">{piece.encadrement}</p> : null}
              {piece.notes ? <p className="mt-2 text-sm text-neutral-700">{piece.notes}</p> : null}
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
    </SmoothScroll>
  );
}
