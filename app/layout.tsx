import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-cormorant"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Amy Jackson Design | Modern. Timeless. Refined.",
  description: "Amy Jackson Design creates thoughtfully designed spaces for the way you live. Modern. Timeless. Refined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-[var(--font-montserrat)]">
        {children}
      </body>
    </html>
  );
}