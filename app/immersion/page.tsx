"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
  },
  {
    titre: "Projection d oeuvre",
    texte:
      "Simulation de formats et d intentions chromatiques pour trouver le bon impact.",
  },
  {
    titre: "Edition finale",
    texte:
      "Proposition finale avec axe emotionnel, support, tirage et protocole d accrochage.",
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

          <section className="border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/45 px-6 py-20 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Parcours en 3 actes
                </span>
                <Sparkles className="h-6 w-6 text-[var(--brand-primary)]" />
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {capsules.map((item, i) => (
                  <motion.article
                    key={item.titre}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="relative border border-[var(--brand-primary)]/40 bg-white/80 p-8 shadow-[0_22px_42px_-24px_rgba(28,25,23,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_52px_-22px_rgba(28,25,23,0.42)]"
                  >
                    <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--brand-primary-dark)]">
                      Acte 0{i + 1}
                    </p>
                    <h2 className="mt-4 font-serif text-4xl leading-[1.01] tracking-tight text-stone-900 md:text-[2.65rem]">
                      {item.titre}
                    </h2>
                    <p className="mt-5 text-[17px] leading-relaxed text-stone-700">{item.texte}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white/60 px-6 py-24 md:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                    Ce que tu reçois
                  </span>
                  <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
                    Un dossier clair
                    <br />
                    pour decider vite.
                  </h2>
                  <ul className="mt-8 space-y-3 text-stone-700">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative border border-[var(--brand-primary)]/35 bg-[var(--brand-primary-soft)]/60 p-8 shadow-[0_22px_42px_-24px_rgba(28,25,23,0.35)]">
                  <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/15" />
                  <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[var(--brand-primary-dark)]">
                    Grille rapide
                  </p>
                  <div className="mt-6 space-y-5">
                    {formatGuide.map((f) => (
                      <div
                        key={f.format}
                        className="border border-[var(--brand-primary)]/25 bg-white/80 p-4"
                      >
                        <h3 className="font-serif text-2xl text-stone-900 md:text-[1.9rem]">{f.format}</h3>
                        <p className="mt-1 text-[15px] text-stone-600">{f.usage}</p>
                        <p className="mt-2 text-[15px] font-semibold text-[var(--brand-primary-dark)]">
                          {f.effet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-stone-900 px-6 py-24 text-stone-100 md:px-20">
            <div className="mx-auto max-w-7xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-soft)]">
                Simulation visuelle
              </span>
              <Separator color="bg-[var(--brand-primary)]" />
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative overflow-hidden border border-white/20">
                  <img src={IMAGES.hero} alt="" className="h-[420px] w-full object-cover" />
                </div>
                <div className="relative overflow-hidden border border-white/20">
                  <img src="/images/M7_02104.jpg" alt="" className="h-[420px] w-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-[var(--brand-primary)]/25 bg-[var(--brand-primary-soft)]/70 px-6 py-24 md:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  FAQ immersion
                </span>
              </div>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="relative border border-[var(--brand-primary)]/35 bg-white/90 p-6 shadow-[0_18px_34px_-22px_rgba(28,25,23,0.4)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_40px_-20px_rgba(28,25,23,0.45)]"
                  >
                    <div className="pointer-events-none absolute inset-2 border border-[var(--brand-primary)]/12" />
                    <h3 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 md:text-[2.2rem]">{item.q}</h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-stone-700">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden border-y border-[var(--brand-primary)]/35 bg-stone-900 px-0 py-24 text-stone-100">
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

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-stone-900 to-transparent md:w-40" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-stone-900 to-transparent md:w-40" />

              <div className="immersive-marquee-track flex w-max gap-5 px-6 md:gap-6 md:px-20">
                {testimonialTrack.map((item, i) => (
                  <article
                    key={`${item.nom}-${item.lieu}-${i}`}
                    className={`group relative shrink-0 border border-[var(--brand-primary)]/50 bg-gradient-to-b from-white/[0.2] to-white/[0.07] p-6 backdrop-blur-sm shadow-[0_18px_36px_-20px_rgba(0,0,0,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-primary)]/75 ${
                      i % 3 === 0 ? "w-[360px] md:w-[420px]" : "w-[330px] md:w-[380px]"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm tracking-[0.2em] text-[#ffd86b]">★★★★★</span>
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

          <section className="border-y border-[var(--brand-primary)]/30 bg-[var(--brand-primary-soft)] px-6 py-24 md:px-20">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--brand-primary-dark)]">
                  Prochaine etape
                </span>
                <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-stone-900 md:text-6xl">
                  Construire ton
                  <br />
                  parcours sur mesure.
                </h2>
                <p className="mt-5 max-w-2xl text-stone-700">
                  Tu peux partir d une oeuvre existante ou d une commande specifique. Nous
                  cadrons ensemble l intention, le format et le rythme de livraison.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="group inline-flex items-center gap-3 border-2 border-[var(--brand-primary)] bg-[var(--brand-primary)] px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                >
                  Voir les collections
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/artiste"
                  className="inline-flex items-center gap-3 border-2 border-stone-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-stone-900 transition hover:bg-stone-900 hover:text-white"
                >
                  Decouvrir l artiste
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        .immersive-marquee-track {
          animation: immersiveMarquee 58s linear infinite;
          will-change: transform;
        }
        .immersive-marquee-track:hover {
          animation-play-state: paused;
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

