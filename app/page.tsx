import { supabase } from '@/src/supabase'

// ------------------------------------------------------------------
// 1. DEFINICIÓN DE TIPOS (Interfaces)
// ------------------------------------------------------------------
interface Product {
  id: string
  name: string
  description: string | null
  price: number
  stock: number
  category_id: string
  // Relaciones
  categories: { name: string } | null
  product_images: { url: string }[]
}

// ------------------------------------------------------------------
// 2. TUS FUNCIONES (Lógica de Negocio)
// ------------------------------------------------------------------

/**
 * Función dedicada exclusivamente a traer todos los productos activos
 * desde Supabase. Si necesitas cambiar filtros, lo haces aquí.
 */
async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories (name),
      product_images (url)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false }) // Ordenar por el más nuevo

  if (error) {
    console.error('Error al obtener productos:', error)
    return []
  }

  return data as unknown as Product[]
}

// ------------------------------------------------------------------
// 3. TU COMPONENTE PRINCIPAL (Diseño Visual)
// ------------------------------------------------------------------
export default async function Home() {
  // A. LLAMADA A LA FUNCIÓN (Aquí ejecutamos la lógica)
  const products = await getAllProducts()

  // B. RENDERIZADO (Aquí pones tu HTML y clases a tu gusto)
  return (
    <main className="min-h-screen bg-white">
      
      {/* SECCIÓN 1: CABECERA (Header) */}
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">Bienvenido a Huertabeja</h1>
        <p className="text-gray-500">Catálogo de prueba</p>
      </header>

      {/* SECCIÓN 2: GRILLA DE PRODUCTOS */}
      <section className="container mx-auto px-4">
        
        {/* Aquí empieza la grilla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Loop: Por cada producto, dibujamos una tarjeta */}
          {products.map((product) => (
            <article key={product.id} className="border rounded-lg p-4 shadow-sm">
              
              {/* Foto */}
              <div className="bg-gray-100 h-48 mb-4 rounded overflow-hidden">
                {product.product_images[0] ? (
                  <img 
                    src={product.product_images[0].url} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">Sin foto</div>
                )}
              </div>

              {/* Textos */}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-green-600 font-bold uppercase">
                {product.categories?.name}
              </p>
              
              {/* Precio y Botón */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">
                  ${product.price.toLocaleString('es-CL')}
                </span>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Ver
                </button>
              </div>

            </article>
          ))}
          
        </div>
      </section>

    </main>
  )
}