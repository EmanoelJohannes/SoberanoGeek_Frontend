import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import ProdutosLayout from '../layouts/ProdutosLayout';
import Produtos from '../pages/Produtos';


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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
