"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MoveRight, Sparkles } from "lucide-react";
import type { CatalogCollection } from "@/lib/catalog-data";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
  IMAGES,
} from "@/components/the-edit/TheEdit";
import { CatalogPieceCard } from "@/components/collections/CatalogPieceCard";
import {
  GalleryCornerBrackets,
  GalleryCimaise,
} from "@/components/collections/GalleryFrameDecor";

type Props = {
  catalogCollections: CatalogCollection[];
};

export function CollectionsPageClient({ catalogCollections }: Props) {
  const totalPieces = catalogCollections.reduce((n, c) => n + c.pieces.length, 0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[var(--brand-primary-soft)]/45 text-stone-900">
        <div className="relative z-[2]">
          <Navbar />

          <main>
            {/* Hero — meme langage que l accueil (Hero) */}
            <header
              ref={heroRef}
              className="relative min-h-[100svh] overflow-hidden bg-stone-900"
            >
              <motion.div
                style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                className="absolute inset-0 z-0"
              >
                <img
                  src="/images/M7_03103.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 85% 75%, rgba(210,49,122,0.16), transparent 40%)",
                  }}
                />
              </motion.div>

              <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-20 pt-32 md:px-20 md:pb-28">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 md:flex-row md:items-end md:justify-between">
                  <motion.div
                    initial={{ y: 72, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-white/70"
                    >
                      / Catalogue atelier
                    </motion.span>
                    <h1 className="font-serif text-[13vw] leading-[0.78] tracking-tighter text-white md:text-[9.5vw]">
                      Collections
                      <br />
                      <span className="inline-block pl-[5vw] italic font-extralight text-white/88 md:pl-[7vw]">
                        Mr Microbe
                      </span>
                    </h1>
                    <p className="mt-8 max-w-lg text-sm font-medium uppercase leading-relaxed tracking-[0.18em] text-stone-300 md:text-xs md:tracking-[0.2em]">
                      Fiches techniques, supports et tirages issus du catalogue
                      papier — lecture directe, sans artifice.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="flex flex-col gap-8 md:max-w-sm md:pb-2"
                  >
                    <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.22em] text-stone-300">
                      Toiles, resines, monocycle, grands formats, luminaire et
                      joaillerie — memes codes visuels que sur l accueil et la page
                      Artiste.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="rounded-sm border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                          References
                        </p>
                        <p className="mt-1 font-serif text-3xl tabular-nums text-white">
                          {totalPieces}
                        </p>
                      </div>
                      <div className="rounded-sm border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                          Univers
                        </p>
                        <p className="mt-1 font-serif text-3xl tabular-nums text-white">
                          {catalogCollections.length}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/artiste"
                      className="group inline-flex w-fit items-center gap-3 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-7 py-3.5 text-[10px] font-black uppercase tracking-[0.32em] text-white shadow-lg shadow-black/25 transition hover:bg-[var(--brand-primary-dark)] hover:border-[var(--brand-primary-dark)]"
                    >
                      L univers & l artiste
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.35, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-white"
              />
            </header>

            {/* Bandeau editorial — cadre mural */}
            <section className="relative border-y border-stone-200 bg-[#ebe8e0]/50 px-6 py-20 md:px-20 md:py-28">
              <div className="mx-auto max-w-7xl">
                <div className="relative bg-[#f5f2ec] p-8 shadow-[0_0_0_1px_rgba(28,25,23,0.11),0_0_0_7px_#fff,0_0_0_8px_rgba(28,25,23,0.14),0_26px_52px_-22px_rgba(28,25,23,0.18)] md:p-14">
                  <div
                    className="pointer-events-none absolute inset-3 ring-1 ring-stone-900/10 md:inset-5"
                    aria-hidden
                  />
                  <GalleryCornerBrackets />
                  <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-3xl">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                        Note d atelier
                      </span>
                      <p className="mt-6 font-serif text-3xl font-medium leading-[1.2] tracking-tight text-stone-900 md:text-4xl md:leading-[1.15]">
                        Chaque fiche reprend support, dimensions et tirage tels que
                        presentes dans l edition — pour une lecture claire, comme
                        sur un mur de galerie: cadre, etiquette, fiche technique.
                      </p>
                    </div>
                    <Sparkles
                      className="hidden h-14 w-14 shrink-0 text-stone-400 md:block"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </section>

            <Separator color="bg-[var(--brand-primary)]" />

            {/* Sections collections — rythme SpotlightGrid */}
            {catalogCollections.map((collection, ci) => {
              const isLight = ci % 2 === 0;
              const sectionBg = isLight
                ? "bg-[var(--brand-primary-soft)]/35"
                : "bg-[var(--brand-primary-soft)]/12";
              const borderClass = "border-y border-[var(--brand-primary)]/22";

              return (
                <section
                  key={collection.id}
                  className={`${sectionBg} ${borderClass} px-6 py-20 md:px-20 md:py-28`}
                >
                  <div className="relative mx-auto max-w-7xl">
                    <div
                      className="pointer-events-none absolute -inset-x-1 -inset-y-3 border-2 border-stone-900/[0.06] md:-inset-x-3 md:-inset-y-4"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-2 border border-stone-400/25 md:inset-4"
                      aria-hidden
                    />
                    <div className="relative z-[1] px-3 pb-12 pt-8 md:px-8 md:pb-16 md:pt-12">
                    <motion.header
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="mb-16 flex flex-col gap-8 border-b border-stone-900 pb-12 md:mb-20 md:flex-row md:items-end md:justify-between md:pb-14"
                    >
                      <div className="relative max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                          Univers {String(ci + 1).padStart(2, "0")}
                        </span>
                        <div className="pointer-events-none absolute -left-2 -top-8 font-serif text-7xl italic text-stone-200/90 md:-left-4 md:-top-12 md:text-8xl">
                          {String(ci + 1).padStart(2, "0")}
                        </div>
                        <h2 className="relative mt-5 font-serif text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl md:text-7xl md:leading-[1.05]">
                          {collection.title}
                        </h2>
                        <p className="relative mt-4 max-w-2xl font-serif text-xl italic leading-relaxed text-stone-600 md:text-2xl">
                          {collection.tagline}
                        </p>
                        <p className="relative mt-6 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
                          {collection.description}
                        </p>
                        <p className="relative mt-5 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--brand-primary-dark)]">
                          {collection.pieces.length} piece
                          {collection.pieces.length > 1 ? "s" : ""} cataloguee
                          {collection.pieces.length > 1 ? "s" : ""}
                        </p>
                      </div>
                      <MoveRight
                        className="hidden h-12 w-12 shrink-0 -translate-y-2 stroke-1 text-stone-300 md:block"
                        aria-hidden
                      />
                    </motion.header>

                    <GalleryCimaise />

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-60px" }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.07 } },
                      }}
                      className="relative z-[1] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14"
                    >
                      {collection.pieces.map((piece, pi) => (
                        <motion.div
                          key={piece.id}
                          variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                            },
                          }}
                          whileHover={{ y: -4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        >
                          <CatalogPieceCard
                            piece={piece}
                            indexLabel={String(pi + 1).padStart(2, "0")}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    </div>
                  </div>
                </section>
              );
            })}

            <Separator color="bg-stone-200" />
          </main>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
