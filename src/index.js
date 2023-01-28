import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-range-slider-input/dist/style.css';

import './cssfile.css';

import Home from './Home';
import Help from './Help';
import About from './About';
import Rin2D from "./Rin2D";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "help",
    element: <Help />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "rin2d",
    element: <Rin2D />,
  }
]);


const root = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
  root
);
