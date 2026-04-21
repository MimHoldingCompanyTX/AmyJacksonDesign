import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair"
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Amy Jackson Design | Interior Design",
  description: "Amy Jackson Design - Transforming spaces with elegance and true connection to your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased font-[var(--font-lato)]">
        {children}
      </body>
    </html>
  );
}