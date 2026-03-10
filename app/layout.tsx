import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Andrés Mendieta | Software Engineer",
  description: "Software Engineer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        
        {children}
      </body>
    </html>
  );
}
