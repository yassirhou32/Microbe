"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SmoothScroll,
  Navbar,
  Footer,
} from "@/components/the-edit/TheEdit";

export default function ContactPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[var(--brand-primary-soft)] text-stone-900">
        <Navbar />

        <main>
          <header className="relative overflow-hidden bg-stone-900 px-6 pb-20 pt-36 text-stone-100 md:px-20 md:pb-24 md:pt-40">
            <div className="pointer-events-none absolute inset-0">
              <img
                src="/images/C5456.00_00_29_18.Still001.jpg"
                alt=""
                className="h-full w-full object-cover opacity-[0.24]"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[var(--brand-primary)]/16 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--brand-primary-soft)]">
                Contact
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Une demande simple.
                <br />
                <span className="italic text-white/90">Une réponse claire.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm text-stone-300 md:text-base">
                Dites-nous ce que vous cherchez et nous revenons vers vous rapidement avec une proposition adaptée.
              </p>
            </div>
          </header>

          <section className="px-6 py-14 md:px-20 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
              {[
                ["Téléphone", "06 60 70 78 33"],
                ["Email", "mrmicrobe.furgerot@gmail.com"],
                ["Adresse", "19 rue de Saint-Gobain, 37700 Saint-Pierre-des-Corps"],
                ["Délai", "Réponse sous 24-48h"],
              ].map(([label, value]) => (
                <article key={label} className="rounded-[14px] border border-stone-900/15 bg-white/85 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--brand-primary-dark)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-stone-800">{value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="px-6 pb-14 md:px-20 md:pb-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[18px] border border-stone-900/15 bg-white/85 p-6 md:p-7">
                <h2 className="font-serif text-4xl leading-[1.02] text-stone-900 md:text-5xl">
                  Parlez-nous de votre projet
                </h2>
                <p className="mt-3 text-sm text-stone-600">
                  Formulaire complet pour cadrer précisément votre demande.
                </p>
                <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Nom complet</span>
                    <input className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="Votre nom" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Email</span>
                    <input type="email" className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="vous@email.com" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Téléphone</span>
                    <input className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="+33..." />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Ville</span>
                    <input className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="Paris, Lyon..." />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Budget estimé</span>
                    <select className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]">
                      <option>Moins de 2 000 EUR</option>
                      <option>2 000 à 5 000 EUR</option>
                      <option>5 000 à 10 000 EUR</option>
                      <option>10 000 EUR et +</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Collection d'intérêt</span>
                    <select className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]">
                      <option>Les toiles</option>
                      <option>Petit Microbe (résines)</option>
                      <option>Monocycle</option>
                      <option>Grand format</option>
                      <option>Luminaire</option>
                      <option>Joaillerie / pièce spéciale</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Objectif</span>
                    <select className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]">
                      <option>Acquérir une œuvre existante</option>
                      <option>Commande sur mesure</option>
                      <option>Conseil accrochage / sélection</option>
                      <option>Constitution de collection</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Dimensions du mur (cm)</span>
                    <input className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="Ex: 280 x 240" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-stone-600">Délai souhaité</span>
                    <select className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]">
                      <option>Dès que possible</option>
                      <option>Sous 1 mois</option>
                      <option>Sous 2 à 3 mois</option>
                      <option>Projet long terme</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="text-xs font-semibold text-stone-600">Message</span>
                    <textarea rows={5} className="mt-1 w-full rounded-[10px] border border-stone-300 bg-white px-3 py-2.5 outline-none focus:border-[var(--brand-primary-dark)]" placeholder="Parlez-nous de l'ambiance souhaitée, des couleurs, de la pièce, des contraintes techniques et de votre coup de cœur dans les collections..." />
                  </label>
                  <div className="md:col-span-2">
                    <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white hover:bg-[var(--brand-primary-dark)]">
                      Envoyer la demande
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="rounded-[18px] border border-stone-900/15 bg-white/85 p-3 md:p-4">
                <div className="mb-4 flex items-center justify-between px-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--brand-primary-dark)]">
                    Atelier
                  </p>
                  <Link href="https://maps.google.com/?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps" className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-700 underline decoration-[var(--brand-primary)]/60 underline-offset-4">
                    Ouvrir Maps
                  </Link>
                </div>
                <iframe
                  title="Carte atelier Mr Microbe"
                  src="https://www.google.com/maps?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps&output=embed"
                  className="h-[420px] w-full rounded-[12px] border border-stone-300/70 md:h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

