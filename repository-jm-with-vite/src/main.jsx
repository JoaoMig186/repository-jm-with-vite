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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/sobre-mim',
    element: <SobreMim />
  },
  {
    path: '/habilidades',
    element: <Habilidades />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
