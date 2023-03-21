import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// IMPORT PAGES
import App from './App';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import Order from './routes/Order';


import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "menu",
    element: <Menu />
  },
  {
    path: "reservations",
    element: <Reservations />
  },
  {
    path: "order",
    element: <Order />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
