import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../services/api';
import CardProduto from '../../components/CardProduto';

const Produtos = ({ filters }) => {
  const { tag } = useParams();
  const [products, setProducts] = useState([]);
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
    <div className="py-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Produtos</h2>
      <p className="text-sm text-gray-500">Veja nossos produtos para a categoria "{tag}".</p>

      {loading ? (
        <div className="mt-8 text-center">Carregando...</div>
      ) : products.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <CardProduto key={product.id} produto={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-500">Nenhum produto encontrado.</div>
      )}
    </div>
  );
};

export default Produtos;
