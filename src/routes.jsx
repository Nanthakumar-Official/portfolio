import React, { lazy } from 'react';
import Details from './pages/Details';
const HomePage = lazy(() => import('./pages/HomePage'));
const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/view',
        element: <Details />,
    }
];

export default routes;
