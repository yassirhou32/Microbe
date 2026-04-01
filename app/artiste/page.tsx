"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
  IMAGES,
} from "@/components/the-edit/TheEdit";
import UiloraTopographicPulse from "@/components/backgrounds/UiloraTopographicPulse";

const timeline = [
  { annee: "2004", titre: "Enfance", texte: "Premiers dessins instinctifs, fascination pour les formes organiques et les textures imparfaites." },
  { annee: "2012", titre: "Bronzier-ciseleur", texte: "Apprentissage du geste precis, des reliefs, des patines et du rapport physique a la matiere." },
  { annee: "2017", titre: "Exploration matieres", texte: "Acrylique, aerosol, enduits, collages: une recherche de vibration visuelle et emotionnelle." },
  { annee: "2020", titre: "Naissance de Mr Microbe", texte: "Un langage personnel emerge: transformer l angoisse en energie creative visible." },
];

export default function ArtistePage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--brand-primary-dark)] text-stone-100 overflow-x-hidden">
        <UiloraTopographicPulse
          baseColor="#9b2f60"
          lineColor="#f4d7e3"
          speed={0.3}
          complexity={2.0}
        />
        <div className="relative z-[2]">
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
                  Enfance: le regard se forme dans les contrastes, les surfaces abimees et la puissance des signes visuels.
                </p>
                <p className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] [text-shadow:0_2px_20px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  Formation bronzier-ciseleur: une ecole de precision, de patience et de dialogue avec la matiere.
                </p>
                <p className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] [text-shadow:0_2px_20px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  Exploration des matieres: acrylique, aerosol, enduits, collages, cordes; chaque medium devient une voix.
                </p>
                <p className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] [text-shadow:0_2px_20px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  Naissance de Mr Microbe: l univers artistique assume une signature organique, pop et emotionnelle.
                </p>
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary)]/45 py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Timeline interactive
              </span>
              <div className="relative mt-12 space-y-8">
                <div className="pointer-events-none absolute top-0 bottom-0 left-[108px] hidden w-[3px] bg-gradient-to-b from-white/30 via-white/85 to-white/30 shadow-[0_0_12px_rgba(255,255,255,0.35)] md:block" />
                {timeline.map((step, i) => (
                  <motion.div
                    key={step.annee}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col gap-6 rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)] md:flex-row md:gap-12 md:p-9"
                  >
                    <div className="min-w-[120px] text-xs font-black uppercase tracking-[0.45em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,1)]">
                      {step.annee}
                    </div>
                    <div>
                      <h3 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-[2.25rem] [text-shadow:0_4px_24px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                        {step.titre}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-white md:text-xl [text-shadow:0_2px_18px_rgba(0,0,0,1),0_1px_2px_rgba(0,0,0,1)]">
                        {step.texte}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            </section>

            <section className="relative border-y-2 border-[var(--brand-primary-soft)]/45 py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
              <span className="text-[11px] font-black uppercase tracking-[0.55em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,1)] [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">
                Valeurs artistiques
              </span>
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  ["Emotion", "L oeuvre doit provoquer un mouvement interieur sincere."],
                  ["Matiere", "La surface reste vivante, tactile, imparfaite et vibrante."],
                  ["Transmission", "Chaque piece cree un dialogue direct avec son espace et son regardeur."],
                ].map(([title, text]) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -4 }}
                    className="rounded-md border-[3px] border-[var(--brand-primary-soft)]/55 bg-[var(--brand-primary-dark)]/55 p-9 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_56px_rgba(0,0,0,0.85)]"
                  >
                    <h3 className="font-serif text-3xl font-medium text-white sm:text-4xl [text-shadow:0_4px_24px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                      {title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-white [text-shadow:0_2px_18px_rgba(0,0,0,1),0_1px_2px_rgba(0,0,0,1)]">
                      {text}
                    </p>
                  </motion.div>
                ))}
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

