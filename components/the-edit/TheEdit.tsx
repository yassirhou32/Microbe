"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, MoveRight, Plus, Minus, Menu, X, Instagram, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import ImageSlider from "@/components/CrazyComponents/tsx/ImageSlider";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// --- ASSETS ---
export const IMAGES = {
    hero: "/images/M7_02137.jpg",
    model1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    arch1: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    fashion: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
    object: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop",
    natural: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    interior: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
};

// --- COMPONENTS ---

// 1. Smooth Scroll Setup (Lenis + GSAP ScrollTrigger doivent partager le même « temps » scroll)
export function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Mode stabilite: desactive le moteur de scroll custom pour eviter
    // les blocages/pertes de fluidite sur machines sensibles.
    return <>{children}</>;
};

// 2. Animated Divider Line
export function Separator({ color = "bg-stone-900" }: { color?: string }) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className={cn("h-px w-full origin-left opacity-30", color)}
        />
    );
}

// 3. Navigation
export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <motion.nav
            style={{ paddingTop: "max(env(safe-area-inset-top), 0.75rem)" }}
            className="fixed inset-x-0 top-0 z-[100] w-full border-b border-white/10 bg-stone-950/88 px-4 py-3 text-white backdrop-blur-xl md:px-6 md:py-4"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 md:flex-row md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="/" aria-label="Accueil Mr Microbe">
                        <img
                            src="/images/LOGO-MRMICROBE-3D-TRANSPARENT-removebg-preview.png"
                            alt="Logo Mr Microbe 3D"
                            className="h-10 w-auto object-contain md:h-14"
                            onError={(event) => {
                                event.currentTarget.src = "/icon.svg";
                            }}
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
                        aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                <div className="hidden flex-wrap items-center gap-4 border-t border-white/10 pt-3 md:ml-auto md:flex md:gap-7 md:border-t-0 md:pt-0">
                    <Link href="/" className="relative text-xs font-semibold tracking-[0.14em] text-white/82 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full">Accueil</Link>
                    <Link href="/collections" className="relative text-xs font-semibold tracking-[0.14em] text-white/82 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full">Collections</Link>
                    <Link href="/artiste" className="relative text-xs font-semibold tracking-[0.14em] text-white/82 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full">Artiste</Link>
                    <Link href="/immersion" className="relative text-xs font-semibold tracking-[0.14em] text-white/82 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full">Immersion</Link>
                    <Link href="/contact" className="hidden rounded-full border border-white/25 bg-white/12 px-5 py-2 text-xs font-semibold tracking-[0.14em] text-white transition hover:bg-white hover:text-stone-900 md:inline-flex">
                        Contact
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto mt-3 w-full max-w-sm md:hidden"
                    >
                        <div className="rounded-2xl border border-white/15 bg-stone-950/95 p-3.5 shadow-[0_16px_32px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                            <div className="space-y-2.5">
                                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/12">
                                    <span>Accueil</span>
                                    <ArrowRight className="h-4 w-4 text-white/80" />
                                </Link>
                                <Link href="/collections" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/12">
                                    <span>Collections</span>
                                    <ArrowRight className="h-4 w-4 text-white/80" />
                                </Link>
                                <Link href="/artiste" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/12">
                                    <span>Artiste</span>
                                    <ArrowRight className="h-4 w-4 text-white/80" />
                                </Link>
                                <Link href="/immersion" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/12">
                                    <span>Immersion</span>
                                    <ArrowRight className="h-4 w-4 text-white/80" />
                                </Link>
                            </div>
                            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/12 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900">
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

// 4. Hero: Full Bleed with Parallax
export function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <header ref={container} className="relative h-[110vh] overflow-hidden bg-stone-900">
            <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
                <img src={IMAGES.hero} alt="Cover" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/32" />
            </motion.div>

            <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-20">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-12"
                    >
                        <div className="relative">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="mb-6 block text-[10px] font-black uppercase tracking-[0.5em] text-white/70"
                            >
                               
                            </motion.span>
                            <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.75] text-white tracking-tighter">
                                Mr <br />
                                <span className="italic font-extralight opacity-80 pl-[10vw]">Microbe</span>
                            </h1>
                        </div>
                       
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-[var(--brand-primary)] z-20 origin-left"
            />
        </header>
    )
}

