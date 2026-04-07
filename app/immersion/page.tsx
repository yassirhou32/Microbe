"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
  IMAGES,
} from "@/components/the-edit/TheEdit";

const capsules = [
  {
    titre: "Scan d espace",
    texte:
      "Lecture de la piece: lumiere, circulation, zones de tension visuelle et respirations.",
    image: "/images/M7_02134.jpg",
    accent: "Diagnostic spatial",
  },
  {
    titre: "Projection d oeuvre",
    texte:
      "Simulation de formats et d intentions chromatiques pour trouver le bon impact.",
    image: "/images/M7_02104.jpg",
    accent: "Simulation contextuelle",
  },
  {
    titre: "Edition finale",
    texte:
      "Proposition finale avec axe emotionnel, support, tirage et protocole d accrochage.",
    image: "/images/M7_02134.jpg",
    accent: "Signature finale",
  },
];

const deliverables = [
  "Direction artistique adaptee a ton interieur",
  "3 pistes visuelles argumentees (format, energie, impact)",
  "Recommandation support: toile, resine, grand format ou piece murale",
  "Simulation de hauteur d accrochage et respiration autour de l oeuvre",
  "Plan final avec dimensions et variante de tirage",
];

const formatGuide = [
  { format: "Petit format", usage: "Entrée, couloir, bureau", effet: "Accent narratif" },
  { format: "Moyen format", usage: "Salon, chambre, espace repas", effet: "Point focal equilibré" },
  { format: "Grand format", usage: "Double hauteur, murs forts", effet: "Impact immersif maximal" },
];

const faq = [
  {
    q: "Combien de temps dure une immersion complete ?",
    a: "En general 7 a 15 jours selon la complexite du lieu et le niveau de personnalisation demande.",
  },
  {
    q: "Peut-on adapter une oeuvre existante au lieu ?",
    a: "Oui. Nous pouvons ajuster format, support et intensite colorielle a partir d une direction deja validee.",
  },
  {
    q: "L accompagnement inclut-il l installation ?",
    a: "Oui, un protocole d accrochage est fourni et l installation peut etre accompagnee selon la zone geographique.",
  },
];

const testimonials = [
  {
    nom: "L. Martin",
    lieu: "Lyon",
    texte:
      "J aime votre collection Les toiles. L oeuvre Renaissance est puissante et elegante chez nous.",
  },
  {
    nom: "S. Belaid",
    lieu: "Paris",
    texte:
      "Franchement, j adore votre univers Petit Microbe. C est vivant, pop et tres emotif.",
  },
  {
    nom: "A. Romano",
    lieu: "Bruxelles",
    texte:
      "Je voulais dire merci: votre collection Monocycle est incroyable, on la remarque tout de suite.",
  },
  {
    nom: "K. Dumas",
    lieu: "Bordeaux",
    texte:
      "J aime votre collection Grand format, surtout l energie de King Kong. C est magistral.",
  },
  {
    nom: "N. Khelifi",
    lieu: "Marseille",
    texte:
      "Votre luminaire Microbe donne une ambiance unique. C est artistique et vraiment original.",
  },
  {
    nom: "E. Parent",
    lieu: "Nantes",
    texte:
      "On aime beaucoup votre collection Les toiles, surtout L apocalypse. C est fort et tres moderne.",
  },
  {
    nom: "M. Ortega",
    lieu: "Geneve",
    texte:
      "Je suis fan de votre piece de joaillerie La force de la vie. Concept exceptionnel.",
  },
  {
    nom: "R. Giraud",
    lieu: "Lille",
    texte:
      "Votre collection Petit Microbe est celle que je prefere: poetique, urbaine et tres personnelle.",
  },
  {
    nom: "T. Azoulay",
    lieu: "Toulouse",
    texte:
      "J aime votre collection Monocycle, c est audacieux et super bien pense pour un interieur contemporain.",
  },
  {
    nom: "F. Vidal",
    lieu: "Nice",
    texte:
      "Votre collection Grand format est impressionnante. On sent la maitrise et la force visuelle.",
  },
  {
    nom: "C. Morel",
    lieu: "Montpellier",
    texte:
      "J aime vraiment votre collection Les toiles: il y a du caractere et une vraie signature.",
  },
  {
    nom: "J. Pereira",
    lieu: "Strasbourg",
    texte:
      "Merci pour cette collection. Star et vos autres pieces ont transforme notre salon en lieu d art.",
  },
] as const;

