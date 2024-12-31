import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters';
import ApiService from '../../services/api';

export default function Products() {
  const { tag } = useParams();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await ApiService.fetchData({
        url: `/produtos/tag/${tag}`,
        method: 'get',
        params: filters, 
      });
      setProducts(response);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, tag]);

  return (
    <div className="flex bg-white">
      <aside className="w-1/4 hidden lg:block border-r border-gray-200">
        <Filters setFilters={setFilters} tag={tag} />
      </aside>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Produtos</h2>
          <p className="text-sm text-gray-500">Veja nossos produtos para a categoria "{tag}".</p>

          {loading ? (
            <div className="mt-8 text-center">Carregando...</div>
          ) : products.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative p-4 border rounded-lg hover:shadow-md transition"
                >
                  <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                    <img
                      src={`/uploads/produtos/${product.id}.jpg`}
                      alt={product.nome}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={`/produtos/${product.id}`}>
                        {product.nome}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{product.categoria}</p>
                    <p className="mt-2 text-base font-medium text-gray-900">
                      R$ {Number(product.preco).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center text-gray-500">Nenhum produto encontrado.</div>
          )}
        </div>
      </main>
    </div>
  );
}
