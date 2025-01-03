import React from 'react';
import { FaBox, FaTags, FaClipboardList, FaUsers } from 'react-icons/fa';

const stats = [
  { id: 1, name: 'Total de Produtos', stat: '150', icon: FaBox, color: 'bg-blue-500' },
  { id: 2, name: 'Total de Marcas', stat: '25', icon: FaTags, color: 'bg-green-500' },
  { id: 3, name: 'Total de Categorias', stat: '12', icon: FaClipboardList, color: 'bg-orange-500' },
  { id: 4, name: 'Usuários Administradores', stat: '3', icon: FaUsers, color: 'bg-purple-500' },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-500">Visão geral do sistema do Soberano Geek</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="relative bg-white overflow-hidden shadow rounded-lg p-5"
          >
            <div className="absolute rounded-md p-3 text-white" style={{ backgroundColor: stat.color }}>
              <stat.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="ml-16">
              <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.stat}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de exemplo */}
      <div className="mt-10 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900">Estatísticas de Vendas</h2>
        <p className="mt-2 text-sm text-gray-500">Desempenho das vendas nos últimos 7 dias</p>
        <div className="mt-6">
          {/* Substitua por um gráfico real */}
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Gráfico de vendas (em construção)
          </div>
        </div>
      </div>
    </div>
  );
}
