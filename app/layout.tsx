import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Mehta — Senior React Native Engineer",
  description:
    "Portfolio of Shubham Mehta, a Senior React Native Engineer building high-performance iOS and Android applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}