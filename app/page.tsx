"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Gem, Crown, WandSparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SmoothScroll,
  Navbar,
  Hero,
  TheManifesto,
  SpotlightGrid,
  Lookbook,
  TheDialogue,
  Footer,
} from "@/components/the-edit/TheEdit";

export default function Home() {
  const microSignals = [
    "Direction artistique",
    "Collections privees",
    "Edition limitee",
    "Accrochage sur mesure",
    "Signature visuelle",
  ];
  const premiumLoop = [
    "COLLECTION",
    "IMMERSION",
    "SIGNATURE",
    "COLLECTION",
    "IMMERSION",
    "SIGNATURE",
  ];
  const sectionReveal = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const manifestoSlides = [
    "/images/M7_02134.jpg",
    "/images/M7_02104.jpg",
    "/images/M7_01636.jpg",
    "/images/M7_03109.jpg",
    "/images/M7_03110.jpg",
  ];
  const [manifestoIndex, setManifestoIndex] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [signatureActive, setSignatureActive] = useState(0);
  const [whyActive, setWhyActive] = useState(0);
  const [faqActive, setFaqActive] = useState(0);
  const elasticFeatures = [
    {
      label: "Collections",
      heading: "Collections pensees pour marquer un espace",
      sub: "Univers complets avec formats, supports et tirages. Chaque serie est construite pour donner une presence forte au lieu.",
      img: "/images/M7_02134.jpg",
    },
    {
      label: "Selection",
      heading: "Selection juste selon ton espace",
      sub: "Accompagnement sur mesure pour choisir la piece qui correspond a ta lumiere, ton rythme et ton intention.",
      img: "/images/M7_03110.jpg",
    },
    {
      label: "Accrochage",
      heading: "Accrochage et respiration du mur",
      sub: "Conseils de placement, hauteur et composition pour que l oeuvre s integre naturellement et impacte immediatement.",
      img: "/images/M7_01636.jpg",
    },
    {
      label: "Signature",
      heading: "Dialogue direct artiste / collectionneur",
      sub: "Un echange simple, clair et humain pour construire une piece qui te ressemble, sans compromis.",
      img: "/images/M7_03109.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setManifestoIndex((n) => (n + 1) % manifestoSlides.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [manifestoSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJourneyStep((n) => (n + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFaqActive((n) => (n + 1) % 3);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--brand-primary-soft)] text-stone-900 overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/30 bg-stone-950 px-6 py-20 text-white md:px-20 md:py-24"
          >
            <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[var(--brand-primary)]/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <motion.div
              animate={{ opacity: [0.18, 0.32, 0.18] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]"
            />
            <div className="mx-auto max-w-7xl">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="mb-10 flex w-max items-center gap-8 opacity-80"
              >
                {[...premiumLoop, ...premiumLoop].map((w, i) => (
                  <React.Fragment key={`${w}-${i}`}>
                    <span className="text-[11px] font-black uppercase tracking-[0.42em] text-white/70">
                      {w}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                  </React.Fragment>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                    Une home plus
                    <br />
                    <span className="italic text-[var(--brand-primary-soft)]">premium. plus vivante.</span>
                  </h2>
                  <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.22em] text-white/70">
                    Direction artistique, impact visuel, mouvement editorial.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {["Studio", "Art", "Mood", "Live"].map((n) => (
                    <div
                      key={n}
                      className="relative overflow-hidden border border-white/20 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,255,255,0.2),rgba(0,0,0,0))]" />
                      <p className="relative text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                        {n}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative border-y border-[var(--brand-primary)]/25 bg-[#f5f5f5] px-6 py-16 md:px-20 md:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#6366f1]">
                  Mr Microbe — Collection Signature
                </p>
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                  Oeuvres, selection et accrochage sur mesure
                </h2>
                <p className="text-base text-neutral-500">
                  Des pieces fortes, pensees pour ton espace et ton rythme.
                </p>
              </div>
              <div className="flex h-[560px] w-full flex-col gap-4 md:h-[460px] md:flex-row">
                {elasticFeatures.map((item, i) => (
                  <motion.article
                    key={item.label}
                    layout
                    onClick={() => setSignatureActive(i)}
                    onHoverStart={() => setSignatureActive(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "relative cursor-pointer overflow-hidden rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      signatureActive === i ? "md:flex-[10]" : "bg-white hover:bg-neutral-200 md:flex-[1]"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={false}
                      animate={{ opacity: signatureActive === i ? 1 : 0 }}
                    >
                      <img src={item.img} className="h-full w-full object-cover opacity-100" alt="" />
                    </motion.div>

                    <div
                      className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                        signatureActive === i ? "pointer-events-none opacity-0" : "opacity-100"
                      )}
                    >
                      <h3 className="whitespace-nowrap text-xl font-bold uppercase tracking-widest text-neutral-400 [-webkit-writing-mode:vertical-rl] [writing-mode:vertical-rl] [transform:rotate(180deg)]">
                        {item.label}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "relative flex h-full flex-col justify-end p-8 transition-opacity duration-500 delay-100 md:p-12",
                        signatureActive === i ? "opacity-100" : "pointer-events-none opacity-0"
                      )}
                    >
                      <span
                        className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest"
                        style={{ backgroundColor: "#ffffffea", color: "#4c1d95" }}
                      >
                        {item.label}
                      </span>
                      <motion.h2 layout="position" className="mb-4 text-4xl font-bold leading-tight text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.72)] md:text-6xl">
                        {item.heading}
                      </motion.h2>
                      <motion.p layout="position" className="max-w-lg text-lg text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.72)]">
                        {item.sub}
                      </motion.p>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 w-fit rounded-full border border-white bg-white/10 px-6 py-3 font-medium text-white transition-colors"
                      >
                        Explorer la collection →
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <TheManifesto />

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/35 bg-black px-6 py-20 text-white md:px-20"
          >
            <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[var(--brand-primary)]/28 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-fuchsia-400/25 blur-3xl" />
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--brand-primary-soft)]">
                    Galerie atelier
                  </span>
                  <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">
                    Vision en mouvement.
                  </h2>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  {manifestoSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setManifestoIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === manifestoIndex
                          ? "scale-110 bg-[var(--brand-primary)]"
                          : "bg-white/35"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative h-[62vh] overflow-hidden border border-white/20 bg-white/5 md:h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={manifestoSlides[manifestoIndex]}
                    src={manifestoSlides[manifestoIndex]}
                    alt="Galerie Mr Microbe"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/20" />
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/40 bg-stone-950 px-6 py-28 text-white md:px-20 md:py-32"
          >
            <motion.div
              animate={{ x: ["-8%", "8%", "-8%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(188,64,119,0.2),rgba(0,0,0,0))]"
            />
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
            <motion.div
              animate={{ opacity: [0.22, 0.45, 0.22] }}
              transition={{ duration: 3.6, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_20%,rgba(188,64,119,0.18),rgba(0,0,0,0))]"
            />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                  Note d atelier
                </span>
                <h2 className="mt-5 font-serif text-6xl leading-[0.93] tracking-tight md:text-8xl">
                  Plus qu une oeuvre.
                  <br />
                  <span className="italic text-[var(--brand-primary-soft)]">Une presence.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-[13px] uppercase tracking-[0.22em] text-white/72">
                  Chaque piece est pensee pour frapper juste: volume, lumiere,
                  impact.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {microSignals.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.23em] text-white/85 backdrop-blur-sm"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-white/24 bg-white/10 p-4 backdrop-blur-sm md:p-5">
                <div className="pointer-events-none absolute inset-2 rounded-[18px] border border-white/22" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--brand-primary)]/28 blur-2xl" />
                <div className="pointer-events-none absolute left-4 top-4 z-20 border border-white/30 bg-black/40 px-3 py-1 text-[9px] font-black uppercase tracking-[0.26em] text-white/80">
                  Curated Frame
                </div>
                <img
                  src="/images/M7_02104.jpg"
                  alt="Atelier Microbe"
                  className="h-56 w-full rounded-[14px] object-cover md:h-72"
                />
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                  >
                    Explorer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white/60 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-stone-900"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/35 bg-black px-6 py-24 text-white md:px-20 md:py-28"
          >
            <div className="pointer-events-none absolute -left-20 top-6 h-44 w-44 rounded-full bg-[var(--brand-primary)]/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-6 h-52 w-52 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ["Impact", "Fort. net. immediat.", Gem],
                ["Cadence", "Selection. validation. installation.", WandSparkles],
                ["Signature", "Mr Microbe. sans compromis.", Crown],
              ].map(([title, text, Icon], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/24 bg-gradient-to-br from-white/16 via-white/10 to-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/18 hover:shadow-[0_36px_60px_-22px_rgba(0,0,0,0.7)]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--brand-primary)]/18 blur-2xl" />
                  <div className="pointer-events-none absolute inset-2 rounded-[16px] border border-white/24" />
                  <div className="pointer-events-none absolute inset-5 rounded-[12px] border border-[var(--brand-primary)]/18" />
                  <Icon className="relative h-7 w-7 text-[var(--brand-primary-soft)] drop-shadow-[0_6px_16px_rgba(188,64,119,0.45)]" />
                  <h3 className="relative mt-1 font-serif text-5xl leading-none text-white">
                    {title}
                  </h3>
                  <p className="relative mt-4 text-sm uppercase tracking-[0.22em] text-white/78">
                    {text}
                  </p>
                  <div className="relative mt-6 h-px w-14 bg-[var(--brand-primary)]/65 transition-all duration-500 group-hover:w-28" />
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/25 bg-gradient-to-b from-white to-[var(--brand-primary-soft)]/45 px-6 py-24 md:px-20 md:py-28"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle,rgba(188,64,119,0.2),rgba(0,0,0,0))]" />
            <motion.div
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(188,64,119,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(188,64,119,0.08)_1px,transparent_1px)] [background-size:28px_28px]"
            />
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Parcours collectionneur
                  </span>
                  <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-tight md:text-6xl">
                    Du brief au mur final.
                  </h2>
                </div>
                <Link
                  href="/immersion"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-7 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                >
                  Voir immersion
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mb-10 flex items-center justify-between gap-4 border border-[var(--brand-primary)]/20 bg-white/70 px-5 py-3.5 backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                  Etape active: {String(activeJourneyStep + 1).padStart(2, "0")}
                </p>
                <div className="relative h-1 w-40 overflow-hidden bg-[var(--brand-primary)]/18 md:w-64">
                  <motion.span
                    className="absolute left-0 top-0 h-full bg-[var(--brand-primary)]"
                    animate={{ width: `${((activeJourneyStep + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="relative mt-4">
                <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-[linear-gradient(to_right,rgba(188,64,119,0.08),rgba(188,64,119,0.6),rgba(188,64,119,0.08))] md:block" />
                <motion.div
                  animate={{ backgroundPositionX: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px opacity-80 md:block [background-image:linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,0.85),rgba(255,255,255,0))] [background-size:220px_100%]"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-5">
                  {[
                    ["01", "Brief", "Intentions, espace, dimensions, budget, delai."],
                    ["02", "Selection", "Proposition de pieces ou axes sur mesure."],
                    ["03", "Validation", "Ajustements finaux de format et impact visuel."],
                    ["04", "Installation", "Accrochage et mise en scene dans le lieu."],
                  ].map(([step, title, text], i) => (
                    <motion.article
                      key={step}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: i * 0.05 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      animate={
                        activeJourneyStep === i
                          ? {
                              y: -10,
                              rotateX: -3,
                              rotateY: i % 2 === 0 ? -2 : 2,
                              boxShadow:
                                "0 34px 56px -20px rgba(28,25,23,0.58)",
                            }
                          : {
                              y: 0,
                              rotateX: 0,
                              rotateY: 0,
                              boxShadow:
                                "0 16px 30px -20px rgba(28,25,23,0.4)",
                            }
                      }
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className={`group relative overflow-hidden rounded-[24px] border p-6 [transform-style:preserve-3d] transition-all duration-500 ${
                        activeJourneyStep === i
                          ? "border-[var(--brand-primary)]/60 bg-gradient-to-br from-white via-[var(--brand-primary-soft)]/45 to-white"
                          : "border-[var(--brand-primary)]/28 bg-gradient-to-br from-white/95 via-white to-[var(--brand-primary-soft)]/38"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-[10px] rounded-[16px] border border-[var(--brand-primary)]/14" />
                      <div className="pointer-events-none absolute inset-[16px] rounded-[12px] border border-white/45" />
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--brand-primary)]/16 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-[var(--brand-primary)]/12 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      {activeJourneyStep === i && (
                        <motion.div
                          layoutId="journey-active-glow"
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(188,64,119,0.24),rgba(255,255,255,0))]"
                        />
                      )}
                      <div className="relative mb-4 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-primary)]/40 bg-white text-[11px] font-black tracking-widest text-[var(--brand-primary-dark)] shadow-[0_10px_20px_-12px_rgba(28,25,23,0.5)]">
                          {step}
                        </span>
                        <span className="relative h-px flex-1 bg-[var(--brand-primary)]/35">
                          {activeJourneyStep === i && (
                            <motion.span
                              className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--brand-primary)]"
                              animate={{ x: ["0%", "100%"] }}
                              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                            />
                          )}
                        </span>
                      </div>
                      <h3 className="relative font-serif text-[2.15rem] leading-none tracking-tight text-stone-900">
                        {title}
                      </h3>
                      <p className="relative mt-3 max-w-[24ch] text-sm leading-relaxed text-stone-700">
                        {text}
                      </p>
                      <motion.div
                        className="relative mt-4 h-px bg-[var(--brand-primary)]/25"
                        animate={
                          activeJourneyStep === i
                            ? { opacity: [0.4, 1, 0.4], scaleX: [0.9, 1, 0.9] }
                            : { opacity: 0.35, scaleX: 1 }
                        }
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <SpotlightGrid />

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden bg-stone-950 px-6 py-20 text-white md:px-20"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full border border-[var(--brand-primary)]/20"
            />
            <motion.div
              animate={{ opacity: [0.16, 0.34, 0.16], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-16 bottom-8 h-56 w-56 rounded-full bg-[var(--brand-primary)]/20 blur-3xl"
            />
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-end justify-between gap-4">
                <div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                  Chiffres atelier
                </span>
                  <h3 className="mt-4 font-serif text-4xl leading-none md:text-5xl">
                    Data • Emotion • Impact
                  </h3>
                </div>
                <p className="hidden max-w-sm text-right text-[10px] font-black uppercase tracking-[0.26em] text-white/60 md:block">
                  Indicateurs vivants de production, reactivite et personnalisation.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {[
                  ["200+", "Pieces creees", "Toiles, resines, editions."],
                  ["6", "Univers", "Toiles, Petit Microbe, Monocycle."],
                  ["24-48h", "Reponse", "Retour rapide et qualifie."],
                  ["100%", "Sur mesure", "Chaque projet est unique."],
                ].map(([value, label, desc], i) => (
                  <motion.article
                    key={value}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -8, rotateX: -2, rotateY: i % 2 === 0 ? -2 : 2 }}
                    className="group relative overflow-hidden rounded-[22px] border border-white/24 bg-gradient-to-br from-white/16 to-white/[0.05] p-6 backdrop-blur-sm [transform-style:preserve-3d] transition-all duration-500 hover:bg-white/20 hover:shadow-[0_34px_62px_-20px_rgba(0,0,0,0.66)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(188,64,119,0.14),rgba(255,255,255,0))]" />
                    <div className="pointer-events-none absolute inset-[8px] rounded-[16px] border border-white/20" />
                    <div className="pointer-events-none absolute inset-[14px] rounded-[12px] border border-[var(--brand-primary)]/18" />
                    <motion.div
                      className="pointer-events-none absolute -left-10 top-0 h-full w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.45),rgba(255,255,255,0))]"
                      animate={{ x: ["-120%", "520%"] }}
                      transition={{ duration: 3.4 + i * 0.2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-full border border-[var(--brand-primary)]/25" />
                    <div className="pointer-events-none absolute left-4 bottom-4 h-10 w-px bg-gradient-to-t from-white/40 to-transparent" />
                    <div className="pointer-events-none absolute left-4 bottom-4 h-px w-10 bg-gradient-to-r from-white/40 to-transparent" />
                    <div className="pointer-events-none absolute left-4 top-4 text-[9px] font-black uppercase tracking-[0.28em] text-white/55">
                      0{i + 1}
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-16 bg-[var(--brand-primary)]/45 transition-all duration-500 group-hover:w-28" />
                    <div className="pointer-events-none absolute right-0 top-0 h-16 w-px bg-[var(--brand-primary)]/45 transition-all duration-500 group-hover:h-24" />
                    <p className="relative font-serif text-5xl leading-none text-white drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.06]">
                      {value}
                    </p>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-soft)]">
                      {label}
                    </p>
                    <p className="mt-3 max-w-[22ch] text-sm text-white/78">{desc}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <Lookbook />
          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden bg-stone-900 px-6 py-20 text-stone-100 md:px-20"
          >
            <motion.div
              animate={{ opacity: [0.12, 0.25, 0.12] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,64,119,0.25),rgba(0,0,0,0))]"
            />
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--brand-primary-soft)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--brand-primary-soft)]">
                  Pourquoi Mr Microbe
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {[
                  "Signature visuelle forte et reconnaissable",
                  "Pieces adaptees a ton espace et a ton rythme",
                  "Dialogue direct artiste / collectionneur",
                ].map((line, i) => (
                  <motion.p
                    key={line}
                    layout
                    onClick={() => setWhyActive(i)}
                    onHoverStart={() => setWhyActive(i)}
                    className={cn(
                      "cursor-pointer border bg-white/[0.035] p-6 font-serif text-3xl leading-tight transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      whyActive === i
                        ? "border-white/45 text-white shadow-[0_18px_34px_-20px_rgba(255,255,255,0.28)]"
                        : "border-white/20 text-stone-100/95 hover:border-white/35"
                    )}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden border-y border-[var(--brand-primary)]/25 bg-gradient-to-b from-white to-[var(--brand-primary-soft)]/35 px-6 py-24 md:px-20"
          >
            <div className="pointer-events-none absolute -left-8 bottom-8 h-36 w-36 rounded-full bg-[var(--brand-primary)]/14 blur-2xl" />
            <div className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full bg-[var(--brand-primary)]/16 blur-3xl" />
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 flex items-end justify-between gap-5">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Questions frequentes
                </span>
                <div className="hidden items-center gap-2 md:flex">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setFaqActive(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        faqActive === i
                          ? "scale-110 bg-[var(--brand-primary)]"
                          : "bg-[var(--brand-primary)]/25"
                      }`}
                      aria-label={`FAQ ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  [
                    "Comment choisir la bonne collection ?",
                    "On lit le lieu, puis on propose court, clair, precis.",
                  ],
                  [
                    "Peut-on commander une piece unique ?",
                    "Oui. Brief, format, mood, puis execution sur mesure.",
                  ],
                  [
                    "Aidez-vous pour l accrochage ?",
                    "Oui. Placement, hauteur, respiration, composition finale.",
                  ],
                ].map(([q, a], i) => (
                  <motion.article
                    key={q}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    onMouseEnter={() => setFaqActive(i)}
                    onClick={() => setFaqActive(i)}
                    animate={
                      faqActive === i
                        ? {
                            scale: 1.015,
                            boxShadow: "0 24px 40px -24px rgba(28,25,23,0.5)",
                          }
                        : {
                            scale: 1,
                            boxShadow: "0 8px 20px -18px rgba(28,25,23,0.25)",
                          }
                    }
                    className={`group relative cursor-pointer overflow-hidden rounded-[18px] border p-6 transition-all duration-500 ${
                      faqActive === i
                        ? "border-[var(--brand-primary)]/45 bg-white"
                        : "border-[var(--brand-primary)]/28 bg-[var(--brand-primary-soft)]/45"
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[var(--brand-primary)]/15 blur-xl" />
                    <div className="pointer-events-none absolute inset-2 rounded-[12px] border border-[var(--brand-primary)]/12" />
                    <div className="relative flex items-start justify-between gap-4">
                      <h3 className="font-serif text-3xl leading-tight text-stone-900">{q}</h3>
                      <span
                        className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-black transition ${
                          faqActive === i
                            ? "border-[var(--brand-primary)] text-[var(--brand-primary-dark)]"
                            : "border-stone-300 text-stone-500"
                        }`}
                      >
                        {faqActive === i ? "−" : "+"}
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {faqActive === i ? (
                        <motion.p
                          key="open"
                          initial={{ height: 0, opacity: 0, y: -6 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -6 }}
                          transition={{ duration: 0.28 }}
                          className="relative mt-3 overflow-hidden text-stone-700"
                        >
                          {a}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          exit={{ opacity: 0 }}
                          className="relative mt-3 text-stone-700/70"
                        >
                          {a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <motion.div
                      className="relative mt-4 h-px bg-[var(--brand-primary)]/25"
                      animate={
                        faqActive === i
                          ? { opacity: [0.35, 1, 0.35], scaleX: [0.9, 1, 0.9] }
                          : { opacity: 0.25, scaleX: 1 }
                      }
                      transition={{ duration: 1.1, repeat: Infinity }}
                    />
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
          <TheDialogue />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
