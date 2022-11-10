import React from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Home } from '../pages/Home';

import { Customer } from '../pages/Customer';
import { LayoutWrapper } from '../components/LayoutWrapper';

export const AppRoutes = () => (
  <LayoutWrapper>
    <RouterSwitch>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customer />} />
      {/* <Route path="/dashboard" element={Dashboard} /> */}
      <Route element={<h1>Página não encontrada</h1>} />
    </RouterSwitch>
  </LayoutWrapper>
);
