/**
 * Donnees catalogue physiques Mr Microbe.
 * Les images Collections: lecture de public/images/ au rendu serveur si des fichiers
 * image existent; sinon fallback sur collectionImagePaths (1.jpg … 5.jpg).
 */

export type CatalogPiece = {
  id: string;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  support: string;
  encadrement?: string;
  tirage: string;
  image: string;
  notes?: string;
  imageClass?: string;
  imagePosition?: string;
};

export type CatalogCollection = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  pieces: CatalogPiece[];
};

export type CatalogPieceDraft = Omit<CatalogPiece, "image"> & {
  image?: string;
};

export type CatalogCollectionDraft = Omit<CatalogCollection, "pieces"> & {
  pieces: CatalogPieceDraft[];
};

/** Cinq visuels dans public/images/ — reutilises en rotation (repetition ok). */
export const collectionImagePaths = [
  "/icon.svg",
] as const;

function withRotatingCollectionImages(
  draft: CatalogCollectionDraft[],
  imagePaths: readonly string[],
): CatalogCollection[] {
  const paths =
    imagePaths.length > 0 ? imagePaths : [...collectionImagePaths];
  let i = 0;
  return draft.map((c) => ({
    ...c,
    pieces: c.pieces.map((p) => ({
      ...p,
      image: p.image ?? paths[i++ % paths.length]!,
    })),
  }));
}

/** Construit le catalogue avec une liste d URLs /images/... (decouverte locale ou fallback). */
export function buildCatalogWithImages(
  imagePaths: readonly string[],
): CatalogCollection[] {
  return withRotatingCollectionImages(catalogCollectionsDraft, imagePaths);
}

