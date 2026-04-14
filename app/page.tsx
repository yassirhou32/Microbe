"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SmoothScroll,
  Navbar,
  Hero,
  SpotlightGrid,
  Lookbook,
  Footer,
} from "@/components/the-edit/TheEdit";

export default function Home() {
  const microSignals = [
    "Direction artistique",
    "Collections privées",
    "Édition limitée",
    "Accrochage sur mesure",
    "Signature visuelle",
  ];
  const sectionReveal = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const manifestoSlides = [
    "/images/M7_02134.jpg",
    "/images/M7_02104.jpg",
    "/images/M7_01636.jpg",
    "/images/Capture d’écran 2026-03-30 190528.png",
    "/images/Capture d’écran 2026-03-30 190452.png",
  ];
  const [manifestoIndex, setManifestoIndex] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                  Une home plus
                  <br />
                  <span className="italic text-[var(--brand-primary-soft)]">Premium. Plus vivante.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-sm tracking-[0.08em] text-white/70">
                  Direction artistique, impact visuel, mouvement éditorial.
                </p>
              </motion.div>
            </div>
          </motion.section>

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
                  <span className="text-[10px] font-black tracking-[0.28em] text-[var(--brand-primary-soft)]">
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
                
                <h2 className="mt-5 font-serif text-6xl leading-[0.93] tracking-tight md:text-8xl">
                  Plus qu'une œuvre.
                  <br />
                  <span className="italic text-[var(--brand-primary-soft)]">Une présence.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-[13px] tracking-[0.08em] text-white/72">
                  Chaque pièce est pensée pour frapper juste : volume, lumière,
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
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-white/85 backdrop-blur-sm"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-white/24 bg-white/10 p-4 backdrop-blur-sm md:p-5">
                <div className="pointer-events-none absolute inset-2 rounded-[18px] border border-white/22" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--brand-primary)]/28 blur-2xl" />
                <img
                  src="/images/M7_02104.jpg"
                  alt="Atelier Microbe"
                  className="h-56 w-full rounded-[14px] object-cover md:h-72"
                />
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-5 py-2.5 text-[10px] font-black tracking-[0.12em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                  >
                    Explorer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-5 py-2.5 text-[10px] font-black tracking-[0.12em] text-white transition hover:bg-white hover:text-stone-900"
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
                ["Impact", "Fort, net, immédiat."],
                ["Cadence", "Sélection, validation, installation."],
                ["Signature", "Mr Microbe, sans compromis."],
              ].map(([title, text], i) => {
                return (
                <motion.article
                  key={String(title)}
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
                  <h3 className="relative mt-1 font-serif text-5xl leading-none text-white">
                    {String(title)}
                  </h3>
                  <p className="relative mt-4 text-sm tracking-[0.08em] text-white/78">
                    {String(text)}
                  </p>
                  <div className="relative mt-6 h-px w-14 bg-[var(--brand-primary)]/65 transition-all duration-500 group-hover:w-28" />
                </motion.article>
              )})}
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
                  
                  <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-tight md:text-6xl">
                    Du brief au mur final.
                  </h2>
                </div>
                <Link
                  href="/immersion"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-7 py-3 text-[10px] font-black tracking-[0.12em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                >
                  Voir l'immersion
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mb-10 flex items-center justify-between gap-4 rounded-full border border-[var(--brand-primary)]/20 bg-white/70 px-5 py-3.5 backdrop-blur-sm">
                <p className="text-[10px] font-black tracking-[0.12em] text-[var(--brand-primary-dark)]">
                  Étape active : {String(activeJourneyStep + 1).padStart(2, "0")}
                </p>
                <div className="relative h-1 w-40 overflow-hidden rounded-full bg-[var(--brand-primary)]/18 md:w-64">
                  <motion.span
                    className="absolute left-0 top-0 h-full rounded-full bg-[var(--brand-primary)]"
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
                    ["01", "Brief", "Intentions, espace, dimensions, budget, délai."],
                    ["02", "Sélection", "Proposition de pièces ou axes sur mesure."],
                    ["03", "Validation", "Ajustements finaux de format et impact visuel."],
                    ["04", "Installation", "Accrochage et mise en scène dans le lieu."],
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

          <Lookbook />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
