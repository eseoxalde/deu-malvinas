/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "/geojson/:path*",
      },
    ];
  },
  images: {
    domains: ["www.bienestar.mil.ar"], // Permitir imágenes de este dominio
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bienestar.mil.ar",
        pathname: "/mapa_interactivo/fotos/**", // Permitir imágenes en esta ruta
      },
    ],
  },
};

export default withNextIntl(nextConfig);
