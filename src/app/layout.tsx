import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somos Um — Dança Teatral • Igreja Elohim",
  description:
    "Somos Um: dança e teatro a serviço do Reino. Eis que é chegada a hora. Festividade de Dezembro 2026 em Penedo / AL.",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Somos Um — Dança Teatral • Igreja Elohim",
    description: "Eis que é chegada a hora. Dança e teatro a serviço do Reino.",
    images: ["/assets/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FCF9F4] text-[#181A29] selection:bg-[#49000E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
