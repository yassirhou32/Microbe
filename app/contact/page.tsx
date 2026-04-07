"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
} from "@/components/the-edit/TheEdit";

export default function ContactPage() {
  const briefSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: briefProgress } = useScroll({
    target: briefSectionRef,
    offset: ["start end", "end start"],
  });
  const smoothBrief = useSpring(briefProgress, { stiffness: 80, damping: 22, mass: 0.45 });
  const briefYLeft = useTransform(smoothBrief, [0, 1], [56, -42]);
  const briefYRight = useTransform(smoothBrief, [0, 1], [76, -58]);
  const briefRotateLeft = useTransform(smoothBrief, [0, 1], [4, -3]);
  const briefRotateRight = useTransform(smoothBrief, [0, 1], [-4, 3]);
  const briefGlowScale = useTransform(smoothBrief, [0, 0.5, 1], [0.9, 1.22, 0.95]);
  const briefGlowOpacity = useTransform(smoothBrief, [0, 0.5, 1], [0.2, 0.42, 0.22]);

  const ribbonWords = [
    "Direction artistique",
    "Collections",
    "Accrochage",
    "Grand format",
    "Selection",
    "Immersion",
  ];
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[var(--brand-primary-soft)] text-stone-900">
        <Navbar />

        <main>
          <header className="relative overflow-hidden bg-stone-900 px-6 pb-20 pt-36 text-stone-100 md:px-20 md:pb-28 md:pt-40">
            <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[var(--brand-primary)]/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                / Contact Mr Microbe
              </span>
              <h1 className="mt-6 font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl">
                Nous sommes
                <br />
                <span className="italic font-normal text-white/90">a votre ecoute.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-sm uppercase tracking-[0.2em] text-stone-300 md:text-xs">
                Parlez-nous de votre espace, de votre budget et de votre intention.
                Nous revenons vers vous avec une proposition claire et artistique.
              </p>
            </div>
          </header>

          <section className="relative overflow-hidden border-y border-[var(--brand-primary)]/30 bg-stone-900 py-5 text-stone-100">
            <div className="contact-ribbon flex w-max items-center gap-4 px-6 md:gap-6 md:px-20">
              {[...ribbonWords, ...ribbonWords, ...ribbonWords].map((w, i) => (
                <div key={`${w}-${i}`} className="flex items-center gap-4 md:gap-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-soft)]">
                    {w}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-[var(--brand-primary)]/35 bg-stone-950 px-6 py-20 text-white md:px-20 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(188,64,119,0.25),rgba(0,0,0,0))]" />
            <motion.div
              aria-hidden
              animate={{ opacity: [0.08, 0.24, 0.08] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px]"
            />
            <motion.div
              aria-hidden
              animate={{ x: ["-20%", "120%"] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.45),rgba(255,255,255,0))] blur-md"
            />

            <div className="relative mx-auto max-w-7xl border border-white/20 bg-black/35 p-6 backdrop-blur-sm md:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="relative overflow-hidden border border-white/18 bg-white/[0.03] p-6 md:p-8"
                >
                  <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full border border-[var(--brand-primary)]/35"
                  />
                  <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--brand-primary-soft)]">
                    Contact signature
                  </p>
                  <motion.h2
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-5 font-serif text-5xl leading-[0.9] tracking-tight md:text-7xl"
                  >
                    Une energie.
                    <br />
                    Un contact direct.
                  </motion.h2>

                  <motion.a
                    href="tel:+33660707833"
                    whileHover={{ scale: 1.03 }}
                    className="group mt-7 inline-block"
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          "0 0 0 rgba(188,64,119,0)",
                          "0 12px 34px rgba(188,64,119,0.45)",
                          "0 0 0 rgba(188,64,119,0)",
                        ],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="font-serif text-[2.4rem] leading-none md:text-[4.9rem]"
                    >
                      06 60 70 78 33
                    </motion.span>
                    <span className="mt-2 block h-px w-24 bg-[var(--brand-primary)]/70 transition-all duration-500 group-hover:w-full" />
                  </motion.a>

                  <div className="mt-7 overflow-hidden border-y border-white/15 py-2">
                    <motion.div
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                      className="flex w-max items-center gap-8"
                    >
                      {[
                        "DIRECTION ARTISTIQUE",
                        "SELECTION PRECISE",
                        "COLLECTION PRIVEE",
                        "ACCOMPAGNEMENT TOTAL",
                        "DIRECTION ARTISTIQUE",
                        "SELECTION PRECISE",
                        "COLLECTION PRIVEE",
                        "ACCOMPAGNEMENT TOTAL",
                      ].map((word, i) => (
                        <span
                          key={`${word}-${i}`}
                          className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-soft)]/90"
                        >
                          {word}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {[
                    ["Email", "mrmicrobe.furgerot@gmail.com"],
                    ["Disponibilite", "9h-18h · tous les jours sauf weekend"],
                    ["Adresse", "19 rue de Saint Gobain, 37700 Saint-Pierre-des-Corps"],
                    ["Delai", "Reponse sous 24-48h"],
                  ].map(([label, value], i) => (
                    <motion.article
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.38, delay: 0.12 + i * 0.06 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className={`group relative overflow-hidden border border-white/20 bg-white/[0.05] p-5 md:p-6 ${
                        label === "Adresse" || label === "Email" ? "md:col-span-2" : ""
                      }`}
                    >
                      <motion.div
                        aria-hidden
                        animate={{ opacity: [0.15, 0.45, 0.15] }}
                        transition={{ duration: 2.2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--brand-primary)]/25 blur-2xl"
                      />
                      <motion.div
                        aria-hidden
                        animate={{ x: ["-120%", "220%"] }}
                        transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0))]"
                      />
                      <p className="relative text-[10px] font-black uppercase tracking-[0.34em] text-[var(--brand-primary-soft)]">
                        {label}
                      </p>
                      <p
                        className={`relative mt-3 font-serif leading-tight ${
                          label === "Email"
                            ? "break-all text-[1.35rem] md:text-[2.1rem]"
                            : "text-[1.6rem] md:text-[2rem]"
                        }`}
                      >
                        {value}
                      </p>
                      <div className="relative mt-4 h-px w-14 bg-[var(--brand-primary)]/60 transition-all duration-500 group-hover:w-24" />
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-[var(--brand-primary)]/30 bg-stone-900 px-6 py-20 text-stone-100 md:px-20 md:py-24">
            <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[var(--brand-primary)]/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-primary)]/22 blur-3xl" />
            <motion.div
              aria-hidden
              animate={{ x: [-20, 24, -20], y: [0, -14, 0], opacity: [0.2, 0.42, 0.2] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[18%] top-8 h-14 w-14 rounded-full border border-[var(--brand-primary-soft)]/65"
            />
            <motion.div
              aria-hidden
              animate={{ x: [0, 30, 0], y: [0, 10, 0], opacity: [0.18, 0.4, 0.18] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-[22%] top-12 h-10 w-10 rounded-full border border-[var(--brand-primary-soft)]/60"
            />

            <div className="relative mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                    Adresse atelier
                  </span>
                  <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                    Venez nous trouver.
                  </h2>
                  <p className="mt-5 max-w-3xl text-sm uppercase tracking-[0.22em] text-stone-300 md:text-xs">
                    19 rue de saint gobain 37700 Saint pierre des corps
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--brand-primary)]/45 bg-[var(--brand-primary)]/20 px-6 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-soft)] transition hover:bg-[var(--brand-primary)]/30"
                >
                  Ouvrir dans Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="group relative overflow-visible rounded-[28px] border border-[var(--brand-primary)]/45 bg-black/30 p-3 shadow-[0_30px_70px_-30px_rgba(188,64,119,0.55)] md:p-5"
              >
                <motion.div
                  aria-hidden
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[var(--brand-primary)]/45"
                />
                <motion.div
                  aria-hidden
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full border border-[var(--brand-primary)]/40"
                />
                <motion.div
                  aria-hidden
                  animate={{ x: [0, 70, 120], scale: [1, 1.35, 0.9], opacity: [0.32, 0.78, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute right-12 top-10 h-10 w-10 rounded-full border border-[var(--brand-primary-soft)]/75"
                />
                <motion.div
                  aria-hidden
                  animate={{ x: [0, 54, 92], y: [0, -12, -18], scale: [1, 1.35, 0.92], opacity: [0.25, 0.72, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-14 bottom-12 h-7 w-7 rounded-full border border-[var(--brand-primary-soft)]/70"
                />
                <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-[var(--brand-primary)]/18 md:inset-3" />
                <div className="pointer-events-none absolute left-5 top-5 h-12 w-px bg-gradient-to-b from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute left-5 top-5 h-px w-12 bg-gradient-to-r from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-px bg-gradient-to-t from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-5 right-5 h-px w-12 bg-gradient-to-l from-[var(--brand-primary-soft)]/70 to-transparent" />
                <motion.div
                  aria-hidden
                  animate={{ x: ["-120%", "260%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(188,64,119,0.45),rgba(255,255,255,0))]"
                />

                <motion.div
                  animate={{ scale: [1, 1.01, 1] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/30"
                >
                  <motion.div
                    aria-hidden
                    animate={{ opacity: [0.18, 0.42, 0.18] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(188,64,119,0.25),rgba(0,0,0,0))]"
                  />
                  <iframe
                    title="Carte atelier Mr Microbe"
                    src="https://www.google.com/maps?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps&output=embed"
                    className="h-[480px] w-full md:h-[620px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <motion.section
            ref={briefSectionRef}
            className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,241,248,0.78),rgba(255,255,255,0.74))] px-6 py-20 md:px-20 md:py-24"
          >
            <div className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full bg-[var(--brand-primary)]/16 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-[var(--brand-primary)]/18 blur-3xl" />
            <motion.div
              aria-hidden
              style={{ scale: briefGlowScale, opacity: briefGlowOpacity }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(188,64,119,0.34),rgba(255,255,255,0),rgba(188,64,119,0.28),rgba(255,255,255,0),rgba(188,64,119,0.34))] blur-3xl"
            />
            <motion.div
              aria-hidden
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(188,64,119,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(188,64,119,0.08)_1px,transparent_1px)] [background-size:30px_30px]"
            />
            <motion.div
              aria-hidden
              style={{ y: briefYRight }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-14 top-10 h-40 w-40 rounded-full border border-[var(--brand-primary)]/25"
            />
            <motion.div
              aria-hidden
              style={{ y: briefYLeft }}
              animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 bottom-10 h-24 w-24 rounded-full border border-[var(--brand-primary)]/28"
            />
            <div className="relative mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  style={{ y: briefYLeft, rotateX: briefRotateLeft }}
                  animate={{ y: [0, -8, 0], rotateZ: [0, -0.5, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden border border-[var(--brand-primary)]/28 bg-white/75 p-7 shadow-[0_28px_56px_-36px_rgba(28,25,23,0.55)] backdrop-blur-sm [transform-style:preserve-3d] md:p-9"
                >
                  <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full border border-[var(--brand-primary)]/30"
                  />
                  <motion.div
                    aria-hidden
                    animate={{ x: ["-120%", "220%"] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(188,64,119,0.34),rgba(255,255,255,0))]"
                  />
                  <motion.div
                    aria-hidden
                    animate={{ x: ["-30%", "120%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.42),rgba(255,255,255,0))]"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Brief de projet
                  </span>
                  <h2 className="mt-5 font-serif text-5xl leading-[1] tracking-tight text-stone-900 md:text-6xl">
                    Racontez-nous
                    <br />
                    votre projet.
                  </h2>
                  <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-stone-700">
                    Ce formulaire nous permet de preparer une recommandation precise :
                    collection ciblee, format, budget, delai et contraintes de votre espace.
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    {[
                      "Lecture d espace",
                      "Conseil format",
                      "Selection d oeuvre",
                      "Accrochage",
                    ].map((chip, i) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        className="border border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)]/50 px-3 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[var(--brand-primary-dark)]"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>
                  <Separator color="bg-[var(--brand-primary)]" />
                  <div className="mt-6 border border-[var(--brand-primary)]/22 bg-white/70 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--brand-primary-dark)]">
                      Delai moyen
                    </p>
                    <p className="mt-2 font-serif text-3xl leading-none text-stone-900">
                      24 - 48h
                    </p>
                  </div>
                  <blockquote className="mt-8 border-l-2 border-[var(--brand-primary)]/50 pl-4 font-serif text-xl italic leading-relaxed text-stone-700">
                    "Chaque demande est traitee comme une direction artistique unique,
                    jamais comme un simple devis."
                  </blockquote>
                  <Link
                    href="/collections"
                    className="mt-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)] transition hover:opacity-75"
                  >
                    Voir les collections <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.form
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  style={{ y: briefYRight, rotateX: briefRotateRight }}
                  animate={{ y: [0, -10, 0], rotateZ: [0, 0.6, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden border border-[var(--brand-primary)]/35 bg-[linear-gradient(160deg,rgba(255,241,248,0.95),rgba(255,255,255,0.88))] p-6 shadow-[0_30px_60px_-30px_rgba(28,25,23,0.5)] [transform-style:preserve-3d] md:p-8"
                >
                  <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[var(--brand-primary)]/35"
                  />
                  <motion.div
                    aria-hidden
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full border border-[var(--brand-primary)]/35"
                  />
                  <div className="pointer-events-none absolute inset-3 border border-[var(--brand-primary)]/16" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(188,64,119,0.14),rgba(255,255,255,0))]" />
                  <motion.div
                    aria-hidden
                    animate={{ x: ["-120%", "220%"] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0))]"
                  />
                  <div className="relative mb-6 flex items-center justify-between gap-3 border-b border-[var(--brand-primary)]/25 pb-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[var(--brand-primary-dark)]">
                      Formulaire collectionneur
                    </p>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.9, 1.2, 0.9] }}
                      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                      className="h-px w-16 bg-[var(--brand-primary)]/70"
                    />
                  </div>
                  <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2">
                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Nom complet
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="Votre nom" />
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Email
                      </span>
                      <input type="email" className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="vous@email.com" />
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Telephone
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="+33..." />
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Ville
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="Paris, Lyon..." />
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Budget estime
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]">
                        <option>Moins de 2 000 EUR</option>
                        <option>2 000 a 5 000 EUR</option>
                        <option>5 000 a 10 000 EUR</option>
                        <option>10 000 EUR et +</option>
                      </select>
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Collection d interet
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]">
                        <option>Les toiles</option>
                        <option>Petit Microbe (resines)</option>
                        <option>Monocycle</option>
                        <option>Grand format</option>
                        <option>Luminaire</option>
                        <option>Joaillerie / piece speciale</option>
                      </select>
                    </motion.label>

                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Objectif
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]">
                        <option>Acquerir une oeuvre existante</option>
                        <option>Commande sur mesure</option>
                        <option>Conseil accrochage / selection</option>
                        <option>Constitution de collection</option>
                      </select>
                    </motion.label>
                  </div>

                  <div className="relative mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <motion.label whileHover={{ y: -2, scale: 1.01 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Dimensions du mur (cm)
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="Ex: 280 x 240" />
                    </motion.label>

                    <motion.label whileHover={{ y: -2 }} className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Delai souhaite
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]">
                        <option>Des que possible</option>
                        <option>Sous 1 mois</option>
                        <option>Sous 2 a 3 mois</option>
                        <option>Projet long terme</option>
                      </select>
                    </motion.label>
                  </div>

                  <motion.label whileHover={{ y: -2, scale: 1.005 }} className="relative mt-5 block">
                    <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                      Message
                    </span>
                    <textarea rows={5} className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white px-4 py-3 outline-none transition focus:-translate-y-0.5 focus:border-[var(--brand-primary-dark)] focus:shadow-[0_10px_20px_-14px_rgba(188,64,119,0.8)]" placeholder="Parlez-nous de l ambiance souhaitee, des couleurs, de la piece, des contraintes techniques et de votre coup de coeur dans les collections..." />
                  </motion.label>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                    className="relative mt-6 inline-flex items-center gap-2 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-8 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[0_16px_28px_-14px_rgba(155,47,96,0.8)] transition hover:bg-[var(--brand-primary-dark)]"
                  >
                    Envoyer la demande <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        .contact-ribbon {
          animation: contactRibbon 32s linear infinite;
          will-change: transform;
        }
        @keyframes contactRibbon {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </SmoothScroll>
  );
}