// 5. Editorial Narrative (Pinned Character Reveal)
export function TheManifesto() {
    const triggerRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const el = triggerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const chars = gsap.utils.toArray<HTMLElement>(".manifesto-char", el);
            gsap.set(chars, { opacity: 0.06, y: 20, color: "#d6d3d1" });

            gsap.to(chars, {
                opacity: 1,
                y: 0,
                color: "#1c1917",
                ease: "power2.out",
                stagger: {
                    each: 0.06,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: el,
                    start: "top 92%",
                    end: "bottom 20%",
                    scrub: 1,
                },
            });
        }, el);

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => ctx.revert();
    }, []);

    const text = "Mr Microbe est ne d un besoin vital: transformer l angoisse en forme, en matiere, en couleur.";

    return (
        <section ref={triggerRef} className="py-64 bg-[var(--brand-primary-soft)] px-6 text-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-5xl md:text-8xl leading-tight">
                    {text.split(" ").map((word, i) => (
                        <span key={i} className="inline-block mr-4">
                            {word.split("").map((char, j) => (
                                <span key={j} className="manifesto-char inline">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
}

// 6. Spotlight Bento Grid
export function SpotlightGrid() {
    return (
        <section className="relative overflow-hidden bg-[var(--brand-primary-soft)]/65 py-48 px-6 md:px-20 border-y border-[var(--brand-primary)]/20">
            <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-[var(--brand-primary)]/14 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[var(--brand-primary)]/16 blur-3xl" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex items-end justify-between border-b border-[var(--brand-primary-dark)]/60 pb-12">
                    <div>
                        
                        <h2 className="font-serif text-6xl mt-4">Œuvres <br />phares.</h2>
                    </div>
                    <MoveRight className="w-12 h-12 stroke-1 text-stone-300 translate-y-[-10px]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[1200px] md:h-[800px]">
                    <div className="md:col-span-2 group relative overflow-hidden bg-stone-100 rounded-sm border border-[var(--brand-primary)]/25 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                        <ParallaxImage src="/images/M7_02134.jpg" alt="Nature" fit="cover" scale={1} disableParallax />
                        <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Emotion</span>
                            <h3 className="text-3xl font-serif">Énergie organique</h3>
                        </div>
                        <div className="absolute top-5 right-5 z-20 border border-white/30 bg-black/35 px-3 py-1 text-[9px] font-black uppercase tracking-[0.26em] text-white/80 backdrop-blur-sm">01</div>
                    </div>
                    <div className="md:col-span-1 group relative overflow-hidden bg-stone-100 rounded-sm border border-[var(--brand-primary)]/25 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                        <ParallaxImage src="/images/DSC08913.jpg" alt="Object" fit="cover" scale={1} disableParallax />
                        <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Matière</span>
                            <h3 className="text-2xl font-serif">Forme vivante</h3>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden bg-stone-100 rounded-sm border border-[var(--brand-primary)]/25 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                        <ParallaxImage src="/images/M7_01625.jpg" alt="Model" fit="cover" scale={1} disableParallax />
                    </div>
                    <div className="md:col-span-1 group relative overflow-hidden bg-stone-100 rounded-sm">
                        <div className="p-12 flex flex-col justify-between h-full bg-[var(--brand-primary-dark)] text-white">
                            <p className="font-serif text-xl italic leading-relaxed opacity-80">
                                "Chaque œuvre raconte un passage de l'ombre à la lumière."
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-2 group relative overflow-hidden bg-stone-100 rounded-sm border border-[var(--brand-primary)]/25 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                        <ParallaxImage src="/images/M7_02134.jpg" alt="Interior" fit="cover" scale={1} disableParallax />
                    </div>
                </div>
            </div>
        </section>
    );
}

// 7. Horizontal Scroll Lookbook
export function Lookbook() {
    const slides = [
        {
            title: "Collection 01",
            status: "Œuvre Signature",
            image: "/images/C5456.00_00_29_18.Still001.jpg",
        },
        {
            title: "Collection 02",
            status: "Matière Vivante",
            image: "/images/DSC08913.jpg",
        },
        {
            title: "Collection 03",
            status: "Composition Organique",
            image: "/images/M7_03109.jpg",
        },
        {
            title: "Collection 04",
            status: "Ligne Interieure",
            image: "/images/M7_03110.jpg",
        },
        {
            title: "Collection 05",
            status: "Impact Visuel",
            image: "/images/M7_02134.jpg",
        },
    ];

    return (
        <section className="relative overflow-hidden">
            <ImageSlider
                slides={slides}
                autoPlay={true}
                interval={3000}
                className="h-[calc(125vh+110px)] md:h-[calc(125vh+110px)]"
                accentColor="#bc4077"
                showPagination={true}
            />
        </section>
    );
}

// 8. Editorial Accordion (The Dialogue)
export function TheDialogue() {
    const [open, setOpen] = useState(0);

    const qa = [
        { q: "Comment définir l'univers Mr Microbe ?", a: "Mr Microbe transforme l'angoisse en énergie créative. Chaque pièce cherche l'équilibre entre instinct, couleur et matière." },
        { q: "Comment choisir une œuvre pour son espace ?", a: "Nous orientons selon la lumière, le format, l'ambiance recherchée et votre budget pour trouver la pièce juste." },
        { q: "Pourquoi ces formes organiques ?", a: "Ces formes incarnent l invisible: emotions, tensions et pulsations interieures deviennent visibles sur la toile." }
    ];
    const active = qa[open] ?? qa[0];

    return (
        <section className="relative overflow-hidden bg-[var(--brand-primary-soft)] px-6 py-28">
            <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-[var(--brand-primary)]/14 blur-3xl" />
            <div className="mx-auto max-w-5xl">
                <div className="mb-12">
                    <h2 className="font-serif text-6xl italic tracking-tighter text-stone-900 md:text-7xl">En Dialogue.</h2>
                </div>

                <div className="space-y-4">
                    {qa.map((item, i) => (
                        <article
                            key={item.q}
                            className={`overflow-hidden rounded-[16px] border transition ${
                                open === i
                                    ? "border-[var(--brand-primary)]/40 bg-white shadow-[0_16px_34px_-20px_rgba(28,25,23,0.35)]"
                                    : "border-[var(--brand-primary)]/22 bg-white/72"
                            }`}
                        >
                            <button
                                onClick={() => setOpen(i)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                            >
                                <h3 className="font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
                                    {item.q}
                                </h3>
                                <span className="text-3xl text-stone-700">{open === i ? "−" : "+"}</span>
                            </button>
                            {open === i && (
                                <div className="border-t border-stone-200/70 px-6 py-6 md:px-8 md:py-7">
                                    <p className="max-w-3xl font-serif text-xl leading-relaxed text-stone-700 md:text-2xl">
                                        {item.a}
                                    </p>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 9. Editorial Footer
export function Footer() {
    const [faqActive, setFaqActive] = useState(0);
    const faqItems = [
        ["Comment choisir la bonne collection ?", "On lit le lieu puis on propose une sélection claire, ciblée."],
        ["Peut-on commander une pièce unique ?", "Oui. Brief, format, mood puis création sur mesure."],
        ["Accompagnement accrochage ?", "Oui. Placement, hauteur, respiration et composition finale."],
    ] as const;

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(120deg,#151515_0%,#1a1518_45%,#141414_100%)] px-6 py-18 text-stone-200 md:px-20 md:py-20">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(100%_70%_at_12%_12%,rgba(188,64,119,0.14),rgba(0,0,0,0))]" />
            <div className="mx-auto relative z-10 max-w-7xl">
                <div className="flex flex-col gap-y-8 border-b border-white/10 pb-10 md:flex-row md:items-start md:gap-x-10 md:gap-y-0">
                    <div className="space-y-4 md:min-w-0 md:ml-[2px]">
                        <p className="font-serif text-4xl leading-none text-white md:text-5xl">Mr Microbe</p>
                        <p className="max-w-sm text-base leading-relaxed text-stone-300">
                            Direction artistique, collections, immersion et accompagnement sur mesure.
                        </p>
                    </div>

                    <div className="space-y-4 md:min-w-0 md:ml-[2px]">
                        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-soft)]">Navigation</p>
                        <nav className="space-y-2 text-base text-stone-300">
                            <a href="/" className="block transition-colors hover:text-white">Accueil</a>
                            <a href="/collections" className="block transition-colors hover:text-white">Collections</a>
                            <a href="/artiste" className="block transition-colors hover:text-white">Artiste</a>
                            <a href="/immersion" className="block transition-colors hover:text-white">Immersion</a>
                            <a href="/contact" className="block transition-colors hover:text-white">Contact</a>
                        </nav>
                    </div>

                    <div className="space-y-4 md:min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-soft)]">FAQ</p>
                        <div className="space-y-2">
                            {faqItems.map(([question, answer], i) => (
                                <article
                                    key={question}
                                    onMouseEnter={() => setFaqActive(i)}
                                    onFocusCapture={() => setFaqActive(i)}
                                    className={cn(
                                        "rounded-xl border transition",
                                        faqActive === i
                                            ? "border-[var(--brand-primary)]/60 bg-white/10"
                                            : "border-white/10 bg-white/[0.03]"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setFaqActive(i)}
                                        className={cn(
                                            "block w-full px-3 py-2 text-left text-xs transition",
                                            faqActive === i ? "text-white" : "text-stone-300 hover:text-white"
                                        )}
                                    >
                                        {question}
                                    </button>
                                    {faqActive === i && (
                                        <p className="border-t border-white/10 px-3 pb-3 pt-2 text-xs leading-relaxed text-stone-200">
                                            {answer}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 md:min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[var(--brand-primary-soft)]">Contact</p>
                        <div className="space-y-2 text-sm text-stone-300">
                            <a href="mailto:mrmicrobe.furgerot@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white">
                                <Mail className="h-4 w-4" />
                                <span>mrmicrobe.furgerot@gmail.com</span>
                            </a>
                            <a
                                href="https://maps.google.com/?q=19+rue+de+saint+gobain+37700+Saint+pierre+des+corps"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <MapPin className="h-4 w-4" />
                                <span>Saint-Pierre-des-Corps (37)</span>
                            </a>
                            <a
                                href="https://www.instagram.com/mrmicrobe.art/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Instagram className="h-4 w-4" />
                                <span>Instagram</span>
                            </a>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex rounded-full border border-[var(--brand-primary)] bg-[var(--brand-primary)] px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[var(--brand-primary-dark)]"
                        >
                            Demander un devis
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-5 text-[10px] md:flex-row md:items-center md:justify-between">
                    <p className="font-black uppercase tracking-[0.24em] text-stone-500">© 2026 Mr Microbe. Tous droits réservés.</p>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-500 md:text-xs">
                        <a href="#" className="transition-colors hover:text-stone-300">Mentions légales</a>
                        <a href="#" className="transition-colors hover:text-stone-300">Politique de confidentialité</a>
                        <a href="#" className="transition-colors hover:text-stone-300">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Internal Helper
export function ParallaxImage({
    src,
    alt,
    speed = 0.1,
    fit = "cover",
    scale = 1.2,
    disableParallax = false,
}: {
    src: string,
    alt: string,
    speed?: number,
    fit?: "cover" | "contain",
    scale?: number,
    disableParallax?: boolean
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    return (
        <div
            ref={ref}
            className={cn(
                "group relative h-full w-full overflow-hidden",
                fit === "contain" ? "bg-transparent" : "bg-stone-900"
            )}
        >
            {fit === "contain" && (
                <>
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.08),rgba(0,0,0,0))] transition-opacity duration-700 group-hover:opacity-90"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(100%_80%_at_50%_100%,rgba(188,64,119,0.1),rgba(255,255,255,0))] transition-opacity duration-700 group-hover:opacity-90"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-20 rounded-sm ring-1 ring-white/20 transition-all duration-700 group-hover:ring-white/35"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-4 top-4 z-20 h-10 w-px bg-gradient-to-b from-white/60 to-transparent"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-4 top-4 z-20 h-px w-10 bg-gradient-to-r from-white/60 to-transparent"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute right-4 bottom-4 z-20 h-10 w-px bg-gradient-to-t from-white/50 to-transparent"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute right-4 bottom-4 z-20 h-px w-10 bg-gradient-to-l from-white/50 to-transparent"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-10 opacity-30 transition-opacity duration-700 group-hover:opacity-45 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]"
                    />
                </>
            )}
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute inset-0 z-10",
                    fit === "contain"
                        ? "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_55%,rgba(188,64,119,0.08)_100%)]"
                        : "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_45%,rgba(0,0,0,0.2)_100%)]"
                )}
            />
            <motion.img
                style={{ y: disableParallax ? "0%" : y, scale }}
                src={src}
                alt={alt}
                className={cn(
                    "h-full w-full relative z-10 transition-transform duration-700",
                    fit === "contain" ? "object-contain" : "object-cover"
                )}
            />
        </div>
    )
}