const catalogCollectionsDraft: CatalogCollectionDraft[] = [
  {
    id: "les-toiles",
    title: "Les toiles",
    tagline: "Peinture — rue, pop et matiere",
    description:
      "Serie de toiles sur chassis: acrylique, aerosol, enduits et collages. Univers signe Microbe, entre graffiti, personnages fleurs et narration contemporaine.",
    pieces: [
      {
        id: "toile-renaissance",
        title: "Renaissance",
        year: 2019,
        technique: "Acrylique",
        dimensions: "92 × 65 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-apocalypse",
        title: "L'apocalypse",
        year: 2019,
        technique: "Acrylique, aerosol",
        dimensions: "92 × 65 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-famille",
        title: "La famille",
        year: 2017,
        technique: "Acrylique, aerosol",
        dimensions: "158 × 97 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Sans",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-new-friends",
        title: "New friends",
        year: 2020,
        technique: "Acrylique, enduit",
        dimensions: "158 × 97 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-rechauffement",
        title: "L'effet du rechauffement",
        year: 2021,
        technique: "Acrylique, aerosol",
        dimensions: "100 × 73 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-astronautes",
        title: "Les astronautes",
        year: 2021,
        technique: "Acrylique",
        dimensions: "72 × 56 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-actualite",
        title: "L'actualite",
        year: 2021,
        technique: "Acrylique, collage, corde",
        dimensions: "92 × 73 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "toile-monologue",
        title: "Le monologue",
        year: 2021,
        technique: "Acrylique, aerosol, feutre",
        dimensions: "50 × 122 cm",
        support: "Peinture sur toile sur chassis",
        encadrement: "Caisse americaine",
        tirage: "Oeuvre unique",
        image: "/images/M7_03109.jpg",
        imagePosition: "center center",
        imageClass: "aspect-[4/5]",
      },
    ],
  },
  {
    id: "les-petits",
    title: "Les petits",
    tagline: "Petit Microbe — sculpture resine",
    description:
      "Sculptures fleur pop sur socle acier. Multiples finitions et couleurs: chaque piece affirme le regard signature du Microbe. Socles et hauteurs variables selon le modele.",
    pieces: [
      {
        id: "petit-microbe",
        title: "Petit Microbe",
        year: 2020,
        technique: "Peinture sur resine",
        dimensions: "28 × 22 × 10 cm · 24 × 22 × 10 cm",
        support: "Socle acier",
        tirage: "Tirage limite — 30 pieces",
        notes:
          "Palettes et finitions personnalisables. La seule limite sera vos yeux: tout est possible, tout est realisable.",
        imageClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "les-moyens",
    title: "Les moyens",
    tagline: "Resine — formats moyens, socle acier",
    description:
      "Series de sculptures fleur en resine, finitions acrylique et aerosol. Chaque variation porte un trait de caractere graphique propre, entre mat uni, points, camo et tags.",
    pieces: [
      {
        id: "moyen-original",
        title: "L'original",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "55 × 70 × 30 cm",
        support: "Socle acier",
        tirage: "30 pieces",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "moyen-pointilleux",
        title: "Le pointilleux",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "55 × 70 × 30 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "moyen-camouflage",
        title: "Camouflage",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "55 × 70 × 30 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "moyen-naturel",
        title: "Le naturel",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "55 × 60 × 30 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "moyen-hors-la-loi",
        title: "Le hors la loi",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "55 × 60 × 30 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
      {
        id: "moyen-new-start",
        title: "New Start",
        year: 2023,
        technique: "Acrylique, aerosol, Posca sur resine",
        dimensions: "55 × 70 × 30 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "monocycle",
    title: "Monocycle",
    tagline: "Sculpture — equilibre et mouvement",
    description:
      "Forme fleur posee sur monocycle, socle acier: une piece scenographique entre art urbain et cirque contemporain.",
    pieces: [
      {
        id: "acrobate",
        title: "L'acrobate",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "60 × 140 × 40 cm",
        support: "Socle acier",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[3/4]",
      },
    ],
  },
  {
    id: "grands",
    title: "Les grands formats",
    tagline: "Impact mural — resine brillante",
    description:
      "Grandes fleurs resine haute brillance sur socle acier. Presence sculpturale forte pour espaces volume ou vitrine.",
    pieces: [
      {
        id: "costaud",
        title: "Le costaud",
        year: 2022,
        technique: "Acrylique, aerosol sur resine",
        dimensions: "100 × 110 × 45 cm",
        support: "Socle acier",
        tirage: "5 pieces",
        notes:
          "Piece iconique grande echelle. Variations et finitions sur demande selon la ligne en cours.",
        imageClass: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "luminaire",
    title: "Luminaire",
    tagline: "Lampe — bois, peinture, industriel",
    description:
      "Applique / lampe murale: planche bois peinte, graphisme Microbe et bras style industriel avec ampoule Edison.",
    pieces: [
      {
        id: "idee",
        title: "L'idee",
        year: 2021,
        technique: "Acrylique, aerosol sur bois",
        dimensions: "24 × 96 × 18 cm",
        support: "Bois — fixation murale",
        tirage: "Oeuvre unique",
        imageClass: "aspect-[3/4]",
      },
    ],
  },
  {
    id: "bague",
    title: "Bijou d'art",
    tagline: "La force de la vie — argent et diamant",
    description:
      "Piece de haute joaillerie conceptuelle: corps de bague evoquant une colonne du Parthenon, Atlas portant le poids du microbe.",
    pieces: [
      {
        id: "force-vie",
        title: "La force de la vie",
        year: 2023,
        technique: "Argent et diamant noir",
        dimensions: "22 × 20 mm",
        support: "Joaillerie — taille sur mesure",
        tirage: "Oeuvre unique",
        notes:
          "Corps de la bague imitant un pilier du Parthenon; a l extremite, Atlas porte le poids du microbe sur ses epaules.",
        imageClass: "aspect-square max-w-md mx-auto",
      },
    ],
  },
];

export const catalogCollections = buildCatalogWithImages(collectionImagePaths);

/** Si un fichier manque dans public/images/, le composant peut basculer sur cette image. */
export const catalogFallbackImage =
  "/icon.svg";
