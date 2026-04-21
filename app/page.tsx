"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { SmoothScroll, Navbar, Footer } from "@/components/the-edit/TheEdit";

const heroSlides = [
  "/images/M7_02134.jpg",
  "/images/M7_02137.jpg",
  "/images/M7_02162.jpg",
  "/images/M7_01627.jpg",
  "/images/M7_01636.jpg",
  "/images/M7_02104.jpg",
];

const spotlightCards = [
  {
    title: "Collections",
    subtitle: "Directions visuelles fortes",
    description:
      "Pieces signature, formats vivants, selection orientee impact et coherence d'espace.",
    href: "/collections",
    image: "/images/M7_02134.jpg",
  },
  {
    title: "Artiste",
    subtitle: "Langage Mr Microbe",
    description:
      "Un univers de matiere, tension et narration visuelle construit comme une vraie identite d'auteur.",
    href: "/artiste",
    image: "/images/M7_02162.jpg",
  },
  {
    title: "Immersion",
    subtitle: "Du brief au mur",
    description:
      "Parcours projection, selection et installation pour composer une presence artistique nette.",
    href: "/immersion",
    image: "/images/M7_01636.jpg",
  },
];

const processSteps = [
  {
    title: "Brief",
    text: "Lecture du lieu, de la lumiere, des dimensions et de l'intention.",
  },
  {
    title: "Selection",
    text: "Proposition de pieces ou d'axes visuels adaptes a ton espace.",
  },
  {
    title: "Projection",
    text: "Validation de la direction finale, des formats et de la respiration visuelle.",
  },
  {
    title: "Installation",
    text: "Mise en scene propre, precise, et coherent avec l'architecture du lieu.",
  },
];

const galleryImages = [
  "/images/M7_02134.jpg",
  "/images/M7_02137.jpg",
  "/images/M7_02104.jpg",
  "/images/M7_01636.jpg",
  "/images/M7_01627.jpg",
  "/images/M7_02162.jpg",
];

const masonryCards = [
  { src: heroSlides[0], title: "Collection vivante", height: "h-[340px] md:h-[420px]" },
  { src: galleryImages[2], title: "Matiere narrative", height: "h-[420px] md:h-[540px]" },
  { src: galleryImages[1], title: "Direction visuelle", height: "h-[360px] md:h-[460px]" },
  { src: galleryImages[3], title: "Relief et contraste", height: "h-[380px] md:h-[500px]" },
  { src: heroSlides[2], title: "Langage artiste", height: "h-[320px] md:h-[420px]" },
  { src: heroSlides[4], title: "Presence forte", height: "h-[430px] md:h-[560px]" },
  { src: galleryImages[4], title: "Immersion", height: "h-[360px] md:h-[460px]" },
  { src: galleryImages[5], title: "Signature", height: "h-[410px] md:h-[520px]" },
  { src: heroSlides[1], title: "Atelier vivant", height: "h-[340px] md:h-[430px]" },
];

const columns = [masonryCards.slice(0, 3), masonryCards.slice(3, 6), masonryCards.slice(6, 9)];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.18);
        y.set((e.clientY - cy) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white transition hover:border-white/65 hover:bg-white/10"
    >
      {children}
    </motion.button>
  );
}

