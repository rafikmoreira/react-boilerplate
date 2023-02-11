import React from 'react';

import { RouteObject } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    loader: undefined,
    children: [],
  },
];
