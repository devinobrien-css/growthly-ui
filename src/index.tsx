import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalContextProvider } from './util/context/GlobalContext';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
