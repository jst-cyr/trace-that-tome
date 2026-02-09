import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

// Kid-friendly heading font. Other options: Nunito, Quicksand, Baloo_2, Luckiest_Guy, Balsamiq_Sans
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trace That Tome – Never lose your book again",
  description:
    "A bookmark with a tracking tag so you can find your book when you misplace it.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}
