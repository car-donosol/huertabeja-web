import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-green-900 h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Imagen de Fondo (Con superposición oscura para que se lea el texto) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80" 
          alt="Fondo Huertabeja" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          Da vida a tus espacios
        </h1>
        <p className="text-xl md:text-2xl text-green-100 font-light max-w-2xl mx-auto">
          Encuentra las plantas perfectas para llenar de naturaleza tu hogar y oficina.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#catalogo" 
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Ver Catálogo
          </Link>
          <Link 
            href="/contacto" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-900 transition-all"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}