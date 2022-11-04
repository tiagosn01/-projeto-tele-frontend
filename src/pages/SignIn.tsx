import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAuth } from '../hooks/AuthContext';
import { MySwal } from '../utils/SweetAlert';

type LoginData = {
  email: string;
  password: string;
};

export function SignIn() {
  const { signIn } = useAuth();

  const [loginData, setLoginData] = useState({} as LoginData);

  function handleSubmit(e: SyntheticEvent) {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Login ou senha incorretos!',
      // footer: '<a href="">Why do I have this issue?</a>',
    });

    // signIn({ email: loginData.email, password: loginData.password });
  }

  return (
    <main className="flex flex-col w-full h-full justify-center items-center  bg-slate-900">
      <h1 className="text-cyan-200 font-bold text-6xl mb-24">MJ Tele</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:w-2/6 w-full items-center bg-slate-200 rounded-2xl h-auto mb-24 py-10"
      >
        <h2 className="text-3xl font-bold pb-10">Login</h2>
        <label htmlFor="email" className="flex 2xl:px-20 flex-col w-full px-10">
          Email:
          <input
            className="p-2 rounded"
            type="email"
            name="email"
            id="email"
            onChange={e => {
              setLoginData(prevState => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            value={loginData.email}
            placeholder="Insira seu email"
          />
        </label>

        <label
          htmlFor="password"
          className="flex 2xl:px-20 flex-col w-full px-10 mt-4 mb-16"
        >
          Senha
          <input
            className="p-2 rounded"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={e => {
              setLoginData(prevState => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
            value={loginData.password}
          />
        </label>
        <button
          onClick={handleSubmit}
          type="button"
          className="border w-2/3 p-3 rounded bg-slate-500 text-slate-100"
        >
          Entrar
        </button>
        <Link to="/signup">Cadastre-se</Link>
      </form>
    </main>
  );
}
