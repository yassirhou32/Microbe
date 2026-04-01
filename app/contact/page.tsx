"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import {
  SmoothScroll,
  Navbar,
  Footer,
  Separator,
} from "@/components/the-edit/TheEdit";

export default function ContactPage() {
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

          <section className="border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/55 px-6 py-16 md:px-20 md:py-20">
            <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <article className="group relative min-h-[220px] border border-[var(--brand-primary)]/35 bg-white/88 p-8 shadow-[0_18px_34px_-24px_rgba(28,25,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_42px_-20px_rgba(28,25,23,0.58)]">
                <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/75">
                  <Phone className="h-5 w-5 text-[var(--brand-primary-dark)]" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                  Telephone
                </p>
                <p className="mt-3 font-serif text-[2rem] leading-tight text-stone-900">06 60 70 78 33</p>
              </article>

              <article className="group relative min-h-[220px] border border-[var(--brand-primary)]/35 bg-white/88 p-8 shadow-[0_18px_34px_-24px_rgba(28,25,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_42px_-20px_rgba(28,25,23,0.58)]">
                <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/75">
                  <Mail className="h-5 w-5 text-[var(--brand-primary-dark)]" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                  Email
                </p>
                <p className="mt-3 break-all font-serif text-[2rem] leading-tight text-stone-900">
                  mrmicrobe.furgerot@gmail.com
                </p>
              </article>

              <article className="group relative min-h-[220px] border border-[var(--brand-primary)]/35 bg-white/88 p-8 shadow-[0_18px_34px_-24px_rgba(28,25,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_42px_-20px_rgba(28,25,23,0.58)]">
                <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/75">
                  <MapPin className="h-5 w-5 text-[var(--brand-primary-dark)]" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                  Lieu
                </p>
                <p className="mt-3 font-serif text-[1.8rem] leading-tight text-stone-900">19 rue de Saint Gobain, 37700 Saint-Pierre-des-Corps</p>
              </article>

              <article className="group relative min-h-[220px] border border-[var(--brand-primary)]/35 bg-white/88 p-8 shadow-[0_18px_34px_-24px_rgba(28,25,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_42px_-20px_rgba(28,25,23,0.58)]">
                <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/75">
                  <Clock3 className="h-5 w-5 text-[var(--brand-primary-dark)]" />
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                  Horaires
                </p>
                <p className="mt-3 font-serif text-[1.8rem] leading-tight text-stone-900">9h–18h · tous les jours sauf weekend</p>
              </article>
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-[var(--brand-primary)]/30 bg-stone-900 px-6 py-20 text-stone-100 md:px-20 md:py-24">
            <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[var(--brand-primary)]/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-primary)]/22 blur-3xl" />

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

              <div className="group relative overflow-hidden border border-[var(--brand-primary)]/45 bg-black/30 p-3 shadow-[0_30px_70px_-30px_rgba(188,64,119,0.55)] md:p-5">
                <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/18 md:inset-3" />
                <div className="pointer-events-none absolute left-5 top-5 h-12 w-px bg-gradient-to-b from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute left-5 top-5 h-px w-12 bg-gradient-to-r from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-px bg-gradient-to-t from-[var(--brand-primary-soft)]/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-5 right-5 h-px w-12 bg-gradient-to-l from-[var(--brand-primary-soft)]/70 to-transparent" />

                <div className="relative overflow-hidden border border-white/10 bg-black/30">
                  <iframe
                    title="Carte atelier Mr Microbe"
                    src="https://www.google.com/maps?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps&output=embed"
                    className="h-[480px] w-full md:h-[620px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/65 px-6 py-20 md:px-20 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Brief de projet
                  </span>
                  <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl">
                    Racontez-nous
                    <br />
                    votre projet.
                  </h2>
                  <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-700">
                    Ce formulaire nous permet de preparer une recommandation precise:
                    collection ciblee, format, budget, delai et contraintes de votre espace.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Lecture d espace",
                      "Conseil format",
                      "Selection d oeuvre",
                      "Accrochage",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="border border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)]/45 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--brand-primary-dark)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <Separator color="bg-[var(--brand-primary)]" />
                  <p className="mt-8 text-sm leading-relaxed text-stone-600">
                    Delai de reponse moyen: 24 a 48h.
                  </p>
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
                </div>

                <form className="relative border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/60 p-6 shadow-[0_24px_44px_-24px_rgba(28,25,23,0.42)] md:p-8">
                  <div className="pointer-events-none absolute inset-3 border border-[var(--brand-primary)]/14" />
                  <p className="mb-6 text-[10px] font-black uppercase tracking-[0.38em] text-[var(--brand-primary-dark)]">
                    Formulaire collectionneur
                  </p>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Nom complet
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="Votre nom" />
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Email
                      </span>
                      <input type="email" className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="vous@email.com" />
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Telephone
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="+33..." />
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Ville
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="Paris, Lyon..." />
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Budget estime
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]">
                        <option>Moins de 2 000 EUR</option>
                        <option>2 000 a 5 000 EUR</option>
                        <option>5 000 a 10 000 EUR</option>
                        <option>10 000 EUR et +</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Collection d interet
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]">
                        <option>Les toiles</option>
                        <option>Petit Microbe (resines)</option>
                        <option>Monocycle</option>
                        <option>Grand format</option>
                        <option>Luminaire</option>
                        <option>Joaillerie / piece speciale</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Objectif
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]">
                        <option>Acquerir une oeuvre existante</option>
                        <option>Commande sur mesure</option>
                        <option>Conseil accrochage / selection</option>
                        <option>Constitution de collection</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Dimensions du mur (cm)
                      </span>
                      <input className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="Ex: 280 x 240" />
                    </label>

                    <label className="block">
                      <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                        Delai souhaite
                      </span>
                      <select className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]">
                        <option>Des que possible</option>
                        <option>Sous 1 mois</option>
                        <option>Sous 2 a 3 mois</option>
                        <option>Projet long terme</option>
                      </select>
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-600">
                      Message
                    </span>
                    <textarea rows={5} className="mt-2 w-full border border-[var(--brand-primary)]/30 bg-white/95 px-4 py-3 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_2px_rgba(188,64,119,0.14)]" placeholder="Parlez-nous de l ambiance souhaitee, des couleurs, de la piece, des contraintes techniques et de votre coup de coeur dans les collections..." />
                  </label>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-8 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[0_12px_22px_-12px_rgba(155,47,96,0.7)] transition hover:bg-[var(--brand-primary-dark)]"
                  >
                    Envoyer la demande <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </section>
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

