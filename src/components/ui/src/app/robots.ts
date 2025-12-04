
export default function robots() {
  const domain = "https://full-check.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",          // evita indexar endpoints
          "/admin",         // si algún día agregás panel
          "/private",       // rutas privadas
        ],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
