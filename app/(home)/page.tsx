import { supabase } from '@/src/supabase'
import Hero from '@/components/hero'
import ServiceInfo from '@/components/ServiceInfo'
import ProductList from '@/components/ProductList'

// --- Data Fetching ---
async function getLatestProducts() {
  const { data } = await supabase
    .from('products')
    .select(`*, categories (name), product_images (url)`)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(8) // Limitamos a 8 productos como el diseño (2 filas de 4)

  return data || []
}

export default async function Home() {
  const products = await getLatestProducts()

  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <ServiceInfo />
      <ProductList products={products} />
      
      {/* Sección extra de Newsletter (típica en estos diseños) */}
      <section className="py-20 bg-[#f8f8f8] text-center mt-10">
        <h2 className="text-gray-500 font-bold mb-4">¡No olvides seguirnos en nuestras redes sociales!</h2>
        <p className="text-gray-500 mb-6">Instagram: Huertabeja</p>
        <div className="max-w-md mx-auto justify-center">
          <a 
            href="https://www.instagram.com/huertabeja" target="_blank" rel="noopener noreferrer"  
            className="bg-[#80b435] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#2e8b57] transition-all uppercase shadow-lg inline-block">Instagram
            </a>
        </div>
      </section>
    </main>
  )
}