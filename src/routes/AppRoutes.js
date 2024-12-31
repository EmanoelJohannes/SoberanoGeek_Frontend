import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Produtos';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';


// TODO: Separar aqrquivos de rotas para produtos, usuários, admin, etc
const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/:tag" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