export default function ImmersionPage() {
  const testimonialTrack = [...testimonials, ...testimonials];
  const [activeStep, setActiveStep] = useState(0);
  const [activeFormat, setActiveFormat] = useState(0);
  const premiumX = useMotionValue(0.5);
  const premiumY = useMotionValue(0.5);
  const premiumXSpring = useSpring(premiumX, { stiffness: 120, damping: 24, mass: 0.4 });
  const premiumYSpring = useSpring(premiumY, { stiffness: 120, damping: 24, mass: 0.4 });
  const premiumSpotX = useTransform(premiumXSpring, (v) => `${v * 100}%`);
  const premiumSpotY = useTransform(premiumYSpring, (v) => `${v * 100}%`);
  const premiumSpotlightBg = useMotionTemplate`radial-gradient(420px circle at ${premiumSpotX} ${premiumSpotY}, rgba(125, 211, 252, 0.24), rgba(0,0,0,0))`;
  const premiumLeftX = useTransform(premiumXSpring, (v) => (v - 0.5) * -16);
  const premiumLeftY = useTransform(premiumYSpring, (v) => (v - 0.5) * -10);
  const premiumRightX = useTransform(premiumXSpring, (v) => (v - 0.5) * 20);
  const premiumRightY = useTransform(premiumYSpring, (v) => (v - 0.5) * 14);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % capsules.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveFormat((prev) => (prev + 1) % formatGuide.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[var(--brand-primary-soft)] text-stone-900">
        <Navbar />

        <main>
          <header className="relative min-h-[100svh] overflow-hidden bg-stone-900">
            <div className="absolute inset-0">
              <img src="/images/M7_02134.jpg" alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-20 md:pb-28">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-[10px] font-black uppercase tracking-[0.52em] text-[var(--brand-primary-soft)]"
              >
                / Nouvelle page immersive
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-[14vw] leading-[0.76] tracking-[-0.03em] text-white md:text-[10vw]"
              >
                Immersion
                <br />
                <span className="pl-[8vw] italic font-extralight text-white/90">
                  Mr Microbe
                </span>
              </motion.h1>
              <p className="mt-8 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-stone-100/90 md:text-xs">
                Un parcours scenarise pour choisir l oeuvre juste: de la lecture
                de ton espace a la proposition finale.
              </p>
            </div>
          </header>

          <section className="relative isolate overflow-hidden border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/45 px-6 py-20 md:px-20">
            <div className="immersive-aurora pointer-events-none absolute inset-0 opacity-40" />
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Parcours en 3 actes
                </span>
                <Sparkles className="h-6 w-6 text-[var(--brand-primary)]" />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-0 right-0 top-6 z-20 hidden items-center px-8 md:flex">
                  <div className="relative h-[2px] w-full overflow-hidden bg-gradient-to-r from-transparent via-[#7dd3fc]/45 to-transparent">
                    <motion.div
                      animate={{ left: `${activeStep * 50}%` }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#7dd3fc] shadow-[0_0_20px_rgba(125,211,252,0.85)]"
                    />
                  </div>
                </div>

                <div className="mb-8 hidden grid-cols-3 gap-8 px-1 md:grid">
                  {["01", "02", "03"].map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 * i, duration: 0.45 }}
                      className="z-30 flex justify-center"
                    >
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-black tracking-[0.28em] transition-all duration-500 ${
                          activeStep === i
                            ? "border-[#7dd3fc] bg-stone-900 text-[#7dd3fc] shadow-[0_0_18px_rgba(125,211,252,0.45)]"
                            : "border-[#7dd3fc]/45 bg-stone-900 text-[#7dd3fc]/80"
                        }`}
                      >
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {capsules.map((item, i) => (
                  <motion.article
                    key={item.titre}
                    initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.16, ease: "easeOut" }}
                    whileHover={{ y: -10, rotateX: -2, rotateY: i % 2 === 0 ? 2 : -2 }}
                    animate={{
                      scale: activeStep === i ? 1.02 : 0.985,
                      filter: activeStep === i ? "brightness(1.08)" : "brightness(0.92)",
                    }}
                    className="group relative min-h-[440px] overflow-hidden border border-[var(--brand-primary)]/45 bg-stone-950 shadow-[0_26px_54px_-30px_rgba(28,25,23,0.52)] transition-all duration-500 hover:shadow-[0_36px_72px_-32px_rgba(28,25,23,0.6)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="pointer-events-none absolute -inset-2 z-[1] border border-white/32 shadow-[0_0_0_1px_rgba(125,211,252,0.12)]" />
                    <div className="pointer-events-none absolute inset-2 z-[1] border border-white/16" />
                    <div className="pointer-events-none absolute -left-16 top-8 z-[1] h-36 w-36 rounded-full bg-[#7dd3fc]/20 blur-2xl" />
                    <div className="immersive-orb pointer-events-none absolute -right-10 -top-10 z-[1] h-36 w-36 rounded-full bg-cyan-300/25 blur-2xl" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="relative h-[230px] overflow-hidden border-b border-white/20 bg-black md:h-[250px]">
                        <img
                          src={item.image}
                          alt={item.titre}
                          className="immersive-card-image h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                        <div
                          className={`immersive-scanline pointer-events-none absolute inset-y-0 w-16 ${
                            activeStep === i ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <div className="absolute left-5 right-5 top-4 flex items-start justify-between gap-4">
                          <span className="inline-flex items-center rounded-full border border-white/35 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white/95 backdrop-blur">
                            Acte 0{i + 1}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#9fdfff]">
                            {item.accent}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-3 bg-gradient-to-b from-black/92 to-black p-5 md:p-6">
                        <div>
                        <h2 className="font-serif text-[2.25rem] leading-[0.98] tracking-tight text-white md:text-[2.35rem]">
                          {item.titre}
                        </h2>
                        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/90">
                          {item.texte}
                        </p>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.12 * i, duration: 0.5 }}
                          className="mt-4 h-[2px] bg-gradient-to-r from-[#7dd3fc] to-white/20"
                        />
                        </div>
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                          className="inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white/85"
                        >
                          Vision premium
                        </motion.div>
                      </div>
                    </div>
                    <div
                      className={`immersive-shine pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        activeStep === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.article>
                ))}
              </div>
              </div>
            </div>
          </section>

          <section
            className="relative isolate overflow-hidden bg-[#f7eff4] px-6 py-24 md:px-20"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              premiumX.set((e.clientX - rect.left) / rect.width);
              premiumY.set((e.clientY - rect.top) / rect.height);
            }}
            onMouseLeave={() => {
              premiumX.set(0.5);
              premiumY.set(0.5);
            }}
          >
            <div className="immersive-wave-bg pointer-events-none absolute inset-0 opacity-60" />
            <motion.div
              style={{ background: premiumSpotlightBg }}
              className="pointer-events-none absolute inset-0 z-[1]"
            />
            <motion.div
              animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#7dd3fc]/20 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-[var(--brand-primary)]/20 blur-3xl"
            />

            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-wrap gap-3">
                {["Art direction", "Motion luxury", "Spatial impact", "Curated flow"].map((item, i) => (
                  <motion.span
                    key={item}
                    animate={{ y: [0, -4, 0], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full border border-[var(--brand-primary)]/35 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[var(--brand-primary-dark)] backdrop-blur-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr]">
                <motion.div className="relative" style={{ x: premiumLeftX, y: premiumLeftY }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Ce que tu reçois
                  </span>
                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl">
                    Direction vivante.
                    <br />
                    Impact immédiat.
                  </h2>
                  <p className="mt-5 max-w-xl text-stone-600">
                    Un bloc pensé comme une expérience: guidance claire, mouvement constant,
                    et lecture instantanée des choix artistiques.
                  </p>

                  <div className="mt-8 space-y-3">
                    {deliverables.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        whileHover={{ x: 6 }}
                        className="group relative overflow-hidden rounded-xl border border-[var(--brand-primary)]/18 bg-white/75 p-4 shadow-[0_20px_40px_-36px_rgba(28,25,23,0.55)] backdrop-blur-md"
                      >
                        <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#7dd3fc] to-[var(--brand-primary)] opacity-65 transition-opacity duration-300 group-hover:opacity-100" />
                        <p className="pl-3 text-[15px] text-stone-700">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="relative" style={{ x: premiumRightX, y: premiumRightY }}>
                  <div className="relative overflow-hidden rounded-[20px] border border-[var(--brand-primary)]/35 bg-white/65 p-6 shadow-[0_34px_70px_-38px_rgba(28,25,23,0.48)] backdrop-blur-md md:p-8">
                    <motion.div
                      animate={{ x: [`${activeFormat * 32}%`, `${activeFormat * 32}%`] }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="pointer-events-none absolute top-0 h-[3px] w-1/3 bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent"
                    />
                    <div className="mb-6 flex items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[var(--brand-primary-dark)]">
                        Grille vivante
                      </p>
                      <span className="rounded-full border border-[var(--brand-primary)]/35 bg-white/75 px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[var(--brand-primary-dark)]">
                        3 formats
                      </span>
                    </div>

                    <div className="space-y-4">
                      {formatGuide.map((f, i) => (
                        <motion.div
                          key={f.format}
                          initial={{ opacity: 0, y: 14, scale: 0.98 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: i * 0.12 }}
                          whileHover={{ y: -6, scale: 1.015 }}
                          animate={{
                            y: activeFormat === i ? -6 : 0,
                            scale: activeFormat === i ? 1.02 : 1,
                            boxShadow:
                              activeFormat === i
                                ? "0 24px 44px -24px rgba(115,75,35,0.45)"
                                : "0 16px 34px -28px rgba(28,25,23,0.5)",
                          }}
                          className="immersive-format-card group relative overflow-hidden rounded-xl border border-[var(--brand-primary)]/25 bg-white/90 p-5"
                        >
                          <div className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#7dd3fc]/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div
                            className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(125,211,252,0.2),transparent_55%)] transition-opacity duration-500 ${
                              activeFormat === i ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          <div className="pointer-events-none absolute inset-x-5 bottom-0 h-[2px] bg-gradient-to-r from-[#7dd3fc] via-[var(--brand-primary)] to-transparent opacity-60" />
                          <h3 className="font-serif text-[2rem] leading-none text-stone-900">{f.format}</h3>
                          <p className="mt-2 text-[15px] text-stone-600">{f.usage}</p>
                          <p className="mt-2 text-[15px] font-semibold text-[var(--brand-primary-dark)]">
                            {f.effet}
                          </p>
                          <motion.div
                            animate={{ width: activeFormat === i ? "100%" : "0%" }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                            className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7dd3fc] to-[var(--brand-primary)]"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-2">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                            activeFormat === dot
                              ? "bg-[#7dd3fc] shadow-[0_0_14px_rgba(125,211,252,0.9)]"
                              : "bg-[var(--brand-primary)]/35"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden bg-stone-900 px-6 py-24 text-stone-100 md:px-20">
            <div className="immersive-cinema-grid pointer-events-none absolute inset-0 opacity-35" />
            <motion.div
              animate={{ x: [0, 22, 0], y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#7dd3fc]/14 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
            />
            <div className="mx-auto max-w-7xl">
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                  Simulation visuelle
                </span>
                <span className="rounded-full border border-[var(--brand-primary)]/35 bg-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--brand-primary-soft)] backdrop-blur-sm">
                  Oeuvres de l artiste
                </span>
              </div>
              <Separator color="bg-[var(--brand-primary)]" />
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative overflow-hidden border border-white/25 bg-black/60 shadow-[0_34px_64px_-36px_rgba(0,0,0,0.8)]"
                >
                  <img src={IMAGES.hero} alt="" className="h-[470px] w-full object-cover" />
                  <motion.div
                    animate={{ width: ["28%", "72%", "46%", "28%"] }}
                    transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 overflow-hidden"
                  >
                    <img src="/images/M7_02104.jpg" alt="" className="h-full w-[900px] max-w-none object-cover" />
                  </motion.div>
                  <motion.div
                    animate={{ left: ["28%", "72%", "46%", "28%"] }}
                    transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-[#7dd3fc] shadow-[0_0_18px_rgba(125,211,252,0.9)]"
                  >
                    <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#7dd3fc]/70 bg-black/70 text-[10px] font-black text-[#7dd3fc]">
                      {"<->"}
                    </span>
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  <div className="immersive-light-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 z-30 flex gap-2">
                    <span className="rounded-full border border-white/35 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                      Collection toiles
                    </span>
                    <span className="rounded-full border border-[#7dd3fc]/55 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#7dd3fc]">
                      Grand format
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#7dd3fc]">
                        Creation originale
                      </p>
                      <h3 className="mt-2 font-serif text-4xl leading-none text-white md:text-[2.9rem]">
                        Signature artistique
                      </h3>
                    </div>
                    <motion.span
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7dd3fc]/55 bg-black/45 text-[#7dd3fc]"
                    >
                      *
                    </motion.span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative overflow-hidden border border-white/20 bg-black/50"
                  >
                    <img
                      src="/images/M7_02104.jpg"
                      alt=""
                      className="h-[228px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-[10px] font-black uppercase tracking-[0.28em] text-white/90">
                      Univers mural
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative overflow-hidden border border-white/20 bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(125,211,252,0.18),transparent_48%)]" />
                    <div className="relative z-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--brand-primary-soft)]">
                        Typologies d oeuvres
                      </p>
                      <h4 className="mt-3 font-serif text-3xl leading-none text-white">Toiles, mural, grand format</h4>
                      <p className="mt-3 text-sm text-white/80">
                        Chaque oeuvre est une creation de l artiste, avec une intention
                        propre, un format specifique et une energie visuelle unique.
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#7dd3fc] shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7dd3fc]">
                          Rendu premium
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <div className="relative overflow-hidden border border-white/20 bg-black/35 py-3">
                    <div className="immersive-live-ticker flex w-max gap-8 px-4 text-[10px] font-black uppercase tracking-[0.24em] text-[var(--brand-primary-soft)]">
                      <span>Oeuvres originales de l artiste</span>
                      <span>Collections: toiles, mural, grand format</span>
                      <span>Creation unique pour chaque espace</span>
                      <span>Oeuvres originales de l artiste</span>
                      <span>Collections: toiles, mural, grand format</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/70 px-6 py-24 md:px-20">
            <div className="pointer-events-none absolute -left-16 top-14 h-48 w-48 rounded-full bg-[#7dd3fc]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-12 h-56 w-56 rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.42fr_0.58fr]">
              <div className="md:sticky md:top-24 md:h-fit">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  FAQ immersion
                </span>
                <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight text-stone-900 md:text-5xl">
                  Studio line
                  <br />
                  de reponses.
                </h2>
                <p className="mt-4 max-w-sm text-stone-700">
                  Un parcours clair: temps, adaptation de l oeuvre, puis installation.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/35 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--brand-primary-dark)]">
                  <span className="h-2 w-2 rounded-full bg-[#7dd3fc]" />
                  Parcours 3 etapes
                </div>
              </div>

              <div className="relative pl-0 md:pl-8">
                <div className="pointer-events-none absolute bottom-0 left-3 top-0 hidden w-[2px] bg-gradient-to-b from-[#7dd3fc] via-[var(--brand-primary)] to-transparent md:block" />
                <div className="space-y-6">
                  {faq.map((item, i) => (
                    <motion.article
                      key={item.q}
                      initial={{ opacity: 0, y: 24, x: 10 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.09 }}
                      whileHover={{ y: -5, x: 2 }}
                      className="group relative overflow-hidden border border-[var(--brand-primary)]/35 bg-white/90 p-6 shadow-[0_20px_42px_-26px_rgba(28,25,23,0.38)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_28px_48px_-22px_rgba(28,25,23,0.45)] md:ml-6"
                    >
                      <span className="absolute -left-6 top-7 z-20 hidden h-5 w-5 rounded-full border-2 border-[var(--brand-primary)] bg-[#7dd3fc] shadow-[0_0_14px_rgba(125,211,252,0.75)] md:block" />
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#7dd3fc] via-[var(--brand-primary)] to-transparent opacity-80" />
                      <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/12 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-dark)]">
                            Etape {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 md:text-[2.15rem]">
                            {item.q}
                          </h3>
                          <p className="mt-3 text-[16px] leading-relaxed text-stone-700">{item.a}</p>
                        </div>
                        <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--brand-primary)]/35 bg-white/85 text-[var(--brand-primary-dark)] transition-transform duration-500 group-hover:rotate-90">
                          <Plus className="h-4 w-4" />
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-[var(--brand-primary)]/30 bg-stone-900 px-0 py-24 text-stone-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(125,211,252,0.08),transparent_40%),radial-gradient(circle_at_78%_78%,rgba(136,36,102,0.08),transparent_42%)]" />
            <div className="mx-auto max-w-7xl px-6 md:px-20">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                    Retours collectionneurs
                  </span>
                  <h2 className="mt-3 font-serif text-4xl tracking-tight text-white md:text-5xl">
                    Ils aiment la collection.
                  </h2>
                </div>
                <span className="rounded-full border border-[var(--brand-primary)]/35 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-soft)]">
                  12 commentaires
                </span>
              </div>
            </div>

            <div className="immersive-testimonials-zone relative space-y-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-stone-900 to-transparent md:w-40" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-stone-900 to-transparent md:w-40" />
              <div className="immersive-track-glow pointer-events-none absolute inset-x-0 top-0 h-[2px]" />
              <div className="immersive-track-glow pointer-events-none absolute inset-x-0 bottom-0 h-[2px]" />
              <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7dd3fc]/22 to-transparent" />

              <div className="immersive-marquee-track-pro flex w-max gap-5 px-6 md:gap-6 md:px-20">
                {testimonialTrack.map((item, i) => (
                  <article
                    key={`${item.nom}-${item.lieu}-${i}`}
                    className={`group relative shrink-0 border border-[var(--brand-primary)]/38 bg-gradient-to-b from-white/[0.14] to-white/[0.05] p-6 backdrop-blur-sm shadow-[0_16px_34px_-20px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/58 ${
                      i % 3 === 0 ? "w-[360px] md:w-[420px]" : "w-[330px] md:w-[380px]"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm tracking-[0.2em] text-[#9fdfff]">★★★★★</span>
                      <span className="text-5xl font-serif leading-none text-[var(--brand-primary-soft)]/20">
                        ”
                      </span>
                    </div>
                    <p className="font-serif text-[18px] leading-[1.6] text-stone-100">{item.texte}</p>
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-soft)]">
                      {item.nom} — {item.lieu}
                    </p>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden border-y border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)] px-6 py-24 md:px-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(125,211,252,0.14),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(136,36,102,0.12),transparent_42%)]" />
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.34fr_0.66fr]">
                <motion.aside
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative border border-[var(--brand-primary)]/35 bg-white/70 p-6 shadow-[0_24px_48px_-34px_rgba(28,25,23,0.48)] backdrop-blur-sm"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[var(--brand-primary-dark)]">
                    Executive pitch
                  </p>
                  <div className="mt-6 space-y-5">
                    {[
                      { value: "3", label: "Directions artistiques" },
                      { value: "7-15j", label: "Delai moyen immersion" },
                      { value: "1:1", label: "Accompagnement sur mesure" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="border border-[var(--brand-primary)]/20 bg-white/85 p-4">
                        <p className="font-serif text-4xl leading-none text-stone-900">{kpi.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-600">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.aside>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden border border-[var(--brand-primary)]/35 bg-white/72 p-8 shadow-[0_30px_58px_-34px_rgba(28,25,23,0.42)] backdrop-blur-md md:p-10"
                >
                  <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/14" />
                  <motion.div
                    animate={{ x: ["-20%", "120%"] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                      Prochaine etape
                    </span>
                    <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-stone-900 md:text-6xl">
                      Construire ton
                      <br />
                      parcours sur mesure.
                    </h2>
                    <p className="mt-5 max-w-2xl text-stone-700">
                      Choisis une oeuvre, une collection ou une commande. Nous cadrons ensemble
                      l intention, le format et le rythme de livraison pour un rendu coherent.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/collections"
                        className="group inline-flex items-center gap-3 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_14px_28px_-14px_rgba(136,36,102,0.6)]"
                      >
                        Voir les collections
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/artiste"
                        className="group inline-flex items-center gap-3 border-2 border-stone-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-900 hover:text-white"
                      >
                        Decouvrir l artiste
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        .immersive-cinema-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 44px 44px, 44px 44px;
          animation: immersiveCinemaDrift 18s linear infinite;
        }
        .immersive-light-sweep {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.18) 50%,
            transparent 100%
          );
          animation: immersiveLightSweep 1.8s ease-out infinite;
        }
        .immersive-live-ticker {
          animation: immersiveTicker 20s linear infinite;
          will-change: transform;
        }
        .immersive-track-glow {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(125, 211, 252, 0.75) 50%,
            transparent 100%
          );
          animation: immersiveTrackPulse 4.8s ease-in-out infinite;
        }
        .immersive-testimonials-zone:hover .immersive-marquee-track-pro {
          animation-play-state: paused;
        }
        .immersive-wave-bg {
          background:
            radial-gradient(900px 360px at 15% 20%, rgba(125, 211, 252, 0.2), transparent 62%),
            radial-gradient(760px 330px at 85% 80%, rgba(164, 88, 142, 0.18), transparent 60%);
          animation: immersiveWaveMove 14s ease-in-out infinite alternate;
        }
        .immersive-format-card {
          animation: immersiveFormatBreathe 4.2s ease-in-out infinite;
          will-change: transform, box-shadow;
        }
        .immersive-aurora {
          background:
            radial-gradient(800px 300px at 8% 5%, rgba(125, 211, 252, 0.28), transparent 60%),
            radial-gradient(600px 260px at 85% 95%, rgba(115, 75, 35, 0.24), transparent 58%);
          animation: immersiveAurora 12s ease-in-out infinite alternate;
        }
        .immersive-shine {
          background: linear-gradient(
            120deg,
            transparent 18%,
            rgba(255, 255, 255, 0.15) 42%,
            transparent 66%
          );
          transform: translateX(-120%);
          animation: immersiveShine 2.8s ease-out infinite;
        }
        .immersive-card-image {
          animation: immersiveImageFlow 11s ease-in-out infinite alternate;
          will-change: transform;
        }
        .immersive-orb {
          animation: immersiveOrbFloat 5.2s ease-in-out infinite;
        }
        .immersive-scanline {
          left: -18%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(125, 211, 252, 0.06) 25%,
            rgba(125, 211, 252, 0.38) 50%,
            rgba(125, 211, 252, 0.06) 75%,
            transparent 100%
          );
          filter: blur(0.3px);
          animation: immersiveScanPass 1.7s ease-in-out infinite;
        }
        .immersive-marquee-track-pro {
          animation: immersiveMarquee 52s linear infinite;
          will-change: transform;
        }
        .immersive-marquee-track-pro:hover {
          animation-play-state: paused;
        }
        @keyframes immersiveCinemaDrift {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-44px, -44px, 0);
          }
        }
        @keyframes immersiveLightSweep {
          0% {
            transform: translateX(-80%);
          }
          100% {
            transform: translateX(350%);
          }
        }
        @keyframes immersiveTicker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes immersiveTrackPulse {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes immersiveWaveMove {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(0, -10px, 0) scale(1.04);
          }
        }
        @keyframes immersiveFormatBreathe {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -3px, 0);
          }
        }
        @keyframes immersiveAurora {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(0, -8px, 0) scale(1.05);
          }
        }
        @keyframes immersiveShine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(140%);
          }
        }
        @keyframes immersiveImageFlow {
          0% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.12) translate3d(0, -10px, 0);
          }
        }
        @keyframes immersiveOrbFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.45;
          }
          50% {
            transform: translate3d(-8px, 9px, 0);
            opacity: 0.85;
          }
        }
        @keyframes immersiveScanPass {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(640%);
          }
        }
        @keyframes immersiveMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </SmoothScroll>
  );
}

