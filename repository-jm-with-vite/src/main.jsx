import React from 'react'
import App from './routes/App/index.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import SobreMim from './routes/SobreMim/index.jsx';
import Habilidades from './routes/Habilidades/index.jsx';
import Projetos from './routes/Projetos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: '/sobre-mim',
    element: (
      <>
        <Header />
        <SobreMim />
      </>
    ),
  },
  {
    path: '/habilidades',
    element: (
      <>
        <Header />
        <Habilidades />
      </>
    ),
  },
  {
    path: '/projetos',
    element: (
      <>
        <Header />
        <Projetos />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
