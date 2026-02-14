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
  title: "Mist Mechanical | HVAC, Plumbing & Gas Fitting",
  description: "Residential HVAC, plumbing, and gas fitting specialists serving Greater Vancouver. Locally owned by Red Seal certified tradesmen.",
  keywords: ["HVAC", "plumbing", "gas fitting", "Vancouver", "residential", "furnace", "heat pump", "water heater"],
  openGraph: {
    title: "Mist Mechanical | HVAC, Plumbing & Gas Fitting",
    description: "Residential HVAC, plumbing, and gas fitting specialists serving Greater Vancouver.",
    url: "https://mistmechanical.ca",
    siteName: "Mist Mechanical",
    type: "website",
  },
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
