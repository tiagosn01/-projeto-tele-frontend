import { Routes as RouterSwitch, Route, redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../pages/Home';

import { Customer } from '../pages/Customer';
import { LayoutWrapper } from '../components/LayoutWrapper';
import { Sales } from '../pages/Sales';
import { useAuth } from '../hooks/AuthContext';

export const AppRoutes = () => {
  return (
    <LayoutWrapper>
      <RouterSwitch>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/sales" element={<Sales />} />
        {/* <Route path="/dashboard" element={Dashboard} /> */}
        <Route element={<h1>Página não encontrada</h1>} />
      </RouterSwitch>
    </LayoutWrapper>
  );
};
