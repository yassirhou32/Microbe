/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  /**
   * getLocalCollectionImagePaths() lit public/images avec fs. Le trace NFT de Next
   * inclut alors toutes les images dans le bundle de la route → dépassement 300 Mo sur Vercel.
   * On exclut ce dossier du traçage (les fichiers restent servis depuis /public en statique).
   */
  outputFileTracingExcludes: {
    // Toutes les routes : ne jamais empaqueter les assets lourds de public/images dans les fonctions.
    '**': ['public/images/**/*'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
