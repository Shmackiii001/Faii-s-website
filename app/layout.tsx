import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith Kepchemboi | Law, life & everything in between",
  description: "A personal portfolio and journal about law, life, and the lessons along the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
