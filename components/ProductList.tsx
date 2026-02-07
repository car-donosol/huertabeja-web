// Definimos de nuevo la interfaz (o podrías tenerla en un archivo types.ts compartido)
interface Product {
  id: string;
  name: string;
  price: number;
  categories: { name: string } | null;
  product_images: { url: string }[];
}

// Esta función recibe la lista de productos y la dibuja
export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Catálogo Disponible</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <article key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow bg-white">
            
            {/* Foto */}
            <div className="bg-gray-100 h-64 mb-4 rounded overflow-hidden relative">
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
            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
            <p className="text-sm text-green-600 font-bold uppercase mt-1">
              {product.categories?.name}
            </p>
            
            {/* Precio */}
            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <span className="text-2xl font-bold text-gray-800">
                ${product.price.toLocaleString('es-CL')}
              </span>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors">
                Ver Detalle
              </button>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}