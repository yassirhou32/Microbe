"use client";

import { motion } from "framer-motion";
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
    titre: "Scan d'espace",
    texte:
      "Lecture de la pièce : lumière, circulation, zones de tension visuelle et respirations.",
    image: "/images/M7_02134.jpg",
    accent: "Diagnostic spatial",
  },
  {
    titre: "Projection d'œuvre",
    texte:
      "Simulation de formats et d intentions chromatiques pour trouver le bon impact.",
    image: "/images/M7_02104.jpg",
    accent: "Simulation contextuelle",
  },
  {
    titre: "Édition finale",
    texte:
      "Proposition finale avec axe émotionnel, support, tirage et protocole d'accrochage.",
    image: "/images/M7_02134.jpg",
    accent: "Signature finale",
  },
];

const faq = [
  {
    q: "Combien de temps dure une immersion complète ?",
    a: "En général 7 à 15 jours selon la complexité du lieu et le niveau de personnalisation demandé.",
  },
  {
    q: "Peut-on adapter une œuvre existante au lieu ?",
    a: "Oui. Nous pouvons ajuster format, support et intensité colorielle à partir d'une direction déjà validée.",
  },
  {
    q: "L accompagnement inclut-il l installation ?",
    a: "Oui, un protocole d'accrochage est fourni et l'installation peut être accompagnée selon la zone géographique.",
  },
];

export default function ImmersionPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % capsules.length);
    }, 2400);
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
                        Typologies d'œuvres
                      </p>
                      <h4 className="mt-3 font-serif text-3xl leading-none text-white">Toiles, mural, grand format</h4>
                      <p className="mt-3 text-sm text-white/80">
                        Chaque œuvre est une création de l'artiste, avec une intention
                        propre, un format spécifique et une énergie visuelle unique.
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#7dd3fc] shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7dd3fc]">
                          Rendu premium
                        </span>
                      </div>
                    </div>
                  </motion.div>
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
                  de réponses.
                </h2>
                <p className="mt-4 max-w-sm text-stone-700">
                  Un parcours clair : temps, adaptation de l'œuvre, puis installation.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/35 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--brand-primary-dark)]">
                  <span className="h-2 w-2 rounded-full bg-[#7dd3fc]" />
                  Parcours 3 étapes
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
                            Étape {String(i + 1).padStart(2, "0")}
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
                 
                  <div className="mt-6 space-y-5">
                    {[
                      { value: "3", label: "Directions artistiques" },
                      { value: "7-15j", label: "Délai moyen immersion" },
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
                      Prochaine étape
                    </span>
                    <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-stone-900 md:text-6xl">
                      Construire votre
                      <br />
                       parcours sur mesure
                    </h2>
                    <p className="mt-5 max-w-2xl text-stone-700">
                      Choisis une œuvre, une collection ou une commande. Nous cadrons ensemble
                      l'intention, le format et le rythme de livraison pour un rendu cohérent.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/collections"
                        className="group inline-flex items-center gap-3 rounded-full border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_14px_28px_-14px_rgba(136,36,102,0.6)]"
                      >
                        Voir les collections
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/artiste"
                        className="group inline-flex items-center gap-3 rounded-full border-2 border-stone-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-900 hover:text-white"
                      >
                        Découvrir l'artiste
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