function HomeHero({
  heroIndex,
  setHeroIndex,
}: {
  heroIndex: number;
  setHeroIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
      {heroSlides.map((slide, i) => (
        <motion.img
          key={slide}
          src={slide}
          alt="Hero visuel Mr Microbe"
          initial={false}
          animate={{ opacity: i === heroIndex ? 1 : 0, scale: i === heroIndex ? 1 : 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.84)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.42em] text-white/80">Mr Microbe Studio</p>
        <h1 className="mt-4 font-serif text-[clamp(3.4rem,10vw,10rem)] leading-[0.84] text-white">
          Une presence
          <br />
          <span className="text-white/72">artistique forte.</span>
        </h1>
        <div className="mt-8 flex w-full items-end justify-between border-b border-white/25 pb-7">
          <p className="max-w-md text-sm uppercase leading-relaxed tracking-[0.18em] text-white/68">
            Collections, immersion, direction visuelle: un site plus impactant, plus vivant, plus assume.
          </p>
          <div className="hidden md:block">
            <div className="h-20 w-20 rounded-full border border-dashed border-white/30 p-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="h-full w-full rounded-full border border-white/20"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Explorer
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)] bg-[var(--brand-primary)] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[var(--brand-primary-dark)]"
          >
            Contact studio
          </Link>
        </div>
        <div className="mt-6 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={`hero-dot-${i}`}
              type="button"
              onClick={() => setHeroIndex(i)}
              className={`h-2.5 rounded-full transition ${i === heroIndex ? "w-8 bg-white" : "w-2.5 bg-white/45"}`}
              aria-label={`hero-slide-${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function MasonrySection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={container} className="bg-[#050505] px-4 pb-20 pt-16 md:px-8 md:pt-20">
      <div className="mb-10 flex items-end justify-between border-b border-white/15 pb-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/56">Sections clefs</p>
          <h2 className="mt-3 font-serif text-5xl leading-[0.9] text-white md:text-6xl">Home ultra design.</h2>
        </div>
        <Link href="/collections" className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/70 md:inline-flex">
          Decouvrir
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {[y1, y2, y3].map((y, colIndex) => (
          <motion.div key={`column-${colIndex}`} style={{ y }} className="flex w-full flex-col gap-6 md:w-1/3">
            <div className="border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              0{colIndex + 1} - {spotlightCards[colIndex]?.title ?? "Studio"}
            </div>
            {columns[colIndex].map((item, i) => (
              <motion.article
                key={`${item.src}-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className={`group relative overflow-hidden ${item.height}`}
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/28 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 translate-y-4 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between border-t border-white/55 pt-3">
                    <span className="font-serif text-2xl italic text-white">{item.title}</span>
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HorizontalShowcase() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);
  const projects = [
    { name: spotlightCards[0].title, category: spotlightCards[0].subtitle, src: spotlightCards[0].image, href: spotlightCards[0].href },
    { name: spotlightCards[1].title, category: spotlightCards[1].subtitle, src: spotlightCards[1].image, href: spotlightCards[1].href },
    { name: spotlightCards[2].title, category: spotlightCards[2].subtitle, src: spotlightCards[2].image, href: spotlightCards[2].href },
    { name: "Atelier visuals", category: "Vibration visuelle", src: galleryImages[0], href: "/collections" },
  ];

  return (
    <section ref={targetRef} className="relative h-[280vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-6 md:gap-12 md:px-10">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="group relative h-[58vh] w-[340px] flex-shrink-0 md:w-[560px]">
              <img src={project.src} alt={project.name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">{project.category}</span>
                <h3 className="font-serif text-4xl italic text-white md:text-6xl">{project.name}</h3>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-white py-24 text-black md:py-36">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10">
        <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.34em]">Process</span>
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-black/45">Mr Microbe / home</span>
        </div>
        <h2 className="max-w-6xl font-serif text-[clamp(2.4rem,6vw,7rem)] leading-[1.06]">
          Un chemin clair pour transformer une intention en{" "}
          <span className="italic text-black/72">presence artistique.</span>
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-20">
          <p className="max-w-xl text-xl leading-relaxed text-black/65">
            {spotlightCards[1].description}
          </p>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={heroSlides[5]} alt="Philosophie" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StickyRevealSection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0.55]);

  return (
    <section ref={container} className="relative h-[190vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <img src={heroSlides[3]} alt="Reveal" className="h-full w-full object-cover grayscale brightness-[0.48]" />
        </motion.div>
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.44em] text-white/72">
              Direction vivante
            </span>
            <h2 className="font-serif text-6xl italic md:text-[11rem]">ESSENCE</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { label: "Collections", value: "03" },
    { label: "Etapes immersion", value: "04" },
    { label: "Visuels atelier", value: "06" },
    { label: "Direction", value: "100%" },
  ];

  return (
    <section className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-l border-white/15 pl-6"
            >
              <h4 className="font-serif text-5xl md:text-7xl">{stat.value}</h4>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/48">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="border-b border-black/10 bg-white py-20 text-black md:py-32">
      <div className="mx-auto max-w-[1700px] px-5 md:px-10">
        <h2 className="mb-10 font-serif text-5xl md:text-7xl">THE ARCHIVE</h2>
        <div className="flex flex-col">
          {[
            { id: "01", title: spotlightCards[0].title, subtitle: spotlightCards[0].description, href: spotlightCards[0].href },
            { id: "02", title: spotlightCards[1].title, subtitle: spotlightCards[1].description, href: spotlightCards[1].href },
            { id: "03", title: spotlightCards[2].title, subtitle: spotlightCards[2].description, href: spotlightCards[2].href },
            { id: "04", title: processSteps[3].title, subtitle: processSteps[3].text, href: "/immersion" },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex items-center justify-between border-t border-black/10 py-10 transition hover:px-6"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-[11px] text-black/40">{item.id}</span>
                <div>
                  <h3 className="font-serif text-4xl uppercase tracking-tight transition group-hover:italic md:text-6xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/62">{item.subtitle}</p>
                </div>
              </div>
              <ArrowUpRight size={34} className="opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="group relative mt-12 overflow-hidden rounded-[30px] border border-white/12 bg-black text-white shadow-[0_45px_90px_-52px_rgba(0,0,0,0.9)]"
        >
          <img
            src={heroSlides[4]}
            alt="Contact studio"
            className="absolute inset-0 h-full w-full object-cover opacity-24 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-32"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(0,0,0,0.92)_8%,rgba(0,0,0,0.76)_46%,rgba(10,14,24,0.92)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
          <motion.div
            aria-hidden
            animate={{ x: ["-120%", "135%"], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-0 z-[2] h-[2px] w-[42%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.94)_48%,rgba(188,64,119,0.9)_78%,transparent_100%)]"
          />
          <motion.div
            aria-hidden
            animate={{ x: ["130%", "-80%"], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 7.1, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute bottom-0 z-[2] h-[2px] w-[38%] bg-[linear-gradient(90deg,transparent_0%,rgba(109,213,255,0.6)_46%,rgba(255,255,255,0.86)_72%,transparent_100%)]"
          />
          <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/18" />
          <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 rounded-tl-xl border-l border-t border-white/34" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-br-xl border-b border-r border-white/34" />

          <div className="relative z-[3] grid gap-8 px-6 py-10 md:grid-cols-[1fr_0.54fr] md:gap-10 md:px-10 md:py-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] text-white/65">
                Contact studio
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
              </p>
              <p className="mt-5 max-w-3xl font-serif text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.12] text-white">
                Disponible pour projets sur mesure, collaborations et installations.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
                Direction artistique, formats, projection et installation pour une presence nette et memorisable.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <MagneticButton>Send Email</MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/8 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
                >
                  Ouvrir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/18 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/62">TAF precis</p>
              <div className="mt-5 space-y-3">
                {[
                  { key: "01", label: "Direction", value: "Curation visuelle" },
                  { key: "02", label: "Formats", value: "Petit a grand" },
                  { key: "03", label: "Delai", value: "Rapide et net" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: idx * 0.08 }}
                    className="group/item relative overflow-hidden rounded-xl border border-white/12 bg-black/28 px-3 py-3"
                  >
                    <motion.div
                      aria-hidden
                      animate={{ x: ["-120%", "130%"] }}
                      transition={{ duration: 4.4 + idx * 0.4, repeat: Infinity, ease: "linear" }}
                      className="pointer-events-none absolute top-0 h-px w-[48%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.88)_48%,rgba(188,64,119,0.82)_78%,transparent_100%)]"
                    />
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
                      <span>{item.key}</span>
                      <span>{item.label}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-white/88">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [loadedHeroSlides, setLoadedHeroSlides] = useState(() => new Set<number>([0]));

  useEffect(() => {
    heroSlides.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedHeroSlides((prev) => {
          if (prev.has(index)) return prev;
          const next = new Set(prev);
          next.add(index);
          return next;
        });
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => {
        const next = (prev + 1) % heroSlides.length;
        return loadedHeroSlides.has(next) ? next : prev;
      });
    }, 4300);
    return () => clearInterval(timer);
  }, [loadedHeroSlides]);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-neutral-200">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[55] h-full w-full opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
        <Navbar />

        <main>
          <HomeHero heroIndex={heroIndex} setHeroIndex={setHeroIndex} />
          <MasonrySection />
          <HorizontalShowcase />
          <PhilosophySection />
          <StickyRevealSection />
          <StatsSection />
          <ArchiveSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
