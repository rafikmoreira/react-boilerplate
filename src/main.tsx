import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';

import { routes } from './routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ErrorBoundary>
      <Suspense fallback={<p>Carregando...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);
