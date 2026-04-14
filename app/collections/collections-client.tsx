"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MoveRight, Star, Stars } from "lucide-react";
import {
  catalogFallbackImage,
  type CatalogCollection,
} from "@/lib/catalog-data";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
} from "@/components/the-edit/TheEdit";

type Props = {
  catalogCollections: CatalogCollection[];
};

export function CollectionsPageClient({ catalogCollections }: Props) {
  const totalPieces = catalogCollections.reduce((n, c) => n + c.pieces.length, 0);
  const [microbeHue, setMicrobeHue] = useState(188);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const colorSwatches = useMemo(
    () => [
      { label: "Turquoise", hue: 188 },
      { label: "Rose", hue: 338 },
      { label: "Orange", hue: 26 },
      { label: "Violet", hue: 280 },
      { label: "Vert", hue: 132 },
      { label: "Bleu", hue: 214 },
    ],
    [],
  );
  const constellation = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${6 + ((i * 11) % 88)}%`,
    top: `${8 + ((i * 17) % 80)}%`,
    delay: (i % 9) * 0.28,
    duration: 2.6 + (i % 5) * 0.45,
    size: i % 3 === 0 ? "h-4 w-4" : "h-3 w-3",
  }));

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[var(--brand-primary-soft)]/45 text-stone-900">
        <div className="relative z-[2]">
          <Navbar />

          <main>
            {/* Hero — même langage que l'accueil (Hero) */}
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
              <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
                {constellation.map((star) => (
                  <motion.span
                    key={star.id}
                    className={`absolute ${star.size} text-white/65`}
                    style={{ left: star.left, top: star.top }}
                    animate={{
                      opacity: [0.28, 1, 0.32],
                      scale: [0.75, 1.14, 0.82],
                      rotate: [0, 12, 0],
                    }}
                    transition={{
                      duration: star.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: star.delay,
                    }}
                  >
                    <Stars className="h-full w-full" strokeWidth={1.4} />
                  </motion.span>
                ))}
              </div>

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
                   
                    </motion.span>
                    <h1 className="font-serif text-[13vw] leading-[0.78] tracking-tighter text-white md:text-[9.5vw]">
                      Collections
                      <br />
                      <span className="inline-block pl-[5vw] italic font-extralight text-white/88 md:pl-[7vw]">
                        Mr Microbe
                      </span>
                    </h1>
                    
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="flex flex-col gap-8 md:max-w-sm md:pb-2"
                  >
                    <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.22em] text-stone-300">
                      Toiles, résines, monocycle, grands formats, luminaire et
                      joaillerie — mêmes codes visuels que sur l'accueil et la page
                      Artiste.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="rounded-sm border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                          Références
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
                      className="group inline-flex w-fit items-center gap-3 rounded-full border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-7 py-3.5 text-[10px] font-black uppercase tracking-[0.32em] text-white shadow-lg shadow-black/25 transition hover:bg-[var(--brand-primary-dark)] hover:border-[var(--brand-primary-dark)]"
                    >
                      L'UNIVERS & L'ARTISTE
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

            <section className="relative border-b border-stone-300/70 bg-[#f3eee4] px-6 py-14 md:px-20 md:py-16">
              <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 md:mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Laboratoire couleur
                  </span>
                  <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 md:text-5xl">
                    Microbe interactif.
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden border border-stone-900/20 bg-[#d9d2c6] p-4 md:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.8),transparent_44%),radial-gradient(circle_at_80%_70%,rgba(157,23,70,0.18),transparent_48%)]" />
                  <motion.div
                    className="relative mx-auto w-full max-w-[560px]"
                    style={{ perspective: 1300 }}
                    animate={{
                      rotateY: [-8, 9, -8],
                      rotateX: [3, -2, 3],
                    }}
                    transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative mx-auto aspect-[1.12/1] w-full max-w-[520px] drop-shadow-[0_24px_30px_rgba(0,0,0,0.24)]">
                      <motion.svg
                        viewBox="0 0 520 470"
                        className="absolute inset-0 h-full w-full"
                        animate={{ y: [0, -4, 0], rotateZ: [0, 1, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        aria-label="Microbe 3D"
                        role="img"
                      >
                        <defs>
                          <filter id="goo-fuse">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"
                              result="goo"
                            />
                            <feComposite in="goo" in2="goo" operator="over" />
                          </filter>
                          <radialGradient id="microbeBody" cx="34%" cy="26%" r="72%">
                            <stop offset="0%" stopColor={`hsl(${microbeHue} 96% 70%)`} />
                            <stop offset="56%" stopColor={`hsl(${microbeHue} 82% 50%)`} />
                            <stop offset="100%" stopColor={`hsl(${microbeHue} 72% 30%)`} />
                          </radialGradient>
                          <radialGradient id="microbeHighlight" cx="28%" cy="24%" r="64%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                          </radialGradient>
                        </defs>

                        <g filter="url(#goo-fuse)">
                          <circle cx="128" cy="212" r="92" fill="url(#microbeBody)" />
                          <circle cx="260" cy="112" r="98" fill="url(#microbeBody)" />
                          <circle cx="392" cy="212" r="92" fill="url(#microbeBody)" />
                          <circle cx="204" cy="342" r="82" fill="url(#microbeBody)" />
                          <circle cx="316" cy="342" r="82" fill="url(#microbeBody)" />
                          <path
                            d="M118,255 C124,184 184,142 260,142 C336,142 396,184 402,255 C406,315 358,362 260,362 C162,362 114,315 118,255 Z"
                            fill="url(#microbeBody)"
                          />
                        </g>

                        <ellipse cx="206" cy="196" rx="54" ry="40" fill="url(#microbeHighlight)" />
                        <ellipse cx="328" cy="190" rx="48" ry="38" fill="url(#microbeHighlight)" />
                        <ellipse cx="204" cy="224" rx="50" ry="46" fill="rgba(225,216,255,0.92)" />
                        <ellipse cx="316" cy="224" rx="50" ry="46" fill="rgba(225,216,255,0.92)" />
                        <ellipse cx="198" cy="232" rx="8.5" ry="8.5" fill="#1c1917" />
                        <ellipse cx="322" cy="232" rx="8.5" ry="8.5" fill="#1c1917" />
                        <ellipse cx="260" cy="338" rx="34" ry="30" fill="rgba(225,216,255,0.92)" />
                      </motion.svg>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.68, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-stone-900/20 bg-white/75 p-5 md:p-7"
                >
                  
                  <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
                    Choisir la couleur du microbe
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    Glissez pour changer la couleur en direct. Le rendu applique une teinte
                    instantanée sur le microbe pour visualiser le choix final.
                  </p>

                  <div className="mt-6">
                    <input
                      type="range"
                      min={0}
                      max={360}
                      value={microbeHue}
                      onChange={(event) => setMicrobeHue(Number(event.target.value))}
                      className="microbe-hue-slider h-2 w-full cursor-pointer appearance-none rounded-full border-0 bg-transparent"
                      style={{
                        background:
                          "linear-gradient(90deg,#ef4444 0%,#f59e0b 14%,#eab308 28%,#22c55e 42%,#06b6d4 56%,#3b82f6 70%,#8b5cf6 84%,#ec4899 100%)",
                      }}
                      aria-label="Réglage de teinte microbe"
                    />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Teinte : {microbeHue}deg
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {colorSwatches.map((swatch) => (
                      <button
                        key={swatch.label}
                        type="button"
                        onClick={() => setMicrobeHue(swatch.hue)}
                        className={`group border px-3 py-2 text-left transition ${
                          microbeHue === swatch.hue
                            ? "border-[#9d1746] bg-[#fff0f7]"
                            : "border-stone-300 bg-white hover:border-stone-500"
                        }`}
                      >
                        <span
                          className="mb-1 block h-4 w-full rounded-sm border border-black/10"
                          style={{
                            background: `hsl(${swatch.hue} 78% 52%)`,
                          }}
                        />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-700">
                          {swatch.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
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
              // Limite stricte d'items pour garder le scroll fluide sur tous les blocs.
              const repeatCount = Math.max(
                2,
                Math.ceil(10 / Math.max(collection.pieces.length, 1)),
              );
              const repeatedPieces = Array.from({ length: repeatCount }, (_, pass) =>
                collection.pieces.slice(0, 6).map((piece, pi) => ({
                  ...piece,
                  id: `${piece.id}-${pass}-${pi}`,
                })),
              ).flat();
              const reelItems = [...repeatedPieces, ...repeatedPieces];
              const disableAutoSwiper = collection.id === "les-moyens";

              return (
                <section
                  key={collection.id}
                  className={`${sectionBg} ${borderClass} overflow-hidden px-6 py-2 md:px-20 md:py-3 ${
                    ci < catalogCollections.length - 1 ? "mb-6 md:mb-7" : ""
                  }`}
                >
                  <div className="relative mx-auto max-w-7xl">
                    <div
                      className="pointer-events-none absolute inset-0 border border-stone-900/[0.06]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-1 border border-stone-400/25 md:inset-2"
                      aria-hidden
                    />
                    <div className="relative z-[1] px-2 pb-0 pt-0 md:px-4 md:pb-0 md:pt-0">
                    <motion.header
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="mb-3 flex flex-col gap-2 border-b border-stone-900 pb-3 md:mb-3 md:flex-row md:items-end md:justify-between md:pb-3"
                    >
                      <div className="relative max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                          Univers
                        </span>
                        <div className="pointer-events-none absolute left-0 top-0 font-serif text-7xl italic text-stone-200/60 md:text-8xl">
                          {String(ci + 1).padStart(2, "0")}
                        </div>
                        <h2 className="relative mt-2 font-serif text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl md:text-7xl md:leading-[1.05]">
                          {collection.title}
                        </h2>
                        <p className="mt-2 max-w-2xl font-serif text-3xl italic leading-[1.1] text-[#9d1746] md:text-5xl">
                          Signature collection
                        </p>
                        <p className="relative mt-2 max-w-2xl font-serif text-xl italic leading-relaxed text-stone-600 md:text-2xl">
                          {collection.tagline}
                        </p>
                        <p className="relative mt-2 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
                          {collection.description}
                        </p>
                        <p className="relative mt-2 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--brand-primary-dark)]">
                          {collection.pieces.length} pièce
                          {collection.pieces.length > 1 ? "s" : ""} cataloguée
                          {collection.pieces.length > 1 ? "s" : ""}
                        </p>
                      </div>
                      <motion.div
                        className="hidden md:block"
                        animate={{ x: [0, 10, 0], opacity: [0.35, 0.85, 0.35] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MoveRight
                          className="h-12 w-12 shrink-0 -translate-y-2 stroke-1 text-stone-300"
                          aria-hidden
                        />
                      </motion.div>
                    </motion.header>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="mb-2"
                    >
                      <div className="mb-1 flex flex-wrap items-center gap-1">
                        {collection.pieces.map((piece) => (
                          <span
                            key={`chip-${piece.id}`}
                            className="inline-flex items-center gap-2 border border-[#9d1746]/30 bg-[#fff8fb] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-[#9d1746]"
                          >
                            <Star className="h-3.5 w-3.5" strokeWidth={1.8} />
                            {piece.title}
                          </span>
                        ))}
                      </div>
                      <div className="relative overflow-hidden border border-stone-900/20 bg-stone-950/95 p-0">
                        {disableAutoSwiper ? (
                          <div className="flex gap-2 overflow-x-auto p-1 md:gap-3 md:p-1.5">
                            {collection.pieces.map((piece, idx) => (
                              <div
                                key={`reel-static-${piece.id}-${idx}`}
                                className="relative h-32 w-52 shrink-0 overflow-hidden border border-white/25 md:h-40 md:w-64"
                              >
                                <img
                                  src={piece.image}
                                  alt={`${piece.title} — ${collection.title}`}
                                  className="h-full w-full object-cover opacity-90"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(event) => {
                                    event.currentTarget.src = catalogFallbackImage;
                                  }}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                <span className="absolute bottom-1.5 left-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/90">
                                  {piece.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <motion.div
                            className="flex w-max gap-2 md:gap-3"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                              duration: 30,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                          >
                            {reelItems.map((piece, idx) => (
                              <div
                                key={`reel-${piece.id}-${idx}`}
                                className="relative h-32 w-52 shrink-0 overflow-hidden border border-white/25 md:h-40 md:w-64"
                              >
                                <img
                                  src={piece.image}
                                  alt={`${piece.title} — ${collection.title}`}
                                  className="h-full w-full object-cover opacity-90"
                                  loading="lazy"
                                  decoding="async"
                                  onError={(event) => {
                                    event.currentTarget.src = catalogFallbackImage;
                                  }}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                <span className="absolute bottom-1.5 left-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/90">
                                  {piece.title}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-stone-950 to-transparent md:w-16" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-stone-950 to-transparent md:w-16" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-60px" }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.09 } },
                      }}
                      className="relative z-[1] space-y-3 md:space-y-4"
                    >
                      {collection.pieces.map((piece, pi) => (
                        <motion.article
                          key={piece.id}
                          variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.62,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            },
                          }}
                          whileHover={{ y: -8, scale: 1.012 }}
                          transition={{ type: "spring", stiffness: 210, damping: 24 }}
                          className="group relative overflow-hidden border border-stone-900/20 bg-[#eee8dd] p-2 shadow-[0_20px_55px_-28px_rgba(28,25,23,0.5)] md:p-3"
                        >
                          <motion.div
                            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.52),transparent_40%),radial-gradient(circle_at_86%_82%,rgba(157,23,70,0.22),transparent_46%)]"
                            animate={{ opacity: [0.28, 0.55, 0.28] }}
                            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden
                          />
                          <motion.div
                            className="pointer-events-none absolute -left-1/3 top-0 z-[1] h-full w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                            animate={{ x: ["-120%", "260%"], opacity: [0, 0.65, 0] }}
                            transition={{
                              duration: 3.8,
                              repeat: Infinity,
                              repeatDelay: 1.4,
                              ease: "easeInOut",
                            }}
                            aria-hidden
                          />
                          <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
                            {[0, 1, 2].map((starIndex) => (
                              <motion.span
                                key={`${piece.id}-spark-${starIndex}`}
                                className="absolute text-[#9d1746]/70"
                                style={{
                                  left: `${16 + ((pi * 29 + starIndex * 21) % 70)}%`,
                                  top: `${10 + ((pi * 17 + starIndex * 27) % 70)}%`,
                                }}
                                animate={{
                                  opacity: [0.2, 0.9, 0.24],
                                  scale: [0.78, 1.14, 0.86],
                                  rotate: [0, 22, 0],
                                }}
                                transition={{
                                  duration: 2.2 + starIndex * 0.35,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: starIndex * 0.18,
                                }}
                              >
                                <Stars className="h-4 w-4" strokeWidth={1.4} />
                              </motion.span>
                            ))}
                          </div>
                          <div
                            className={`relative z-[2] grid items-stretch gap-2 md:gap-3 ${
                              pi % 2 === 0 ? "md:grid-cols-[1.25fr_1fr]" : "md:grid-cols-[1fr_1.25fr]"
                            }`}
                          >
                            <div className={`${pi % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                              <div className="relative h-full min-h-[220px] overflow-hidden border border-stone-900/25 bg-stone-950 md:min-h-[300px]">
                                <img
                                  src={piece.image}
                                  alt={`${piece.title} — ${collection.title}`}
                                  loading="lazy"
                                  decoding="async"
                                  onError={(event) => {
                                    event.currentTarget.src = catalogFallbackImage;
                                  }}
                                  style={{ objectPosition: piece.imagePosition ?? "center" }}
                                  className="h-full w-full object-cover transition duration-900 ease-out group-hover:scale-[1.09]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <motion.div
                                  className="pointer-events-none absolute inset-0 border-2 border-white/0"
                                  whileHover={{ borderColor: "rgba(255,255,255,0.35)" }}
                                  transition={{ duration: 0.35, ease: "easeOut" }}
                                  aria-hidden
                                />
                                <motion.div
                                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(255,255,255,0.26),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(190,24,93,0.26),transparent_42%)]"
                                  animate={{ opacity: [0.18, 0.48, 0.18] }}
                                  transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                                  aria-hidden
                                />
                                <div className="absolute bottom-4 left-4 border border-white/40 bg-black/45 px-3 py-2 backdrop-blur-md">
                                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80">
                                    Piece {String(pi + 1).padStart(2, "0")}
                                  </p>
                                  <p className="mt-1 font-serif text-xl italic text-white md:text-2xl">
                                    {piece.title}
                                  </p>
                                </div>
                                <div className="absolute right-4 top-4 border border-white/35 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                                  <p className="text-[9px] font-black uppercase tracking-[0.26em] text-white/85">
                                    Collection premium
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`relative overflow-hidden flex flex-col justify-between border border-stone-900/12 bg-white/70 p-5 md:p-8 ${
                                pi % 2 === 0 ? "md:order-2" : "md:order-1"
                              }`}
                            >
                              <div
                                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.62),rgba(255,255,255,0.18))]"
                                aria-hidden
                              />
                              <div className="relative z-[2]">
                               
                                <h3 className="mt-3 font-serif text-3xl font-medium leading-[0.98] tracking-tight text-stone-900 md:text-5xl">
                                  {piece.title}
                                </h3>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                                  {piece.year} · {collection.title}
                                </p>
                                <p className="mt-5 text-base leading-relaxed text-stone-700 md:text-[1.05rem]">
                                  {piece.technique} sur {piece.support}. Format {piece.dimensions}.{" "}
                                  {piece.notes ?? collection.tagline}
                                </p>
                              </div>
                              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                                <span className="border border-stone-300 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-stone-600">
                                  {piece.tirage}
                                </span>
                                {piece.encadrement != null && piece.encadrement.length > 0 && (
                                  <span className="border border-[#9d1746]/35 bg-[#fff7fb] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#9d1746]">
                                    {piece.encadrement}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.article>
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
      <style jsx global>{`
        .microbe-hue-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
        }
        .microbe-hue-slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            #ef4444 0%,
            #f59e0b 14%,
            #eab308 28%,
            #22c55e 42%,
            #06b6d4 56%,
            #3b82f6 70%,
            #8b5cf6 84%,
            #ec4899 100%
          );
        }
        .microbe-hue-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          margin-top: -4px;
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          background: #9d5c0f;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
        }
        .microbe-hue-slider::-moz-range-track {
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            #ef4444 0%,
            #f59e0b 14%,
            #eab308 28%,
            #22c55e 42%,
            #06b6d4 56%,
            #3b82f6 70%,
            #8b5cf6 84%,
            #ec4899 100%
          );
        }
        .microbe-hue-slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          background: #9d5c0f;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </SmoothScroll>
  );
}
