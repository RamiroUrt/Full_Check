
const domain = "https://full-check.vercel.app";
const ogImage = "/og-image.png"; 
const twitterImage = "/ogx-image.png";

export const pagesMetadata = {
  home: {
    metadataBase: new URL(domain),
    title: {
      default: "Full Check | Servicio Automotor",
      template: "%s | Full Check"
    },
    description:
      "Taller mecánico especializado en atención, diagnóstico, escaneo automotriz y calidad.",
    keywords: [
      "full check",
      "taller mecánico",
      "servicio automotor",
      "diagnóstico vehicular",
      "scanner automotriz",
      "mecánica"
    ],
    alternates: {
      canonical: "https://full-check.vercel.app",
    },
    icons: {
      icon: "/favicon.ico"
    },
    openGraph: {
      title: "Full Check | Servicio Automotor",
      description:
        "Chequeo completo, escaneo, diagnóstico y servicio mecánico profesional.",
      url: domain,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Full Check"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Full Check | Servicio Automotor",
      description:
        "Servicio profesional de diagnóstico y escaneo para tu vehículo.",
      images: [twitterImage]
    }
  },

  used: {
    title: "Full Check | Usados",
    description:
      "Explorá nuestra selección de vehículos usados en excelente estado.",
    openGraph: {
      title: "Full Check | Usados",
      description: "Selección de autos usados en óptimas condiciones.",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: "Full Check | Usados",
      description: "Vehículos usados en excelente estado.",
      images: [twitterImage]
    },
        alternates: {
          canonical: `${domain}/used`,
    },
  },

  shop: {
    title: "Full Check | AutoPartes y Tienda",
    description: "Compra autopartes de calidad para tu vehículo.",
    openGraph: {
      title: "Full Check | AutoPartes y Tienda",
      description: "Autopartes confiables y de calidad.",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: "Full Check | AutoPartes",
      description: "Compra autopartes de calidad.",
      images: [twitterImage]
    },
        alternates: {
      canonical: `${domain}/shop`,
    },
  },

  branches: {
    title: "Full Check | Nuestras Sucursales",
    description:
      "Visitanos en nuestros locales para más información sobre servicios y productos.",
    openGraph: {
      title: "Full Check | Sucursales",
      description:
        "Encontrá nuestros locales y puntos de atención.",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: "Full Check | Sucursales",
      description: "Visitanos en nuestros puntos de atención.",
      images: [twitterImage]
    },
        alternates: {
      canonical: `${domain}/branches`,
    },
  }
};
