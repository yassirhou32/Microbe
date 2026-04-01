"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--brand-primary-soft)] text-stone-900 overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />

          <section className="relative border-y border-[var(--brand-primary)]/25 bg-white/70 px-6 py-16 md:px-20 md:py-20">
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-8 h-60 w-60 rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ["Collections", "Univers complets avec formats, supports et tirages."],
                ["Selection", "Accompagnement pour choisir la piece juste selon ton espace."],
                ["Accrochage", "Conseils de placement, hauteur et respiration du mur."],
              ].map(([title, text]) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45 }}
                  className="group relative border border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)]/45 p-6 shadow-[0_14px_30px_-24px_rgba(28,25,23,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_36px_-20px_rgba(28,25,23,0.5)]"
                >
                  <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/12" />
                  <span className="relative text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]/70">
                    Signature
                  </span>
                  <h2 className="relative font-serif text-4xl leading-[1.05] tracking-tight text-stone-900">
                    {title}
                  </h2>
                  <p className="relative mt-3 text-stone-700">{text}</p>
                  <div className="relative mt-5 h-px w-16 bg-[var(--brand-primary)]/45 transition-all duration-500 group-hover:w-24" />
                </motion.article>
              ))}
            </div>
          </section>

          <TheManifesto />

          <section className="border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/55 px-6 py-20 md:px-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Note d atelier
                </span>
                <h2 className="mt-5 font-serif text-5xl leading-[1.03] tracking-tight md:text-6xl">
                  Plus qu une oeuvre:
                  <br />
                  une direction artistique.
                </h2>
                <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-stone-700">
                  Chaque collection est pensee pour dialoguer avec un lieu: lumière,
                  volumes, circulation, émotion. L objectif est un impact visuel fort
                  et coherent avec ton univers.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-7 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                >
                  Explorer
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-stone-900 px-7 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-stone-900 transition hover:bg-stone-900 hover:text-white"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[var(--brand-primary)]/25 bg-white/65 px-6 py-20 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {[
                  ["01", "Brief", "Intentions, espace, dimensions, budget, delai."],
                  ["02", "Selection", "Proposition de pieces ou axes sur mesure."],
                  ["03", "Validation", "Ajustements finaux de format et impact visuel."],
                  ["04", "Installation", "Accrochage et mise en scene dans le lieu."],
                ].map(([step, title, text]) => (
                  <motion.article
                    key={step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="relative border border-[var(--brand-primary)]/28 bg-[var(--brand-primary-soft)]/42 p-5 shadow-[0_12px_24px_-20px_rgba(28,25,23,0.45)] transition-all duration-500 hover:shadow-[0_20px_36px_-20px_rgba(28,25,23,0.55)]"
                  >
                    <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/12" />
                    <p className="relative text-[10px] font-black uppercase tracking-[0.4em] text-[var(--brand-primary-dark)]">
                      {step}
                    </p>
                    <h3 className="relative mt-2 font-serif text-3xl leading-tight text-stone-900">{title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-stone-700">{text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <SpotlightGrid />

          <section className="relative bg-[var(--brand-primary-soft)]/70 px-6 py-20 md:px-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--brand-primary)]/30" />
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Chiffres atelier
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {[
                  ["200+", "Pieces creees", "Toiles, resines, objets et editions."],
                  ["6", "Univers", "Toiles, Petit Microbe, Monocycle, etc."],
                  ["24-48h", "Reponse", "Retour moyen sur les demandes qualifiees."],
                  ["100%", "Sur mesure", "Chaque proposition est adaptee au lieu."],
                ].map(([value, label, desc]) => (
                  <motion.article
                    key={value}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden border border-[var(--brand-primary)]/30 bg-white/85 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_40px_-20px_rgba(28,25,23,0.45)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(188,64,119,0.14),rgba(255,255,255,0))]" />
                    <div className="pointer-events-none absolute inset-[7px] border border-[var(--brand-primary)]/14" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-16 bg-[var(--brand-primary)]/45 transition-all duration-500 group-hover:w-24" />
                    <div className="pointer-events-none absolute right-0 top-0 h-16 w-px bg-[var(--brand-primary)]/45 transition-all duration-500 group-hover:h-24" />
                    <p className="relative font-serif text-5xl leading-none text-stone-900 transition-transform duration-500 group-hover:scale-[1.03]">
                      {value}
                    </p>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-dark)]">
                      {label}
                    </p>
                    <p className="mt-3 text-sm text-stone-700">{desc}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <Lookbook />
          <section className="bg-stone-900 px-6 py-20 text-stone-100 md:px-20">
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
                ].map((line) => (
                  <p
                    key={line}
                    className="border border-white/20 bg-white/[0.04] p-6 font-serif text-3xl leading-tight text-stone-100"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[var(--brand-primary)]/25 bg-white/70 px-6 py-20 md:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Questions frequentes
                </span>
              </div>
              <div className="space-y-4">
                {[
                  [
                    "Comment choisir la bonne collection ?",
                    "On part de votre espace, de vos gouts et du niveau d impact souhaite pour proposer une shortlist claire.",
                  ],
                  [
                    "Peut-on commander une piece unique ?",
                    "Oui, vous pouvez demander une commande sur mesure avec brief artistique, format et contraintes.",
                  ],
                  [
                    "Aidez-vous pour l accrochage ?",
                    "Oui, nous fournissons des recommandations precises de hauteur, respiration et mise en scene.",
                  ],
                ].map(([q, a], i) => (
                  <motion.article
                    key={q}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="relative border border-[var(--brand-primary)]/28 bg-[var(--brand-primary-soft)]/45 p-6"
                  >
                    <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/12" />
                    <h3 className="relative font-serif text-3xl leading-tight text-stone-900">{q}</h3>
                    <p className="relative mt-3 text-stone-700">{a}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
          <TheDialogue />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
