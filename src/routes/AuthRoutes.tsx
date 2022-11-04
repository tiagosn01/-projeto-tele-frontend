import React from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import Teste from '../pages/Teste';

export const AuthRoutes = () => (
  <RouterSwitch>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/dashboard" element={Dashboard} /> */}
  </RouterSwitch>
);
