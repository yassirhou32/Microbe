/** Coins L pour encadrer un bloc (mur de galerie, encart). */
export function GalleryCornerBrackets({ className = "" }: { className?: string }) {
  const arm = "h-4 w-4 border-stone-800 md:h-5 md:w-5";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <span
        className={`absolute left-3 top-3 border-l-2 border-t-2 md:left-6 md:top-6 ${arm}`}
      />
      <span
        className={`absolute right-3 top-3 border-r-2 border-t-2 md:right-6 md:top-6 ${arm}`}
      />
      <span
        className={`absolute bottom-3 left-3 border-b-2 border-l-2 md:bottom-6 md:left-6 ${arm}`}
      />
      <span
        className={`absolute bottom-3 right-3 border-b-2 border-r-2 md:bottom-6 md:right-6 ${arm}`}
      />
    </div>
  );
}

/** Ligne decoratif type cimaise entre le titre de section et la grille. */
export function GalleryCimaise() {
  return (
    <div
      className="mb-12 flex items-center justify-center gap-3 md:mb-14 opacity-[0.55]"
      aria-hidden
    >
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-stone-500 md:max-w-[140px]" />
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full border border-stone-600 bg-stone-100 shadow-sm" />
        <div className="h-px w-16 bg-stone-500 md:w-24" />
        <div className="h-1.5 w-1.5 rounded-full border border-stone-600 bg-stone-100 shadow-sm" />
      </div>
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-stone-500 md:max-w-[140px]" />
    </div>
  );
}
