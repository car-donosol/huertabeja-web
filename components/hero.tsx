import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#fcf8f8] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* TEXTO */}
        <div className="space-y-6 z-10 text-center md:text-left">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            GRAN VENTA
          </h2>
          <p className="text-gray-500 text-lg uppercase tracking-wider">
            DESCUENTOS HASTA UN <span className="text-[#2e8b57] font-bold">20%</span> PARA TODAS LA VIEJAS
          </p>
          <div className="pt-4">
            <Link 
              href="#catalogo" 
              className="bg-[#80b435] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#2e8b57] transition-all uppercase shadow-lg inline-block"
            >
              VER PRODUCTOS
            </Link>
          </div>
        </div>

        {/* IMAGEN HERO (Planta flotante) */}
        <div className="relative h-[400px] w-full flex justify-center items-center">
           {/* Círculo decorativo de fondo */}
           <div className="absolute w-[350px] h-[350px] bg-white rounded-full shadow-xl"></div>
           {/* Imagen de planta (Placeholder) */}
           <img 
             src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80" 
             alt="Aloe Vera" 
             className="relative z-10 h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
           />
        </div>

      </div>
    </section>
  );
}