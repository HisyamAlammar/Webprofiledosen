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
  title: "Dr. Budi Santoso | Personal Academic Hub",
  description: "Pusat pembelajaran digital dan materi kuliah Manajemen oleh Dr. Budi Santoso, S.E., M.M.",
  openGraph: {
    title: "Dr. Budi Santoso | Personal Academic Hub",
    description: "Pusat pembelajaran digital dan materi kuliah Manajemen oleh Dr. Budi Santoso, S.E., M.M.",
  }
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
