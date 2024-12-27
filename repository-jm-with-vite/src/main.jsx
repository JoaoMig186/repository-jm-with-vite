import React from 'react'
import App from './routes/App/index.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SobreMim from './routes/SobreMim/index.jsx';
import Habilidades from './routes/Habilidades/index.jsx';
import Projetos from './routes/Projetos/index.jsx';
import TextTypingAvatar from './components/TextTypingAvatar/TextTypingAvatar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TextTypingAvatar/>},
      { path: "sobre-mim", element: <SobreMim /> },
      { path: "habilidades", element: <Habilidades /> },
      { path: "projetos", element: <Projetos /> },
    ],
  },
]);

import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
