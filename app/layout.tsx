import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// IMPORTAMOS TUS NUEVOS COMPONENTES
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huertabeja",
  description: "Venta de plantas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />        {/* 1. Tu Función Navbar */}
        
        <main className="flex-grow bg-gray-50">
           {children}     {/* 2. Aquí se insertará el Body de cada página */}
        </main>
        
        <Footer />        {/* 3. Tu Función Footer */}
      </body>
    </html>
  );
}