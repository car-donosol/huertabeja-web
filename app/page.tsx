import { supabase } from '@/src/supabase'
// Importamos tus componentes modulares
import Hero from '@/components/hero'
import ProductList from '@/components/ProductList'

// --- Lógica de Datos ---
async function getAllProducts() {
  const { data } = await supabase
    .from('products')
    .select(`*, categories (name), product_images (url)`)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  return data || []
}

// --- Tu Función HOME (Página Principal) ---
export default async function Home() {
  // 1. Obtenemos los datos (Data Fetching)
  const products = await getAllProducts()

  // 2. Renderizamos la estructura de la Home
  return (
    <>
      {/* Sección 1: Portada impactante */}
      <Hero />


      {/* Sección 3: El Catálogo (con un ID para que el botón del Hero baje hasta aquí) */}
      <div id="catalogo" className="bg-gray-50 min-h-screen">
        <ProductList products={products} />
      </div>
    </>
  )
}