import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Importante para navegar sin recargar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huertabeja - Plantas y Naturaleza",
  description: "Venta de plantas de interior y exterior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        
        {/* --- NAVBAR (Navegación Superior) --- */}
        <nav className="bg-green-800 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo / Nombre */}
              <Link href="/" className="text-2xl font-bold tracking-wider hover:text-green-200">
                HUERTABEJA
              </Link>
              
              {/* Enlaces del Menú */}
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="hover:text-green-300 transition-colors">Inicio</Link>
                <Link href="/catalogo" className="hover:text-green-300 transition-colors">Catálogo</Link>
                <Link href="/nosotros" className="hover:text-green-300 transition-colors">Nosotros</Link>
                <Link href="/contacto" className="hover:text-green-300 transition-colors">Contacto</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* --- BODY (Aquí se carga tu page.tsx) --- */}
        <div className="flex-grow">
          {children}
        </div>

        {/* --- FOOTER (Pie de página) --- */}
        <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-2">© 2026 Huertabeja. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-500">
              Cultivando vida en tu hogar.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}