"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  SmoothScroll,
  Navbar,
  Footer,
} from "@/components/the-edit/TheEdit";

const immersionImages = [
  "/images/M7_02134.jpg",
  "/images/M7_02137.jpg",
  "/images/M7_02104.jpg",
  "/images/M7_01636.jpg",
  "/images/M7_01627.jpg",
];

const processSteps = [
  {
    step: "01",
    overline: "Analyse initiale",
    title: "Brief",
    text: "Lecture du lieu, des intentions, des dimensions et du budget.",
    details: ["Lecture du contexte", "Intentions & priorites", "Cadre budgetaire"],
  },
  {
    step: "02",
    overline: "Curation",
    title: "Selection",
    text: "Proposition de pieces et d'axes artistiques adaptes.",
    details: ["Choix des pieces", "Axes visuels", "Cohesion d'ensemble"],
  },
  {
    step: "03",
    overline: "Projection",
    title: "Projection",
    text: "Simulation visuelle pour valider la presence dans l'espace.",
    details: ["Simulation in situ", "Validation des formats", "Ajustements finaux"],
  },
  {
    step: "04",
    overline: "Mise en place",
    title: "Installation",
    text: "Accrochage final et mise en scene du parcours visuel.",
    details: ["Accrochage precise", "Rythme de lecture", "Presence finale"],
  },
];

const faqItems = [
  {
    q: "Combien de temps dure une immersion complete ?",
    a: "En general 7 a 15 jours selon le niveau de personnalisation et la disponibilite des formats.",
  },
  {
    q: "Peut-on adapter une oeuvre existante ?",
    a: "Oui, adaptation de format, support et intensite chromatique en fonction du lieu.",
  },
  {
    q: "L'installation est-elle accompagnee ?",
    a: "Oui, avec protocole d'accrochage et accompagnement selon la localisation.",
  },
];

function WashiTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-35 mix-blend-overlay">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
    </div>
  );
}

function HankoCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { damping: 20, stiffness: 110, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 110, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex items-center justify-center mix-blend-multiply"
    >
      <div className="h-12 w-12 rounded-full border border-[var(--brand-primary)]/60 bg-[var(--brand-primary)]/10 backdrop-blur-sm flex items-center justify-center">
        <span className="font-serif text-[8px] tracking-widest font-bold text-[var(--brand-primary-dark)]">IMM</span>
      </div>
    </motion.div>
  );
}

