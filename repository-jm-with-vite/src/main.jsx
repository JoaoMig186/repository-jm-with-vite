import React from 'react'
import App from './routes/App/index.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext.jsx';

import SobreMim from './routes/SobreMim/index.jsx';
import Habilidades from './routes/Habilidades/index.jsx';
import Projetos from './routes/Projetos/index.jsx';
import TextTypingAvatar from './components/TextTypingAvatar/TextTypingAvatar.jsx';
import Curriculo from './routes/Curriculo/index.jsx';
import Contato from './routes/Contato/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TextTypingAvatar/>},
      { path: "sobre-mim", element: <SobreMim /> },
      { path: "habilidades", element: <Habilidades /> },
      { path: "projetos", element: <Projetos /> },
      { path: "curriculo", element: <Curriculo /> },
      { path: "contato", element: <Contato /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
