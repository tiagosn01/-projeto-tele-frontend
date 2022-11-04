import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks';
import { Routes } from './routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
