"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ArticleRow,
  FloatingImage,
  Marquee,
  type MagazineArticle,
} from "@/components/magazine/Magazine";
import { SmoothScroll, Navbar, Footer } from "@/components/the-edit/TheEdit";

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [contactStep, setContactStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    budget: "Moins de 2 000 EUR",
    collection: "Les toiles",
    objective: "Acquérir une œuvre existante",
    dimensions: "",
    timeline: "Dès que possible",
    message: "",
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isStepOneValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.city.trim() !== "";

  const contactArticles: MagazineArticle[] = [
    { title: "Téléphone", category: "06 60 70 78 33", color: "bg-stone-500" },
    { title: "Email", category: "mrmicrobe.furgerot@gmail.com", color: "bg-red-700" },
    {
      title: "Adresse",
      category: "19 rue de Saint-Gobain, 37700 Saint-Pierre-des-Corps",
      color: "bg-indigo-900",
    },
    { title: "Délai", category: "Réponse sous 24-48h", color: "bg-emerald-800" },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <SmoothScroll>
      <main
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveIndex(-1)}
        className="min-h-screen w-full bg-[#f4f4f0] text-black selection:bg-black selection:text-white"
      >
        <Navbar />
        <FloatingImage activeIndex={activeIndex} x={mouseX} y={mouseY} articles={contactArticles} />

      <section className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 border-b border-black bg-[#f4f4f0] overflow-hidden pt-32 md:pt-36">
        <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="/images/C5456.00_00_29_18.Still001.jpg"
              className="w-full h-full object-cover opacity-80"
              alt="Contact studio"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 top-24 z-0 overflow-hidden md:hidden">
          <img
            src="/images/C5456.00_00_29_18.Still001.jpg"
            className="w-full h-full object-cover opacity-60"
            alt="Contact studio"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f4f0] via-[#f4f4f0]/80 to-transparent" />
        </div>

        <div className="relative z-10 flex justify-between items-start md:items-end w-full max-w-7xl">
         
          <span className="font-mono text-xs uppercase tracking-widest text-black/70 right-0">
          </span>
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col justify-end mt-24 md:mt-0">
        

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 md:mt-24">
           
            <div className="md:col-span-8 flex justify-start md:justify-end items-end md:mix-blend-difference">
              <a href="#contact-form" className="group rounded-full border border-black md:border-white px-8 py-4 text-black md:text-white hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black transition-all duration-300 flex items-center gap-4">
                <span className="uppercase text-xs font-bold tracking-widest">Envoyer une demande</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee text="Latest Stories &bull; Breaking News &bull; Visual Essays &bull; " />

      <section className="px-6 md:px-12 py-24 min-h-[50vh]">
        <div className="mb-12 flex items-center gap-2">
          <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Featured Stories
          </span>
        </div>

        <div className="flex flex-col">
          {contactArticles.map((article, index) => (
            <ArticleRow
              key={`${article.title}-${index}`}
              index={index}
              title={article.title}
              category={article.category}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
      </section>

      <section id="contact-form" className="px-6 pb-14 md:px-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-stone-300/70 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)] p-3 shadow-[0_44px_88px_-54px_rgba(0,0,0,0.44)] md:p-4">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-stone-500/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-stone-300/65 lg:block" />
            <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[26px] border border-stone-300/75 bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fc_100%)] p-6 shadow-[0_30px_58px_-42px_rgba(0,0,0,0.36)] md:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-stone-500/75 to-transparent" />
                <h2 className="font-serif text-4xl leading-[1.02] text-stone-900 md:text-5xl">
                  Parlez-nous de votre projet
                </h2>
                <p className="mt-3 text-sm text-stone-600">
                  Formulaire complet pour cadrer précisément votre demande.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={`contact-step-${step}`}
                      className={`h-2 rounded-full transition ${
                        contactStep === step ? "w-8 bg-[var(--brand-primary)]" : "w-2 bg-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Étape {contactStep} / 3
                </p>

                <form
                  className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
                  onSubmit={(event) => event.preventDefault()}
                >
                  {contactStep === 1 && (
                    <>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Nom complet</span>
                        <input
                          value={formData.fullName}
                          onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="Votre nom"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Email</span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="vous@email.com"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Téléphone</span>
                        <input
                          value={formData.phone}
                          onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="+33..."
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Ville</span>
                        <input
                          value={formData.city}
                          onChange={(event) => setFormData((prev) => ({ ...prev, city: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="Paris, Lyon..."
                        />
                      </label>
                      <div className="md:col-span-2 flex justify-end">
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={!isStepOneValid}
                          onClick={() => setContactStep(2)}
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_30px_-20px_rgba(188,64,119,0.9)] transition hover:bg-[var(--brand-primary-dark)] disabled:cursor-not-allowed disabled:opacity-45"
                        >
                          Suivant
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </>
                  )}

                  {contactStep === 2 && (
                    <>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Budget estimé</span>
                        <select
                          value={formData.budget}
                          onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                        >
                          <option>Moins de 2 000 EUR</option>
                          <option>2 000 à 5 000 EUR</option>
                          <option>5 000 à 10 000 EUR</option>
                          <option>10 000 EUR et +</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Collection d'intérêt</span>
                        <select
                          value={formData.collection}
                          onChange={(event) => setFormData((prev) => ({ ...prev, collection: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                        >
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
                        <select
                          value={formData.objective}
                          onChange={(event) => setFormData((prev) => ({ ...prev, objective: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                        >
                          <option>Acquérir une œuvre existante</option>
                          <option>Commande sur mesure</option>
                          <option>Conseil accrochage / sélection</option>
                          <option>Constitution de collection</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-stone-600">Dimensions du mur (cm)</span>
                        <input
                          value={formData.dimensions}
                          onChange={(event) => setFormData((prev) => ({ ...prev, dimensions: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="Ex: 280 x 240"
                        />
                      </label>
                      <div className="md:col-span-2 flex justify-between">
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setContactStep(1)}
                          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-stone-700 transition hover:bg-stone-100"
                        >
                          Retour
                        </motion.button>
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setContactStep(3)}
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_30px_-20px_rgba(188,64,119,0.9)] transition hover:bg-[var(--brand-primary-dark)]"
                        >
                          Suivant
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </>
                  )}

                  {contactStep === 3 && (
                    <>
                      <label className="block md:col-span-2">
                        <span className="text-xs font-semibold text-stone-600">Délai souhaité</span>
                        <select
                          value={formData.timeline}
                          onChange={(event) => setFormData((prev) => ({ ...prev, timeline: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                        >
                          <option>Dès que possible</option>
                          <option>Sous 1 mois</option>
                          <option>Sous 2 à 3 mois</option>
                          <option>Projet long terme</option>
                        </select>
                      </label>
                      <label className="block md:col-span-2">
                        <span className="text-xs font-semibold text-stone-600">Message</span>
                        <textarea
                          rows={5}
                          value={formData.message}
                          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                          className="mt-1 w-full rounded-[12px] border border-stone-300/90 bg-white/95 px-3 py-2.5 outline-none transition focus:border-[var(--brand-primary-dark)] focus:shadow-[0_0_0_3px_rgba(188,64,119,0.12)]"
                          placeholder="Parlez-nous de l'ambiance souhaitée, des couleurs, de la pièce, des contraintes techniques et de votre coup de cœur dans les collections..."
                        />
                      </label>
                      <div className="md:col-span-2 flex justify-between">
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setContactStep(2)}
                          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-stone-700 transition hover:bg-stone-100"
                        >
                          Retour
                        </motion.button>
                        <motion.button
                          type="submit"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_30px_-20px_rgba(188,64,119,0.9)] transition hover:bg-[var(--brand-primary-dark)]"
                        >
                          Envoyer la demande
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="relative overflow-hidden rounded-[26px] border border-stone-300/75 bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fc_100%)] p-3 shadow-[0_30px_58px_-42px_rgba(0,0,0,0.36)] md:p-4"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-stone-400/70 to-transparent" />
                <div className="mb-4 flex items-center justify-between px-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--brand-primary-dark)]">
                    Atelier
                  </p>
                  <Link
                    href="https://maps.google.com/?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-700 underline decoration-[var(--brand-primary)]/60 underline-offset-4"
                  >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </SmoothScroll>
  );
}

