import { useAuth } from '../../hooks/AuthContext';

export function Home() {
  const { signOut } = useAuth();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h5>Tesdte</h5>
      <button type="button" onClick={signOut}>
        Sair
      </button>
    </>
  );
}
