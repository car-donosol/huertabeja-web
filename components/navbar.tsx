import Link from "next/link";

export default function navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-green-200">
            HUERTABEJA
          </Link>
          
          {/* Menú */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-green-300 transition-colors">Inicio</Link>
            <Link href="#" className="hover:text-green-300 transition-colors">Catálogo</Link>
            <Link href="#" className="hover:text-green-300 transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}