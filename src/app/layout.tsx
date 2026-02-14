import type { Metadata } from "next";
import { Antonio, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Mist Mechanical | Industrial Systems",
  description: "Industrial mechanical systems dashboard - Climate Control, Fluid Dynamics, and Cryo Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
