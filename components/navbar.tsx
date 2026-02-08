"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      
      {/* BARRA SUPERIOR VERDE */}
      <div className="w-full bg-[#2e8b57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center h-8 items-center text-sm text-white font-medium">
          <span>¡Envío gratis en pedidos sobre $40.000!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* 1. LOGO (Izquierda) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-gray-800">
              HUERTABEJA<span className="text-[#2e8b57]">.</span>
            </Link>
          </div>
          
          {/* 2. MENÚ DESKTOP (Centro - Oculto en móviles) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#2e8b57] font-medium text-sm tracking-wide transition-colors">INICIO</Link>
            <Link href="/catalogo" className="text-gray-500 hover:text-[#2e8b57] font-medium text-sm tracking-wide transition-colors">PRODUCTOS</Link>
            <Link href="/ubicacion" className="text-gray-500 hover:text-[#2e8b57] font-medium text-sm tracking-wide transition-colors">UBICACIÓN</Link>
            <Link href="/nosotros" className="text-gray-500 hover:text-[#2e8b57] font-medium text-sm tracking-wide transition-colors">NOSOTROS</Link>
          </div>

          {/* 3. ZONA DERECHA (Íconos + Hamburguesa) */}
          <div className="flex items-center space-x-4">
             
             {/* --- ÍCONOS (Usuario y Carrito) --- */}
             {/* Quitamos 'hidden' para que se vean siempre */}
             <div className="flex items-center space-x-4 text-gray-600">
                <button className="hover:text-[#2e8b57]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                   </svg>
                </button>
                <button className="hover:text-[#2e8b57] relative">
                  <span className="absolute -top-2 -right-2 bg-[#2e8b57] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 5c.07.286.07.585 0 .87l-1.263 5a2.25 2.25 0 0 1-2.192 1.802H4.836a2.25 2.25 0 0 1-2.192-1.802l-1.263-5a2.25 2.25 0 0 1 0-.87l1.263-5a2.25 2.25 0 0 1 2.192-1.802h11.236a2.25 2.25 0 0 1 2.192 1.802Z" />
                   </svg>
                </button>
             </div>

             {/* --- BOTÓN HAMBURGUESA --- */}
             {/* Visible solo en móviles (md:hidden) */}
             <div className="md:hidden flex items-center">
               <button 
                 onClick={() => setIsOpen(!isOpen)} 
                 className="text-gray-500 hover:text-[#2e8b57] focus:outline-none ml-2" // ml-2 para separarlo un poco de los íconos
               >
                 {isOpen ? (
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 ) : (
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                 )}
               </button>
             </div>

          </div>

        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#2e8b57] hover:bg-green-50"
            >
              INICIO
            </Link>
            <Link 
              href="/catalogo" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#2e8b57] hover:bg-green-50"
            >
              PRODUCTOS
            </Link>
            <Link 
              href="/ubicacion" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#2e8b57] hover:bg-green-50"
            >
              UBICACIÓN
            </Link>
            <Link 
              href="/nosotros" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#2e8b57] hover:bg-green-50"
            >
              NOSOTROS
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}