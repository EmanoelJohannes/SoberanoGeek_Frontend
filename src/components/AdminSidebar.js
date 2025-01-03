import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaStore, FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
  { name: 'Gerenciar Estoque', href: '/admin/estoque', icon: FaBox },
  { name: 'Lojas', href: '/admin/lojas', icon: FaStore },
  { name: 'Usuários', href: '/admin/usuarios', icon: FaUsers },
  { name: 'Vendas', href: '/admin/vendas', icon: FaDollarSign },
  { name: 'Relatórios', href: '/admin/relatorios', icon: FaChartLine },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminSidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="w-64 flex flex-col border-r border-gray-200">
        <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
          {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          /> */}
          <h1 className='text-white'>Logo</h1>
        </div>
        <div className="flex-grow pt-5 overflow-y-auto bg-white">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )
                }
              >
                <item.icon
                  className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
