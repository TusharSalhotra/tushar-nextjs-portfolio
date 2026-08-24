import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Salhotra | Frontend-Focused Full Stack Developer",
  description:
    "Portfolio of Tushar Salhotra — React.js, Next.js and TypeScript developer building scalable enterprise applications.",
  keywords: [
    "Tushar Salhotra",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Tushar Salhotra | React & Next.js Developer",
    description:
      "Frontend-focused developer building scalable enterprise applications across healthcare, security, IoT and risk management.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}