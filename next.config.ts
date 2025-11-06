import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      experimental: {
      viewTransition: true,
    },
  images: {
    domains: [
      'localhost', '127.0.0.1','3001', '3002',
      "cdn.pixabay.com",
      "vw.grupodietrich.com",
      "nipponcar.com.ar",
      "centralpeugeot.dexst.com.ar",
      "encrypted-tbn0.gstatic.com",
      "i0.wp.com",
      "production.autoforce.com",
      "di-uploads-pod11.dealerinspire.com",
      "cronos.fiat.com.ar",
      "www.webmotors.com.br",
      "www.plandeahorronissanautoferro.com",
      "centraljeep.divit.com.ar",
      "island297rental.com",
      "pngimg.com",
      "www.carone.com.ar",
      "www.bmw.in",
      "www.carone.com.ar",
      "www.toyotawarnes.com.ar",
      "www.moserline.com.ar"
    ],
  },
};

export default nextConfig;
