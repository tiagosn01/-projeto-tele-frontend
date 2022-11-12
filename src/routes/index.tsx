import React, { useEffect } from 'react';
import { Routes as RouterSwitch, Route, redirect } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
  const { user } = useAuth();

  function redirectLogin() {
    console.log('teste');
    return redirect('/login');
  }

  useEffect(() => {
    if (!user) {
      redirectLogin();
    }
  }, [user]);

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

  return user ? <AppRoutes /> : <AuthRoutes />;
  // return <AppRoutes />;
};
