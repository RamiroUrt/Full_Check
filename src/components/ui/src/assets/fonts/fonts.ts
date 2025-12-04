import { Bebas_Neue, Dancing_Script, Inter, Oswald } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const fonts = {
  bebasNeue,
  dancingScript,
  inter,
  oswald,
  className: `${bebasNeue.variable} ${dancingScript.variable} ${inter.variable} ${oswald.variable}`,
};
