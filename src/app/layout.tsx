
import { pagesMetadata } from "@/constants/metadata"; 
import "../global/globals.css";
import { fonts  } from "../assets/fonts/fonts";
import ChatWidgetWrapper from "@/components/ui/ChatBox/ChatWidget";

export const metadata = pagesMetadata.home;
export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {



  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />
        <meta name="theme-color" content="#fe7630" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      </head>
      <body 
      className={fonts.className}>
        {children}
        <ChatWidgetWrapper/>
      </body>
    </html>
  );
}
