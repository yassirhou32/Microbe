"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
  IMAGES,
} from "@/components/the-edit/TheEdit";
import UiloraTopographicPulse from "@/components/backgrounds/UiloraTopographicPulse";

const timeline = [
  {
    annee: "2004",
    titre: "Enfance",
    texte: "Premiers dessins instinctifs, fascination pour les formes organiques et les textures imparfaites.",
    focus: "Le regard se construit dans les contrastes, les surfaces usees et les signes visuels puissants.",
    image: "/images/M7_02162.jpg",
    tag: "Origine visuelle",
    palette: "Noir / ivoire / rose",
    energie: "Sensible",
  },
  {
    annee: "2012",
    titre: "Bronzier-ciseleur",
    texte: "Apprentissage du geste precis, des reliefs, des patines et du rapport physique a la matiere.",
    focus: "Precision, patience et discipline: la matiere devient une partenaire et non une simple surface.",
    image: "/images/M7_02137.jpg",
    tag: "Ecole du geste",
    palette: "Bronze / ocre / fumee",
    energie: "Maitrise",
  },
  {
    annee: "2017",
    titre: "Exploration matieres",
    texte: "Acrylique, aerosol, enduits, collages: une recherche de vibration visuelle et emotionnelle.",
    focus: "Chaque medium est traite comme une voix differente, au service d une tension emotionnelle.",
    image: "/images/M7_01627.jpg",
    tag: "Laboratoire matiere",
    palette: "Fuchsia / sable / noir",
    energie: "Experimentale",
  },
  {
    annee: "2020",
    titre: "Naissance de Mr Microbe",
    texte: "Un langage personnel emerge: transformer l angoisse en energie creative visible.",
    focus: "Le style Mr Microbe devient une signature: organique, direct, vibrant et hautement narratif.",
    image: "/images/M7_01636.jpg",
    tag: "Signature Mr Microbe",
    palette: "Magenta / blanc / charbon",
    energie: "Incandescente",
  },
];

const valueTracks = [
  {
    label: "Emotion",
    short: "Affectif",
    detail: "Une oeuvre doit toucher avant d etre comprise.",
    metric: "Resonance 96%",
    image: "/images/M7_02162.jpg",
  },
  {
    label: "Matiere",
    short: "Textural",
    detail: "Reliefs et grains donnent une lecture physique de la piece.",
    metric: "Texture 92%",
    image: "/images/M7_02137.jpg",
  },
  {
    label: "Transmission",
    short: "Narratif",
    detail: "La piece dialogue avec son espace et laisse une empreinte durable.",
    metric: "Impact 94%",
    image: "/images/M7_01636.jpg",
  },
];

