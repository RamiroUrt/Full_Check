import { pagesMetadata } from "@/constants/metadata"; 
import "../global/globals.css";
import { fonts  } from "../assets/fonts/fonts";

export const metadata = pagesMetadata.home;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body 
      className={fonts.className}>
        {children}
      </body>
    </html>
  );
}
