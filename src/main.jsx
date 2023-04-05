import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './componenets/Shop';
import Home from './componenets/Layout/Home';
import Orders from './componenets/Orders';
import Inventory from './componenets/Inventory';
import Login from './componenets/Login';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: 'Shop',
        element: <Shop></Shop>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
