import React from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
  const { user } = useAuth();

  // if (loading) {
  //   return (
  //     <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       Carregando...
  //     </div>
  //   );
  // }

  // if (user.FirstLogin) {
  //   return <AppCongis />;
  // }

  return user?.email ? <AppRoutes /> : <AuthRoutes />;
  // return <AppRoutes />;
};
