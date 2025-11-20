import { pagesMetadata } from "@/constants/metadata"; 
import "../global/globals.css";
import { fonts  } from "../assets/fonts/fonts";
import ChatWidget from "@/components/ui/ChatBox/ChatBox";

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
        <ChatWidget />
      </body>
    </html>
  );
}
