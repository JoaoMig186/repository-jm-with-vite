import React, { useContext } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from '../../components/Header/Header.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const location = useLocation();
  const hasTittle = location.pathname === "/" ? "tittle" : "";

  return (
    <>
    <Header currentTheme={theme}/> 
    <div className={`default-pages ${theme} ${hasTittle}`}>
      <Outlet />
    </div>
    </>
  );
}

export default App;