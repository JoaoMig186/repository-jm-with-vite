import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header.jsx';

function App() {
  return (
    <>
    <Header /> 
    <div className='default-pages'>
      <Outlet />
    </div>
    </>
  );
}

export default App;