import React, { useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import { useParams } from 'react-router-dom';

const ProdutosLayout = ({ children }) => {
	const { tag } = useParams();
	const [filters, setFilters] = useState({});

	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<Header />
			<div className="flex flex-1">
				{/* Ajustando a largura dos filtros */}
				<aside className="w-1/6 hidden lg:block border-r border-gray-200 px-4">
					<Filters setFilters={setFilters} tag={tag} />
				</aside>

				{/* Ajustando padding horizontal e largura máxima da área de produtos */}
				<main className="flex-1 max-w-5xl px-2 sm:px-4 lg:px-6">
					{React.cloneElement(children, { filters })}
				</main>
			</div>
		</div>
	);
};

export default ProdutosLayout;
