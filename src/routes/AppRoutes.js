import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProdutosLayout from '../layouts/ProdutosLayout';
import Produtos from '../pages/Produtos';
import AdicionarProduto from '../pages/Admin/AdicionarProduto';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Estoque from '../pages/Admin/Estoque';


const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produtos/:tag"
            element={
              <ProdutosLayout>
                <Produtos />
              </ProdutosLayout>
            }
          />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="adicionar-produto" element={<AdicionarProduto />} />
                  <Route path="estoque" element={<Estoque />} />
                </Routes>
              </AdminLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