export default function ArtistePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [sweepTick, setSweepTick] = useState(0);
  const [activeValueTrack, setActiveValueTrack] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timeline.length);
      setSweepTick((prev) => prev + 1);
    }, 3600);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goPrev = () => {
    setActiveStep((prev) => (prev - 1 + timeline.length) % timeline.length);
    setIsAutoPlay(false);
    setSweepTick((prev) => prev + 1);
  };
  const goNext = () => {
    setActiveStep((prev) => (prev + 1) % timeline.length);
    setIsAutoPlay(false);
    setSweepTick((prev) => prev + 1);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--brand-primary-dark)] text-stone-100 overflow-x-hidden">
        <UiloraTopographicPulse
          baseColor="#141414"
          lineColor="#f1f1f1"
          speed={0.2}
          complexity={1.35}
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />
        <div
          className="relative z-[2]"
          style={{
            fontFamily: "Montserrat, Arial, sans-serif",
            textShadow: "0 2px 14px rgba(0,0,0,0.85)",
          }}
        >
          <Navbar />

          <main>
            <section className="relative h-[100vh] overflow-hidden bg-stone-900">
            <div className="absolute inset-0">
              <img src="/images/M7_02162.jpg" alt="Portrait de l artiste" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
            </div>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_35%),radial-gradient(circle_at_80%_80%,white_0%,transparent_30%)]" />
            <div className="relative z-10 h-full flex items-end px-6 pb-20 md:px-20">
              <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10 items-end">
                <div>
                  <span className="mb-5 block text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                    / Page Artiste
                  </span>
                  <h1 className="font-serif text-[14vw] md:text-[11vw] leading-[0.78] text-white tracking-tighter drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
                    Maxime <br />
                    <span className="italic font-extralight opacity-90 pl-[8vw]">Furgerot</span>
                  </h1>
                </div>
                <p className="max-w-sm text-stone-200 text-xs font-medium leading-relaxed uppercase tracking-[0.2em] mb-4">
                  Portrait + manifeste d un artiste qui transforme l angoisse en forme, en couleur et en puissance expressive.
                </p>
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary)]/45 py-28 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Manifeste
              </span>
              <h2 className="font-serif text-5xl font-medium leading-[1.08] text-white sm:text-6xl md:text-7xl md:leading-[1.05] mt-8 [text-shadow:0_4px_32px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,1),0_0_1px_rgba(0,0,0,1)]">
                Mr Microbe est ne d un besoin vital: <br />
                <span className="italic font-normal text-white">transformer l ombre en energie creative.</span>
              </h2>
            </div>
          </section>

            <section className="relative border-y-2 border-[var(--brand-primary-soft)]/45 py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Biographie
              </span>
              <div className="mt-10 grid grid-cols-1 gap-8 font-serif text-2xl leading-[1.55] text-white md:grid-cols-2 md:text-[1.7rem] md:leading-[1.5]">
                <p className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] [text-shadow:0_2px_20px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  Enfance: regard forme par les contrastes et les surfaces abimees.
                </p>
                <p className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] [text-shadow:0_2px_20px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  Formation puis emergence de Mr Microbe: precision, matiere et signature organique.
                </p>
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary)]/45 py-24 px-6 md:px-20">
            <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-[var(--brand-primary-soft)]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-fuchsia-300/10 blur-3xl" />
            <div className="max-w-7xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Timeline interactive
              </span>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {[
                  "4 chapitres fondateurs",
                  "10+ matieres explorees",
                  "1 signature artistique forte",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/90 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="relative lg:col-span-7" onMouseEnter={() => setIsAutoPlay(false)}>
                  <div className="pointer-events-none absolute top-1 bottom-1 left-[86px] hidden w-[3px] bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.28)] md:block" />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-[86px] top-1 hidden w-[3px] origin-top bg-gradient-to-b from-white via-[var(--brand-primary-soft)] to-white shadow-[0_0_24px_rgba(255,255,255,0.55)] md:block"
                    animate={{ height: `${((activeStep + 1) / timeline.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 90, damping: 20 }}
                  />

                  <div className="space-y-6">
                    {timeline.map((step, i) => {
                      const isActive = i === activeStep;
                      return (
                        <motion.button
                          type="button"
                          key={step.annee}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ delay: i * 0.08, duration: 0.5 }}
                          onMouseEnter={() => setActiveStep(i)}
                          onFocus={() => setActiveStep(i)}
                          onClick={() => setActiveStep(i)}
                          whileHover={{ y: -4, scale: 1.01 }}
                          className={`group relative flex w-full flex-col gap-6 overflow-hidden rounded-md border-[3px] p-6 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] transition-all md:flex-row md:gap-12 md:p-8 ${
                            isActive
                              ? "border-white/80 bg-[var(--brand-primary)]/35 ring-1 ring-white/45"
                              : "border-[var(--brand-primary-soft)]/45 bg-[var(--brand-primary-dark)]/55 hover:border-white/50"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              key={`${step.annee}-${sweepTick}`}
                              aria-hidden
                              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-screen"
                              initial={{ x: "-120%" }}
                              animate={{ x: "420%" }}
                              transition={{ duration: 1.25, ease: "easeInOut" }}
                            />
                          )}
                          <div className="min-w-[98px]">
                            <div className="flex items-center gap-4 md:gap-5">
                              <div
                                className={`h-3 w-3 rounded-full border transition-all ${
                                  isActive
                                    ? "border-white bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]"
                                    : "border-white/45 bg-transparent"
                                }`}
                              />
                              <p className="text-xs font-black uppercase tracking-[0.45em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,1)]">
                                {step.annee}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-[2.25rem] [text-shadow:0_4px_24px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                              {step.titre}
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl [text-shadow:0_2px_18px_rgba(0,0,0,1),0_1px_2px_rgba(0,0,0,1)]">
                              {step.texte}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="sticky top-24 overflow-hidden rounded-md border-[3px] border-white/65 bg-[var(--brand-primary-dark)]/75 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_34px_68px_rgba(0,0,0,0.9)] ring-1 ring-white/25">
                    <div className="mb-4 flex items-center justify-between gap-3 rounded-md border border-white/25 bg-black/25 px-3 py-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-white/90">
                        <Sparkles className="h-3.5 w-3.5" />
                        Direction artistique
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Activer ou desactiver le mode auto sweep"
                          onClick={() => setIsAutoPlay((prev) => !prev)}
                          className={`inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[10px] font-black uppercase tracking-[0.16em] transition ${
                            isAutoPlay
                              ? "border-white/45 bg-white text-black"
                              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {isAutoPlay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                          {isAutoPlay ? "Auto sweep on" : "Auto sweep off"}
                        </button>
                        <button
                          type="button"
                          aria-label="Etape precedente"
                          onClick={goPrev}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:bg-white/20"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label="Etape suivante"
                          onClick={goNext}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:bg-white/20"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/20">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-white via-[var(--brand-primary-soft)] to-white"
                        animate={{ width: `${((activeStep + 1) / timeline.length) * 100}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 22 }}
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={timeline[activeStep].annee}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="relative h-[260px] overflow-hidden rounded-md border border-white/40">
                          <motion.div
                            key={`panel-sweep-${timeline[activeStep].annee}-${sweepTick}`}
                            aria-hidden
                            className="pointer-events-none absolute inset-y-0 -left-1/3 z-10 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent mix-blend-screen"
                            initial={{ x: "-130%" }}
                            animate={{ x: "380%" }}
                            transition={{ duration: 1.45, ease: "easeInOut" }}
                          />
                          <motion.img
                            src={timeline[activeStep].image}
                            alt={timeline[activeStep].titre}
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.08 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <p className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-[0.35em] text-white/90">
                            Focus / {timeline[activeStep].annee}
                          </p>
                        </div>

                        <div className="px-2 pb-2 pt-6">
                          <h3 className="font-serif text-4xl text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.95)]">
                            {timeline[activeStep].titre}
                          </h3>
                          <p className="mt-4 text-base leading-relaxed text-white/95">
                            {timeline[activeStep].focus}
                          </p>
                          <div className="mt-5 grid grid-cols-1 gap-2 text-xs text-white/90 sm:grid-cols-2">
                            <div className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5">
                              {timeline[activeStep].tag}
                            </div>
                            <div className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5">
                              Palette: {timeline[activeStep].palette}
                            </div>
                            <div className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 sm:col-span-2">
                              Energie: {timeline[activeStep].energie}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {timeline.map((step, i) => (
                        <button
                          key={`dot-${step.annee}`}
                          type="button"
                          onClick={() => {
                            setActiveStep(i);
                            setIsAutoPlay(false);
                            setSweepTick((prev) => prev + 1);
                          }}
                          className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] transition ${
                            i === activeStep
                              ? "border-white bg-white text-black"
                              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {step.annee}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary-soft)]/45 py-24 px-6 md:px-20">
            <div className="pointer-events-none absolute -left-12 top-10 h-56 w-56 rounded-full bg-fuchsia-200/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-6 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="mx-auto max-w-7xl">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Valeurs artistiques
              </span>
              <h3 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl [text-shadow:0_8px_36px_rgba(0,0,0,0.9)]">
                Mode scanner premium: <span className="italic">ligne par ligne, emotion par emotion.</span>
              </h3>

              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  {valueTracks.map((track, idx) => {
                    const isActive = idx === activeValueTrack;
                    return (
                      <motion.button
                        type="button"
                        key={track.label}
                        onMouseEnter={() => setActiveValueTrack(idx)}
                        onFocus={() => setActiveValueTrack(idx)}
                        onClick={() => setActiveValueTrack(idx)}
                        whileHover={{ x: 4 }}
                        className={`group relative w-full overflow-hidden border-b-2 px-3 py-5 text-left transition ${
                          isActive
                            ? "border-white/90 bg-white/10"
                            : "border-white/30 hover:border-white/60 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                              {track.short}
                            </p>
                            <p className="mt-2 font-serif text-5xl text-white sm:text-6xl">{track.label}</p>
                          </div>
                          <p className="pb-2 text-xs font-black uppercase tracking-[0.2em] text-white/70">
                            {track.metric}
                          </p>
                        </div>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">{track.detail}</p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="lg:col-span-5">
                  <div className="sticky top-24 overflow-hidden rounded-md border-[3px] border-white/60 bg-black/35 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_34px_68px_rgba(0,0,0,0.9)]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={valueTracks[activeValueTrack].label}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="relative h-[320px] overflow-hidden rounded-md border border-white/35">
                          <motion.img
                            src={valueTracks[activeValueTrack].image}
                            alt={valueTracks[activeValueTrack].label}
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                          <motion.div
                            key={`scan-${valueTracks[activeValueTrack].label}`}
                            aria-hidden
                            className="absolute inset-x-0 h-14 bg-gradient-to-b from-white/0 via-white/40 to-white/0 mix-blend-screen"
                            initial={{ y: -60 }}
                            animate={{ y: 360 }}
                            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
                          />
                          <p className="absolute left-4 top-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
                            Scanner actif / {valueTracks[activeValueTrack].short}
                          </p>
                        </div>

                        <div className="px-2 pb-2 pt-5">
                          <h4 className="font-serif text-4xl text-white">{valueTracks[activeValueTrack].label}</h4>
                          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/75">
                            {valueTracks[activeValueTrack].metric}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary)]/45 py-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Galerie atelier documentaire
              </span>
              <div className="mt-12 grid h-[1100px] grid-cols-1 gap-8 md:h-[620px] md:grid-cols-3">
                <div className="relative overflow-hidden rounded-md border-[3px] border-white/55 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_28px_64px_rgba(0,0,0,0.9)] md:col-span-2 ring-1 ring-white/25">
                  <img src="/images/M7_02137.jpg" alt="Atelier documentaire 1" className="h-full w-full object-cover scale-[1.06]" />
                </div>
                <div className="relative overflow-hidden rounded-md border-[3px] border-white/55 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_28px_64px_rgba(0,0,0,0.9)] ring-1 ring-white/25">
                  <img src="/images/M7_02104.jpg" alt="Atelier documentaire 2" className="h-full w-full object-cover scale-[1.06]" />
                </div>
                <div className="relative overflow-hidden rounded-md border-[3px] border-white/55 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_28px_64px_rgba(0,0,0,0.9)] ring-1 ring-white/25">
                  <img src="/images/M7_01627.jpg" alt="Atelier documentaire 3" className="h-full w-full object-cover scale-[1.06]" />
                </div>
                <div className="relative overflow-hidden rounded-md border-[3px] border-white/55 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_28px_64px_rgba(0,0,0,0.9)] md:col-span-2 ring-1 ring-white/25">
                  <img src="/images/M7_01636.jpg" alt="Atelier documentaire 4" className="h-full w-full object-cover scale-[1.06]" />
                </div>
              </div>
            </div>
            </section>


            <section className="relative border-y-2 border-[var(--brand-primary-soft)]/45 py-28 px-6 text-center md:px-20">
            <div className="mx-auto max-w-5xl px-4">
              <Separator color="bg-white/70" />
              <blockquote className="mt-16 px-2 font-serif text-4xl font-medium italic leading-[1.2] text-white sm:text-5xl md:text-6xl md:leading-[1.15] [text-shadow:0_4px_36px_rgba(0,0,0,1),0_2px_8px_rgba(0,0,0,1),0_0_1px_rgba(0,0,0,1)]">
                "Je peins pour rendre visible ce qui n avait pas encore de forme."
              </blockquote>
            </div>
            </section>

            <section className="relative overflow-hidden bg-stone-900 py-24 px-6 text-stone-100 md:px-20">
            <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">Contact</span>
                <h2 className="font-serif text-6xl mt-6 leading-none">Discuter <br />d une commande</h2>
              </div>
              <a
                href="/collections"
                className="group inline-flex items-center gap-3 border border-stone-600 px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] hover:border-stone-200 transition-colors"
              >
                Lancer la discussion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

