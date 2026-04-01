"use client";

import { useEffect, useState } from "react";
import type { CatalogPiece } from "@/lib/catalog-data";
import { catalogFallbackImage } from "@/lib/catalog-data";
import { GalleryCornerBrackets } from "@/components/collections/GalleryFrameDecor";

type Props = {
  piece: CatalogPiece;
  indexLabel?: string;
};

export function CatalogPieceCard({ piece, indexLabel }: Props) {
  const [src, setSrc] = useState(piece.image);

  useEffect(() => {
    setSrc(piece.image);
  }, [piece.image]);

  return (
    <article className="group relative h-full border border-stone-900/15 bg-[#ebe6dc] p-3 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_20px_40px_-18px_rgba(28,25,23,0.2)] transition-[box-shadow,transform] duration-500 md:p-5 md:shadow-[0_1px_2px_rgba(28,25,23,0.05),0_28px_50px_-20px_rgba(28,25,23,0.24)] md:hover:shadow-[0_1px_3px_rgba(28,25,23,0.06),0_32px_56px_-16px_rgba(28,25,23,0.3)]">
      {/* Filet fin type baguette moderne */}
      <div
        className="pointer-events-none absolute inset-[6px] border border-white/50 md:inset-2"
        aria-hidden
      />

      <GalleryCornerBrackets className="z-20 [&_span]:border-stone-900/70 [&_span]:md:h-[14px] [&_span]:md:w-[14px]" />

      <div className="relative z-10">
        {/* Passe-partout — une seule couche lisible */}
        <div className="relative border border-stone-900/10 bg-[#ddd5c9] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_0_0_1px_rgba(28,25,23,0.06)] md:p-3.5">
          <div
            className={`relative overflow-hidden rounded-[1px] bg-stone-950 ring-1 ring-stone-900/40 ${piece.imageClass ?? "aspect-[4/3]"}`}
          >
            <img
              src={src}
              alt={`${piece.title}, ${piece.year} — Mr Microbe`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              onError={() => setSrc(catalogFallbackImage)}
              style={{ objectPosition: piece.imagePosition ?? "center" }}
              className="h-full w-full object-cover grayscale-[0.15] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
            />

            {/* Numero d index tres visible (pastille musee, lisible sur toute image) */}
            {indexLabel != null && indexLabel.length > 0 && (
              <div className="pointer-events-none absolute right-2 top-2 z-10 md:right-3 md:top-3">
                <div
                  className="relative border-2 border-stone-900 bg-[#f7f5f0] px-2.5 py-1 shadow-[0_4px_16px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.4)_inset] md:px-3 md:py-1.5"
                  aria-hidden
                >
                  <span className="block font-serif text-2xl font-semibold italic leading-none tabular-nums tracking-tight text-stone-900 md:text-[1.85rem]">
                    {indexLabel}
                  </span>
                  <span
                    className="absolute -bottom-px left-1 right-1 h-0.5 bg-[#be185d]"
                    aria-hidden
                  />
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" />
          </div>

          {/* Plaquette inventaire */}
          <div className="mt-3 flex justify-center px-0.5 md:mt-3.5">
            <div className="flex max-w-full items-center justify-center gap-2 border border-stone-700/35 bg-gradient-to-b from-[#cfc8bb] to-[#c4bcb0] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_2px_6px_rgba(28,25,23,0.12)] md:gap-2.5 md:px-5">
              <span className="font-serif text-xs font-semibold tabular-nums text-stone-900 md:text-sm">
                {piece.year}
              </span>
              {indexLabel != null && indexLabel.length > 0 && (
                <>
                  <span className="text-stone-700/90" aria-hidden>
                    ·
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">
                    ref. {indexLabel}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bloc fiche */}
        <div className="relative mt-7 space-y-5 border-t border-stone-400/35 pt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#9d1746]">
                Fiche catalogue
              </p>
              <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-stone-900 md:text-[1.85rem] md:leading-snug">
                {piece.title}
              </h3>
            </div>
          </div>

          <dl className="grid gap-3.5 text-sm text-stone-600 sm:grid-cols-2">
            <div className="sm:col-span-2 rounded-sm border border-stone-300/70 bg-white/60 p-3.5">
              <dt className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-500">
                Technique
              </dt>
              <dd className="mt-1 leading-snug text-stone-800">{piece.technique}</dd>
            </div>
            <div className="rounded-sm border border-stone-300/70 bg-white/50 p-3.5">
              <dt className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-500">
                Dimensions
              </dt>
              <dd className="mt-1 font-semibold tabular-nums text-stone-900">
                {piece.dimensions}
              </dd>
            </div>
            <div className="rounded-sm border border-stone-300/70 bg-white/50 p-3.5">
              <dt className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-500">
                Tirage
              </dt>
              <dd className="mt-1 font-medium text-stone-900">{piece.tirage}</dd>
            </div>
            <div className="sm:col-span-2 rounded-sm border border-stone-300/70 bg-white/50 p-3.5">
              <dt className="text-[10px] font-black uppercase tracking-[0.32em] text-stone-500">
                Support
              </dt>
              <dd className="mt-1 leading-snug">{piece.support}</dd>
            </div>
            {piece.encadrement != null && piece.encadrement.length > 0 && (
              <div className="sm:col-span-2 rounded-sm border-2 border-[#9d1746]/25 bg-[#fdf2f8]/50 p-3.5">
                <dt className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9d1746]">
                  Encadrement
                </dt>
                <dd className="mt-1 leading-snug text-stone-800">{piece.encadrement}</dd>
              </div>
            )}
          </dl>

          {piece.notes != null && piece.notes.length > 0 && (
            <p className="border border-stone-300/60 bg-white/70 py-3 pl-4 pr-3 text-sm italic leading-relaxed text-stone-600 shadow-[inset_4px_0_0_0_rgba(190,24,93,0.5)]">
              {piece.notes}
            </p>
          )}

          <p className="border-2 border-stone-900/85 bg-stone-900/[0.04] px-4 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-stone-900 transition-all duration-300 group-hover:bg-stone-900/[0.07]">
            Prix sur demande
          </p>
        </div>
      </div>
    </article>
  );
}
