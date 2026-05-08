import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-heading",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dr. Budi Santoso",
    default: "Dr. Budi Santoso | Personal Academic Hub",
  },
  description: "Pusat pembelajaran digital dan materi kuliah Manajemen oleh Dr. Budi Santoso, S.E., M.M. Eksplorasi wawasan manajemen keuangan dan strategi bisnis modern.",
  keywords: ["Manajemen Strategis", "Valuasi Keuangan", "Dosen Manajemen", "Dr. Budi Santoso", "Kuliah Manajemen", "Bisnis", "Perilaku Konsumen"],
  authors: [{ name: "Dr. Budi Santoso" }],
  creator: "Dr. Budi Santoso",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webprofiledosen.vercel.app",
    title: "Dr. Budi Santoso | Personal Academic Hub",
    description: "Eksplorasi wawasan manajemen keuangan dan strategi bisnis modern bersama Dr. Budi Santoso.",
    siteName: "Dr. Budi Santoso Academic Hub",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dr. Budi Santoso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Budi Santoso | Personal Academic Hub",
    description: "Eksplorasi wawasan manajemen keuangan dan strategi bisnis modern.",
    images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
