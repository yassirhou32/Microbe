"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface SlideItem {
  title: string;
  status: string;
  image: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    title: "Snow <br/>Leopard",
    status: "Critically Endangered",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop",
  },
  {
    title: "African <br/>Lion",
    status: "Vulnerable",
    image:
      "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Siberian <br/>Tiger",
    status: "Endangered",
    image:
      "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=1170&auto=format&fit=crop",
  },
];

interface ImageSliderProps {
  slides?: SlideItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  accentColor?: string;
  showPagination?: boolean;
}

export default function ImageSlider({
  slides = DEFAULT_SLIDES,
  autoPlay = true,
  interval = 5000,
  className = "",
  accentColor = "#ef4444",
  showPagination = true,
}: ImageSliderProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const nextImageRef = useRef<HTMLImageElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!slides.length) return;
    const preload = slides.map(
      (slide) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    );
    Promise.all(preload).then(() => setLoading(false));
  }, [slides]);

  useEffect(() => {
    if (loading) return;
    if (!currentImageRef.current || !nextImageRef.current) return;

    setIsAnimating(true);

    gsap.set(nextImageRef.current, {
      opacity: 0,
      yPercent: 10,
      scale: 1.04,
      filter: "blur(4px)",
    });
    gsap.set(currentImageRef.current, { opacity: 1, yPercent: 0, scale: 1, filter: "blur(0px)" });

    const tl = gsap.timeline();

    tl.to([titleRef.current, statusRef.current], {
      y: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0.05,
      onComplete: () => {
        setDisplayTextIndex(activeIndex);
      },
    });

    tl.to(
      currentImageRef.current,
      {
        duration: 1.1,
        opacity: 0,
        yPercent: -8,
        scale: 1.03,
        filter: "blur(3px)",
        ease: "expo.inOut",
      },
      0,
    ).to(
      nextImageRef.current,
      {
        duration: 1.2,
        opacity: 1,
        yPercent: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "expo.inOut",
      },
      0.08,
    );

    tl.fromTo(
      [titleRef.current, statusRef.current, currentImageRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.1 },
      "-=0.4",
    );
    tl.call(() => {
      setIsAnimating(false);
    });
  }, [activeIndex, loading]);

  useEffect(() => {
    if (!autoPlay || isAnimating || loading) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [activeIndex, autoPlay, isAnimating, loading, interval, slides.length]);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden bg-[#0a0a0a] font-sans text-white ${className}`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap");
      `}</style>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000 ${loading ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="relative h-px w-12 overflow-hidden bg-white/20">
          <div className="absolute inset-0 animate-[loading_1.5s_infinite] bg-white" />
        </div>
      </div>

      <main className="relative flex h-full w-full flex-col justify-end px-8 pb-20 md:px-20 lg:px-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={currentImageRef}
            src={slides[displayTextIndex]?.image}
            alt={slides[displayTextIndex]?.title?.replace(/<br\/?>/g, " ") || "Slide"}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            ref={nextImageRef}
            src={slides[activeIndex]?.image}
            alt={slides[activeIndex]?.title?.replace(/<br\/?>/g, " ") || "Slide next"}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-20 max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-white/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/50">
              Exclusive Species
            </span>
          </div>

          <h1
            ref={titleRef}
            className="mb-10 font-[Playfair_Display] text-6xl leading-[0.8] italic md:text-8xl lg:text-[10rem]"
            dangerouslySetInnerHTML={{ __html: slides[displayTextIndex]?.title || "" }}
          />

          <div
            ref={statusRef}
            className="ml-1 border-l-2 pl-4 text-[11px] font-bold uppercase tracking-[0.6em]"
            style={{ color: accentColor, borderColor: accentColor }}
          >
            {slides[displayTextIndex]?.status}
          </div>
        </div>

        {showPagination && (
          <div className="absolute bottom-20 right-8 z-20 flex flex-col gap-8 md:right-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="group flex items-center justify-end gap-4 outline-none"
                disabled={isAnimating}
              >
                <span
                  className={`text-[10px] font-bold tracking-widest transition-all duration-500 ${activeIndex === i ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                >
                  0{i + 1}
                </span>
                <div
                  className={`h-px bg-white transition-all duration-700 ${activeIndex === i ? "w-12" : "w-4 bg-white/20 group-hover:bg-white/60"}`}
                />
              </button>
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
