// types.ts (o defínelo arriba)
interface Product {
  id: string;
  name: string;
  price: number;
  categories: { name: string } | null;
  product_images: { url: string }[];
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section id="catalogo" className="max-w-7xl mx-auto px-4 py-16">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-gray-900 mb-6">Nuestros Productos</h2>
        
        {/* Pestañas de categorías (Visuales por ahora) */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-400">
          <button className="text-[#2e8b57] border-b-2 border-[#2e8b57] pb-1">Últimas Ofertas</button>
          <button className="hover:text-[#2e8b57] transition-colors">Plantas de interior</button>
          <button className="hover:text-[#2e8b57] transition-colors">Plantas de Exterior</button>
        </div>
      </div>
      
      {/* GRID DE PRODUCTOS (4 Columnas como el diseño) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            
            {/* Imagen con efecto hover */}
            <div className="relative h-80 bg-[#f9f9f9] overflow-hidden rounded-md mb-4">
              {product.product_images[0] ? (
                <img 
                  src={product.product_images[0].url} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-300 bg-gray-100">No Image</div>
              )}
              
              {/* Botón Añadir al carrito (Aparece en hover) */}
              <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <button className="w-full bg-[#2e8b57] text-white py-3 font-bold text-sm uppercase tracking-wide hover:bg-black transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Info del producto */}
            <div className="text-center">
              <h3 className="text-gray-800 font-medium text-lg truncate px-2">{product.name}</h3>
              <p className="text-gray-500 font-bold mt-1">
                 {product.price > 0 ? `$${product.price.toLocaleString('es-CL')}` : '—'}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}