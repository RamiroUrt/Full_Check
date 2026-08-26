import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "vw.grupodietrich.com" },
      { protocol: "https", hostname: "nipponcar.com.ar" },
      { protocol: "https", hostname: "centralpeugeot.dexst.com.ar" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "production.autoforce.com" },
      { protocol: "https", hostname: "di-uploads-pod11.dealerinspire.com" },
      { protocol: "https", hostname: "cronos.fiat.com.ar" },
      { protocol: "https", hostname: "www.webmotors.com.br" },
      { protocol: "https", hostname: "www.plandeahorronissanautoferro.com" },
      { protocol: "https", hostname: "centraljeep.divit.com.ar" },
      { protocol: "https", hostname: "island297rental.com" },
      { protocol: "https", hostname: "pngimg.com" },
      { protocol: "https", hostname: "www.carone.com.ar" },
      { protocol: "https", hostname: "www.bmw.in" },
      { protocol: "https", hostname: "www.toyotawarnes.com.ar" },
      { protocol: "https", hostname: "www.moserline.com.ar" },
    ],
  },
};

export default nextConfig;