function VerticalNav() {
  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:flex flex-col items-center gap-7 writing-vertical-rl mix-blend-difference text-neutral-800">
      <div className="h-16 w-px bg-current opacity-30" />
      {["Process", "Simulation", "FAQ"].map((item) => (
        <a key={item} href="#" className="rotate-180 text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-55">
          {item}
        </a>
      ))}
      <div className="h-16 w-px bg-current opacity-30" />
    </nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 520], [0, 170]);
  const opacity = useTransform(scrollY, [0, 320], [1, 0.2]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f0f0eb] px-6 pt-24 md:pt-28">
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-lg aspect-[3/4] overflow-hidden contrast-[1.08]"
      >
        <div className="absolute inset-0 z-20 m-4 border border-neutral-900/12" />
        <img src={immersionImages[0]} alt="Immersion Mr Microbe" className="h-full w-full object-cover" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="font-serif text-6xl tracking-tight leading-none text-neutral-900 md:text-9xl"
        >
       
          <br />
          <span className="ml-1 mt-3 block font-sans text-2xl font-light tracking-[0.45em] text-neutral-700/55 md:text-4xl">
            IMMERSION
          </span>
        </motion.h1>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="h-px w-12 bg-neutral-900" />
            <p className="max-w-[240px] text-xs font-mono text-neutral-600">
              Methode dynamique de projection et d'installation.
              <br />
              Lecture immediate du projet.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-[#f0f0eb] px-6 py-40 text-center md:py-52">
      <div className="mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          className="mb-10 block text-[10px] font-mono uppercase tracking-[0.9em]"
        >
          Methode
        </motion.span>
        <h2 className="font-serif text-4xl leading-[1.1] text-neutral-800 italic md:text-7xl">
          "Lecture du lieu, curation, projection et installation: une immersion claire, precise et coherente."
        </h2>
        <div className="mt-16 flex justify-center">
          <div className="h-24 w-px bg-neutral-900/15" />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="min-h-screen bg-[#e8e6e1] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="space-y-10 order-2 md:order-1">
          {processSteps.map((item, i) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.14 }}
              className="group cursor-pointer"
            >
              <div className="mb-2 flex items-center gap-4">
                <span className="text-xs font-mono text-neutral-400">{item.step}</span>
                <h3 className="font-serif text-3xl text-neutral-800 transition-all duration-500 md:text-4xl">{item.title}</h3>
              </div>
              <p className="ml-[14px] border-l border-neutral-300 pl-6 text-sm font-mono leading-relaxed text-neutral-500">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="relative order-1 flex h-[400px] w-full items-center justify-center md:order-2 md:h-[620px]">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full"
          >
            <img src={immersionImages[1]} alt="Projection immersion" className="h-full w-full rounded-sm object-cover opacity-85" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-3/4 w-3/4 animate-[spin_70s_linear_infinite]">
                <path id="curve-immersion" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath xlinkHref="#curve-immersion" className="fill-white/80 text-[5px] font-mono uppercase tracking-[0.4em]">
                    Mr Microbe Immersion - Brief Selection Projection Installation -
                  </textPath>
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SimulationSection({
  simulationIndex,
  setSimulationIndex,
}: {
  simulationIndex: number;
  setSimulationIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="bg-[#f0f0eb] px-6 py-40 md:py-52">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-end justify-between border-b border-neutral-900/10 pb-8">
          <h3 className="font-serif text-5xl text-neutral-800 md:text-7xl">
            Simulation
            <br />
            Archive.
          </h3>
          <span className="hidden text-[10px] font-mono uppercase tracking-widest opacity-40 md:block">Studio / visual test</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative h-[340px] md:h-[620px]">
            {immersionImages.map((image, i) => (
              <motion.img
                key={`simulation-slide-${image}`}
                src={image}
                alt={`Simulation ${i + 1}`}
                initial={false}
                animate={{ opacity: i === simulationIndex ? 1 : 0, scale: i === simulationIndex ? 1 : 1.015 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover contrast-[1.08]"
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/12" />
          </div>

          <button
            type="button"
            onClick={() => setSimulationIndex((prev) => (prev === 0 ? immersionImages.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-black/55"
            aria-label="Image precedente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setSimulationIndex((prev) => (prev + 1) % immersionImages.length)}
            className="absolute right-3 top-1/2 z-[3] -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-black/55"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
            {immersionImages.map((_, i) => (
              <button
                key={`simulation-dot-${i}`}
                type="button"
                onClick={() => setSimulationIndex(i)}
                className={`h-2.5 rounded-full transition ${i === simulationIndex ? "w-7 bg-white" : "w-2.5 bg-white/45"}`}
                aria-label={`simulation-slide-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DialogueSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f0f0eb] px-6 py-40 md:py-52">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[1em] text-neutral-400">FAQ</span>
          <h2 className="mt-4 font-serif text-6xl italic text-neutral-800">Questions.</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={item.q}
              className="group cursor-pointer border-b border-neutral-900/10 py-10"
              onClick={() => setActive(active === i ? -1 : i)}
            >
              <div className="flex items-center justify-between">
                <h4 className={`font-serif text-3xl transition-all duration-700 ${active === i ? "pl-10 italic" : "opacity-45 group-hover:pl-5"}`}>
                  {item.q}
                </h4>
                {active === i ? <Minus size={20} className="opacity-20" /> : <Plus size={20} className="opacity-20" />}
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="max-w-2xl px-10 pb-4 pt-10 font-serif text-xl italic leading-relaxed text-neutral-500">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatesSection() {
  const states = processSteps.slice(0, 3).map((item) => ({
    t: item.title,
    d: item.details.join(", "),
  }));

  return (
    <section className="border-y border-neutral-900/5 bg-[#e8e6e1] px-6 py-40 md:py-52">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 text-center md:grid-cols-3 md:gap-14 md:text-left">
        {states.map((state) => (
          <div key={state.t} className="group cursor-default border-t border-neutral-900/10 pt-10">
            <h5 className="font-serif text-6xl italic text-neutral-800 transition-all duration-1000 md:text-7xl group-hover:pl-3">
              {state.t}
            </h5>
            <p className="mt-7 font-serif text-lg italic leading-relaxed text-neutral-500 opacity-80 transition-opacity group-hover:opacity-100">
              {state.d}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-neutral-900/10 pt-10">
        <h3 className="font-serif text-4xl text-neutral-800 md:text-5xl">Lancer une immersion</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white"
          >
            Voir l'artwork
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white"
          >
            Contact studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ImmersionPage() {
  const [simulationIndex, setSimulationIndex] = useState(0);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-[#f0f0eb] text-[#1a1a1a]">
        <WashiTexture />
        <HankoCursor />
        <VerticalNav />
        <Navbar />

        <main className="relative z-10 overflow-hidden">
          <HeroSection />
          <PhilosophySection />
          <ProcessSection />
          <SimulationSection simulationIndex={simulationIndex} setSimulationIndex={setSimulationIndex} />
          <DialogueSection />
          <StatesSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
