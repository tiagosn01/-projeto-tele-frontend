import React from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

import Teste from '../pages/Teste';

export const AppRoutes = () => (
  <RouterSwitch>
    <Route path="/" element={<Home />} />
    <Route path="/teste" element={<Teste />} />
    {/* <Route path="/dashboard" element={Dashboard} /> */}
  </RouterSwitch>
);
