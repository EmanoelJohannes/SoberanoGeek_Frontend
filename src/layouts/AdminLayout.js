import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="md:hidden text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
