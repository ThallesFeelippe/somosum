import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somos Um — Festividade de Dezembro",
  description:
    "Uma experiência de fé, comunhão e renovação espiritual. Junte-se a nós na Festividade de Dezembro.",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Somos Um — Festividade de Dezembro",
    description: "Festividade de Dezembro: Uma só voz, um só coração, um só propósito.",
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
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FCF9F4] text-[#181A29] selection:bg-[#49000E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
