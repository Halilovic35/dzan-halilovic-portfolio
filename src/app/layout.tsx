import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dzan Halilovic | Creative Developer",
  description: "Portfolio website showcasing web development and creative coding projects",
  openGraph: {
    title: "Dzan Halilovic | Creative Developer",
    description: "Portfolio website showcasing web development and creative coding projects",
    url: "https://dzan-halilovic-portfolio.vercel.app/",
    siteName: "Dzan Halilovic Portfolio",
    images: [
      {
        url: "/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Dzan Halilovic - Creative Developer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzan Halilovic | Creative Developer",
    description: "Portfolio website showcasing web development and creative coding projects",
    images: ["/images/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
