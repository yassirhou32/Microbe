"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, MoveUpRight } from "lucide-react";
import { SmoothScroll, Navbar, Footer } from "@/components/the-edit/TheEdit";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const artistImages = [
  "/images/M7_02162.jpg",
  "/images/M7_02137.jpg",
  "/images/M7_01627.jpg",
  "/images/M7_01636.jpg",
  "/images/M7_02104.jpg",
  "/images/M7_03109.jpg",
  "/images/M7_03110.jpg",
];

const milestones = [
  {
    year: "2004",
    title: "Origines visuelles",
    detail: "Dessins instinctifs, contrastes bruts, naissance du regard.",
  },
  {
    year: "2012",
    title: "Matiere et precision",
    detail: "Apprentissage du geste, des reliefs, des patines et de la discipline.",
  },
  {
    year: "2019",
    title: "Signature Mr Microbe",
    detail: "Mr Microbe devient une signature directe, organique et frontale.",
  },
  {
    year: "2024",
    title: "Direction vivante",
    detail: "Collections privees, parcours immersifs, direction artistique sur mesure.",
  },
];

const artistStatement =
  "Maxime Furgerot, alias Mr Microbe, transforme ses tensions interieures en signes visuels forts. Son travail relie geste urbain, matiere organique et impact emotionnel immediat.";

function SplitTextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll(".split-char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 120, rotateZ: 8, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        rotateZ: 0,
        scale: 1,
        duration: 1.1,
        stagger: 0.03,
        ease: "power4.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 92%" },
      },
    );
  }, [delay]);

  return (
    <div ref={ref} className="inline-block overflow-hidden" style={{ perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <span key={`${text}-${i}`} className="split-char inline-block opacity-0">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

function DisorderedGridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex w-full justify-between px-4 opacity-[0.045] mix-blend-difference">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-full w-px bg-black md:bg-white" />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:100%_10vh] opacity-50 md:bg-[linear-gradient(to_bottom,white_1px,transparent_1px)]" />
    </div>
  );
}

function PinkAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.16, 0.24, 0.16] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(188,64,119,0.09)_0%,rgba(188,64,119,0.04)_45%,rgba(188,64,119,0.08)_100%)]"
      />
      <motion.div
        aria-hidden
        animate={{ x: ["-8%", "10%", "-8%"], y: ["-6%", "8%", "-6%"], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-24 h-[40vh] w-[44vw] rounded-full bg-[radial-gradient(circle,rgba(188,64,119,0.45)_0%,rgba(188,64,119,0)_72%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: ["10%", "-10%", "10%"], y: ["6%", "-8%", "6%"], opacity: [0.36, 0.64, 0.36] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-28 top-[30vh] h-[44vh] w-[42vw] rounded-full bg-[radial-gradient(circle,rgba(188,64,119,0.4)_0%,rgba(188,64,119,0)_72%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.32, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(112deg,rgba(188,64,119,0.0)_0%,rgba(188,64,119,0.2)_45%,rgba(188,64,119,0.0)_100%)]"
      />
    </div>
  );
}

function ParallaxBlock({
  children,
  className,
  speed = 1,
  scrollYProgress,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 260]);
  const ySmooth = useSpring(y, { stiffness: 70, damping: 20 });
  return (
    <motion.div style={{ y: ySmooth }} className={className}>
      {children}
    </motion.div>
  );
}

function ArtisteHero({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-float", {
        y: -90,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".hero-line", {
        width: 0,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.35,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen overflow-hidden bg-[linear-gradient(180deg,#efe8eb_0%,#eadfe5_48%,#e9e6e3_100%)] px-4 pt-30 text-black md:px-12"
    >
      <motion.div
        aria-hidden
        animate={{ opacity: [0.18, 0.34, 0.18], scale: [1, 1.07, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-8%] top-[14%] z-[1] h-[40vh] w-[36vw] rounded-full bg-[radial-gradient(circle,rgba(188,64,119,0.34)_0%,rgba(188,64,119,0)_72%)] blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center gap-8 opacity-65 md:gap-20">
        <ParallaxBlock scrollYProgress={scrollYProgress} speed={-0.35} className="mt-[-18vh]">
          <img src={artistImages[4]} alt="" className="aspect-[3/4] w-44 object-cover grayscale blur-[1px] md:w-72" />
        </ParallaxBlock>
        <ParallaxBlock scrollYProgress={scrollYProgress} speed={0.5} className="mt-[36vh]">
          <img src={artistImages[5]} alt="" className="aspect-square w-52 object-cover grayscale blur-[2px] md:w-96" />
        </ParallaxBlock>
        <ParallaxBlock scrollYProgress={scrollYProgress} speed={-0.2} className="mt-[6vh] hidden md:block">
          <img src={artistImages[6]} alt="" className="aspect-video w-64 object-cover grayscale" />
        </ParallaxBlock>
      </div>

      <div className="hero-float absolute left-4 top-[32%] z-10 md:left-[10%]">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] opacity-55 md:text-sm">
          <ArrowDownRight size={16} />
          L artiste
        </div>
        <h1 className="font-serif text-[17vw] leading-[0.78] tracking-tight md:text-[11vw]">
          <SplitTextReveal text="Maxime" delay={0.2} />
          <br />
          <SplitTextReveal text="Furgerot" delay={0.35} />
        </h1>
      </div>

      <div className="hero-float absolute right-4 top-[62%] z-20 text-right md:right-[13%]">
        <h2 className="text-[9vw] font-black uppercase leading-[0.82] tracking-tight md:text-[5.2vw]">
          <SplitTextReveal text="Mr Microbe" delay={0.72} />
        </h2>
        <div className="hero-line mt-4 h-px w-full origin-right bg-black" />
        <p className="ml-auto mt-7 max-w-sm text-xs uppercase leading-relaxed tracking-[0.16em] opacity-62 md:text-sm">
          Un langage personnel ne de la rue, de la matiere et d une energie emotionnelle assumee.
        </p>
      </div>
    </section>
  );
}

function ScatteredGallery({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <section className="relative z-20 mx-auto max-w-[1800px] bg-[linear-gradient(180deg,#ebdfe5_0%,#e9e4e4_60%,#e9e8e3_100%)] px-4 py-28 text-black">
      <motion.div
        aria-hidden
        animate={{ x: ["-6%", "8%", "-6%"], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-[22%] h-[34vh] w-[30vw] rounded-full bg-[radial-gradient(circle,rgba(188,64,119,0.3)_0%,rgba(188,64,119,0)_72%)] blur-3xl"
      />
      <div className="mb-28 flex flex-col items-end border-b border-black pb-8 md:flex-row">
        <h2 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-9xl">
          Vision
          <br />
          organique.
        </h2>
        <p className="mt-8 max-w-md text-sm font-semibold uppercase tracking-[0.18em] opacity-55 md:ml-auto md:mt-0">
          {artistStatement}
        </p>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-y-28 md:gap-x-8">
        <div className="group relative z-10 col-span-12 cursor-pointer md:col-span-5 md:col-start-2">
          <ParallaxBlock scrollYProgress={scrollYProgress} speed={0.4}>
            <div className="mb-4 flex items-center justify-between border-b border-black/20 pb-2 text-xs font-bold uppercase tracking-[0.16em]">
             
              <MoveUpRight size={14} className="transition-transform group-hover:rotate-45" />
            </div>
            <div className="overflow-hidden">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={artistImages[0]} alt="Matiere" className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
            </div>
          </ParallaxBlock>
        </div>

        <div className="group relative z-20 col-span-12 cursor-pointer md:col-span-4 md:col-start-8 md:mt-6">
          <ParallaxBlock scrollYProgress={scrollYProgress} speed={-0.3}>
            <div className="rotate-3 overflow-hidden bg-white p-4 shadow-2xl transition-all duration-500 group-hover:rotate-0">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={artistImages[1]} alt="Atelier" className="aspect-square w-full object-cover" />
              
            </div>
          </ParallaxBlock>
        </div>

        <div className="pointer-events-none z-30 col-span-12 py-24 text-center text-[#e9e8e3] mix-blend-difference md:col-span-6 md:col-start-4">
          <ParallaxBlock scrollYProgress={scrollYProgress} speed={0.6}>
            <h3 className="font-serif text-5xl uppercase leading-[0.88] tracking-tight md:text-8xl">
              Geste
              <br />
              Emotion
            </h3>
          </ParallaxBlock>
        </div>

        <div className="group relative z-10 col-span-12 cursor-pointer md:col-span-6 md:col-start-1 md:-mt-28">
          <ParallaxBlock scrollYProgress={scrollYProgress} speed={0.2}>
            <div className="overflow-hidden">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={artistImages[2]} alt="Signature" className="aspect-video w-full object-cover saturate-0 transition-all duration-700 group-hover:saturate-100" />
            </div>
            
          </ParallaxBlock>
        </div>

        <div className="group relative z-0 col-span-12 cursor-pointer md:col-span-4 md:col-start-8">
          <ParallaxBlock scrollYProgress={scrollYProgress} speed={0.8}>
            <div className="overflow-hidden border border-black p-2">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={artistImages[3]} alt="Portrait" className="aspect-[3/4] w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
            </div>
          </ParallaxBlock>
        </div>
      </div>
    </section>
  );
}

function SignatureMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 flex items-center overflow-hidden border-y-2 border-white/20 bg-black py-8 md:py-9">
      <motion.div
        aria-hidden
        animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.12, 0.26, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-[20%] top-[18%] h-24 bg-[radial-gradient(circle,rgba(188,64,119,0.35)_0%,rgba(188,64,119,0)_72%)] blur-2xl"
      />
      <div className="marquee-inner flex whitespace-nowrap text-white">
        {[...Array(3)].map((_, i) => (
          <h2 key={i} className="px-8 font-serif text-[6.8vw] uppercase tracking-tight opacity-85 md:text-[6vw]">
            Matiere <span className="text-transparent [webkit-text-stroke:1px_white]">Emotion</span> Signature
          </h2>
        ))}
      </div>
    </section>
  );
}

function Manifeste() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".word");
      if (!words) return;
      gsap.fromTo(
        words,
        { opacity: 0.12, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 min-h-[78vh] bg-[linear-gradient(180deg,#ebe4e8_0%,#e7e5e3_100%)] px-4 text-black md:px-24">
      <motion.div
        aria-hidden
        animate={{ x: ["8%", "-8%", "8%"], opacity: [0.11, 0.24, 0.11] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-10%] top-[24%] h-[36vh] w-[32vw] rounded-full bg-[radial-gradient(circle,rgba(188,64,119,0.32)_0%,rgba(188,64,119,0)_72%)] blur-3xl"
      />
      <div className="flex min-h-[78vh] items-center justify-center">
        <h3 ref={textRef} className="max-w-6xl font-serif text-4xl uppercase leading-[1.06] tracking-tight md:text-7xl">
          {"Je peins pour rendre visible ce qu on garde a l interieur".split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className="word mb-3 mr-4 inline-block md:mr-7">
              {word}
            </span>
          ))}
        </h3>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative z-20 overflow-hidden border-t border-white/15 bg-black px-4 py-16 text-white md:px-10 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-[rgba(188,64,119,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[rgba(148,163,184,0.10)] blur-3xl" />
      <div className="mx-auto max-w-[1500px]">
        <div className="relative">
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/62">Parcours artiste</p>
          <h3 className="mt-4 max-w-5xl font-serif text-5xl leading-[0.9] md:text-7xl">
            Une trajectoire qui devient signature.
          </h3>
          <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.16em] text-white/55 md:text-[13px]">
            Quatre etapes fondatrices entre instinct, matiere et direction artistique.
          </p>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-2 md:gap-5">
          {milestones.map((item, i) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -8, scale: 1.008 }}
              className={`group relative overflow-hidden border border-white/20 bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_48%,rgba(255,255,255,0.01)_100%)] p-6 backdrop-blur-sm md:p-7 ${
                i % 2 === 1 ? "md:translate-y-7" : ""
              }`}
            >
              <motion.div
                aria-hidden
                animate={{ x: ["-120%", "130%"] }}
                transition={{ duration: 3.8 + i * 0.3, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute top-0 z-[2] h-[2px] w-[48%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.86)_48%,rgba(188,64,119,0.58)_80%,transparent_100%)]"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_15%_12%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_88%_88%,rgba(255,255,255,0.08),transparent_42%)] opacity-70" />
              <p className="relative z-[3] text-[10px] font-black uppercase tracking-[0.28em] text-white/60">{item.year}</p>
              <span className="pointer-events-none absolute right-4 top-3 z-[3] font-serif text-4xl leading-none text-white/25 md:text-[2.5rem]">
                0{i + 1}
              </span>
              <h4 className="relative z-[3] mt-3 font-serif text-4xl leading-[0.92] md:text-[2.55rem]">{item.title}</h4>
              <p className="relative z-[3] mt-3 max-w-xl text-sm leading-relaxed text-white/82">{item.detail}</p>
              <div className="relative z-[3] mt-5 h-px w-full bg-white/20">
                <div className="h-full w-0 bg-white/85 transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ArtistePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <SmoothScroll>
      <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-[#e9e8e3] text-black">
        <DisorderedGridLines />
        <PinkAtmosphere />
        <Navbar />
        <main className="relative z-10 w-full overflow-hidden">
          <ArtisteHero scrollYProgress={scrollYProgress} />
          <ScatteredGallery scrollYProgress={scrollYProgress} />
          <SignatureMarquee />
          <Manifeste />
          <Timeline />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
