import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CardProduto = ({ produto }) => {
  return (
    <div className="group relative p-4 border rounded-lg hover:shadow-md transition">
      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-90">
        <img
          src={produto.image || 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/reujmeib/file.png'}
          alt={produto.nome}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="pt-4">
        {produto.freteGratis && (
          <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
            Frete grátis
          </span>
        )}
        <h3 className="text-sm font-medium text-gray-900 truncate">
          <a href={`/produtos/${produto.id}`} className="hover:text-orange-500">
            {produto.nome}
          </a>
        </h3>
        <div className="flex items-center justify-center mt-2">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-400 h-5 w-5" />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            ({produto.reviews || 0})
          </span>
        </div>
        <p className="mt-4 text-base font-medium text-orange-600">
          R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-500">
          À vista no PIX <br />
          <span className="text-gray-600">
            ou até 10x de R$ {(produto.preco / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </p>
      </div>

      <button className="mt-4 w-full bg-orange-500 text-white text-sm font-medium py-2 rounded hover:bg-orange-600 transition">
        Comprar
      </button>
    </div>
  );
};

export default CardProduto;
