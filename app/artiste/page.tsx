"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SmoothScroll,
  Navbar,
  Footer,
} from "@/components/the-edit/TheEdit";

const timeline = [
  {
    annee: "2004",
    titre: "Enfance",
    texte: "Premiers dessins instinctifs, fascination pour les formes organiques et les textures imparfaites.",
    focus: "Le regard se construit dans les contrastes, les surfaces usées et les signes visuels puissants.",
    image: "/images/M7_02162.jpg",
    tag: "Origine visuelle",
    palette: "Noir / ivoire / rose",
    energie: "Sensible",
  },
  {
    annee: "2012",
    titre: "Bronzier-ciseleur",
    texte: "Apprentissage du geste précis, des reliefs, des patines et du rapport physique à la matière.",
    focus: "Précision, patience et discipline : la matière devient une partenaire et non une simple surface.",
    image: "/images/M7_02137.jpg",
    tag: "École du geste",
    palette: "Bronze / ocre / fumée",
    energie: "Maîtrise",
  },
  {
    annee: "2017",
    titre: "Exploration matières",
    texte: "Acrylique, aérosol, enduits, collages : une recherche de vibration visuelle et émotionnelle.",
    focus: "Chaque médium est traité comme une voix différente, au service d'une tension émotionnelle.",
    image: "/images/M7_01627.jpg",
    tag: "Laboratoire matière",
    palette: "Fuchsia / sable / noir",
    energie: "Expérimentale",
  },
  {
    annee: "2020",
    titre: "Naissance de Mr Microbe",
    texte: "Un langage personnel émerge : transformer l'angoisse en énergie créative visible.",
    focus: "Le style Mr Microbe devient une signature: organique, direct, vibrant et hautement narratif.",
    image: "/images/M7_01636.jpg",
    tag: "Signature Mr Microbe",
    palette: "Magenta / blanc / charbon",
    energie: "Incandescente",
  },
];

export default function ArtistePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f5dfe9_0%,#f8e8ef_35%,#f3d7e3_100%)] text-stone-900">
        <div className="relative z-[2]">
          <Navbar />

          <main>
            <section className="relative overflow-hidden bg-[linear-gradient(135deg,#160f16_0%,#281a2a_52%,#1a1622_100%)] px-6 pb-20 pt-36 text-white md:px-20 md:pt-40">
              <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[var(--brand-primary)]/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-fuchsia-300/30 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.92fr] md:items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--brand-primary-soft)]">
                    Artiste
                  </p>
                  <h1 className="mt-5 font-serif text-6xl leading-[0.88] tracking-tight text-white md:text-8xl">
                    Maxime Furgerot
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                    Un langage visuel organique, direct et émotionnel.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[18px] border border-white/25 shadow-[0_28px_58px_-28px_rgba(0,0,0,0.65)]">
                  <img src="/images/M7_02162.jpg" alt="Portrait de l'artiste" className="h-[420px] w-full object-cover md:h-[520px]" />
                </div>
              </div>
            </section>

            <section className="px-6 py-14 md:px-20">
              <div className="mx-auto max-w-7xl">
                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[var(--brand-primary-dark)]">
                  Biographie
                </p>
                <article className="mt-6 rounded-[16px] border border-[var(--brand-primary)]/25 bg-white/85 p-6 shadow-[0_20px_46px_-34px_rgba(28,25,23,0.45)]">
                  <p className="font-serif text-2xl leading-relaxed text-stone-900 md:text-3xl">
                    Enfance marquée par les contrastes, puis formation au geste et à la matière : Mr Microbe naît d’une tension transformée en écriture artistique.
                  </p>
                </article>
              </div>
            </section>

            <section className="border-y border-[var(--brand-primary)]/18 bg-white/55 px-6 py-16 backdrop-blur-sm md:px-20">
              <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[var(--brand-primary-dark)]">
                    Parcours
                  </p>
                  <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-stone-900 md:text-6xl">
                    Timeline artistique
                  </h2>
                  <div className="mt-6 space-y-3">
                    {timeline.map((step, i) => (
                      <button
                        key={step.annee}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={`w-full rounded-[14px] border px-4 py-4 text-left transition ${
                          i === activeStep
                            ? "border-[var(--brand-primary)]/55 bg-[var(--brand-primary-soft)]/60"
                            : "border-[var(--brand-primary)]/20 bg-white/70 hover:bg-white"
                        }`}
                      >
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                          {step.annee}
                        </p>
                        <p className="mt-2 font-serif text-3xl text-stone-900">{step.titre}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">{step.tag}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <motion.article
                  key={timeline[activeStep].annee}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden rounded-[18px] border border-[var(--brand-primary)]/22 bg-white shadow-[0_24px_56px_-32px_rgba(28,25,23,0.45)]"
                >
                  <img
                    src={timeline[activeStep].image}
                    alt={timeline[activeStep].titre}
                    className="h-[360px] w-full object-cover md:h-[460px]"
                  />
                  <div className="space-y-4 p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                      {timeline[activeStep].tag}
                    </p>
                    <h3 className="font-serif text-4xl text-stone-900 md:text-5xl">{timeline[activeStep].titre}</h3>
                    <p className="text-base leading-relaxed text-stone-700">{timeline[activeStep].focus}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)]/45 px-3 py-1 text-xs text-stone-800">
                        Énergie : {timeline[activeStep].energie}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </div>
            </section>

            <section className="border-t border-[var(--brand-primary)]/16 bg-white/50 px-6 py-16 backdrop-blur-sm md:px-20">
              <div className="mx-auto max-w-7xl">
                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[var(--brand-primary-dark)]">
                  Galerie atelier documentaire
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[14px] border border-[var(--brand-primary)]/20 bg-white md:col-span-2">
                    <img src="/images/M7_02137.jpg" alt="Atelier documentaire 1" className="h-[280px] w-full object-cover md:h-[420px]" />
                  </div>
                  <div className="overflow-hidden rounded-[14px] border border-[var(--brand-primary)]/20 bg-white">
                    <img src="/images/M7_02104.jpg" alt="Atelier documentaire 2" className="h-[280px] w-full object-cover md:h-[420px]" />
                  </div>
                  <div className="overflow-hidden rounded-[14px] border border-[var(--brand-primary)]/20 bg-white">
                    <img src="/images/M7_01636.jpg" alt="Atelier documentaire 4" className="h-[280px] w-full object-cover md:h-[420px]" />
                  </div>
                </div>
              </div>
            </section>

          </main>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

