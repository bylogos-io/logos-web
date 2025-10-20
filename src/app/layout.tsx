import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogOS",
  description: "LogOS: Plataforma SCADA modular para monitoreo industrial en tiempo real. Compatible con edge computing e IA integrada.",
  applicationName: "LogOS",
  keywords: ["SCADA", "industrial", "bylogosio", "logosia", "bylogosia", "bylogosiot", "logosio", "logosiot", "IoT", "automatización", "LogOS", "ByLogos", "IA", "Logos", "monitorización", "solución", "local-first", "software", "hardware"],
  authors: [{ name: "Logos", url: "https://www.linkedin.com/company/bylogos/" }],
  creator: "Javier Vargas",
  metadataBase: new URL("https://bylogos.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
