import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  
  return (
    <>
    <Header currentTheme={theme}/> 
    <div className={`default-pages ${theme}`}>
      <Outlet />
    </div>
    </>
  );
}

export default App;