import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
  ReactNode,
} from 'react';

import api from '../services/api';
import { MySwal } from '../utils/SweetAlert';

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  company_id: string;
}

interface AuthData {
  token: string;
  user: UserData;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: UserData;
  signIn(credentials: SignInCredencials): void;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@MjTele:token');
    const user = localStorage.getItem('@MjTele:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    try {
      setLoading(true);
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@MjTele:token', token);
      localStorage.setItem('@MjTele:user', JSON.stringify(user));

      setData({ token, user });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      MySwal({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou senha incorretos!',
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MjTele:token');
    localStorage.removeItem('@MjTele:user');

    setData({} as AuthData);
  }, []);

  const userContext = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
      loading,
    }),
    [data.user, signIn, signOut, loading],
  );

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
