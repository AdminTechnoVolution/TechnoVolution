import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://technovolution.com"),
  title: {
    default: "Techno Volution — Innovación que evoluciona contigo",
    template: "%s | Techno Volution",
  },
  description:
    "Techno Volution es una empresa de tecnología enfocada en crear soluciones digitales, software y productos innovadores. Desarrollo móvil, plataformas web y soluciones empresariales.",
  keywords: [
    "Techno Volution",
    "desarrollo de software",
    "aplicaciones móviles",
    "plataformas web",
    "soluciones empresariales",
    "tecnología",
    "innovación digital",
  ],
  authors: [{ name: "Techno Volution" }],
  creator: "Techno Volution",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Techno Volution",
    title: "Techno Volution — Innovación que evoluciona contigo",
    description:
      "Soluciones digitales, software y productos tecnológicos de alto impacto.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Techno Volution Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Volution",
    description: "Innovación que evoluciona contigo.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#060E1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
