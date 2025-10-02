import type { Metadata } from "next";
import {Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Scope - Site completo de consulta de jogos",
  description: "Mais de 10 mil jogos separados e organizados para consultar com toda praticidade!",
  keywords: ["games", "jogos"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
