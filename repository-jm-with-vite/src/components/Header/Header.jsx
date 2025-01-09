import React, { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const location = useLocation();
    const hasTittle = location.pathname === "/" ? "tittle" : "";
    const checkboxMenuMobile = useRef();

    useEffect(() => {
        checkboxMenuMobile.current.checked = false
    },[location.pathname])

    return (
        <nav className={`main-header ${hasTittle}`}>
            {
                location.pathname === "/" && 
                <h1 className="main-header--title">
                    <Link to="/">Bem-vindo(a) ao meu portfólio!</Link>
                </h1>
            }
            <input 
                className={`main-header--theme-checkbox ${theme}`} 
                type="checkbox" 
                name="checkboxTheme" 
                checked={theme === "dark"}
                onChange={(e) => {
                    e.stopPropagation();
                    toggleTheme();
                }} 
            />
            <input type="checkbox" id="main-header--menu__responsive-button" ref={checkboxMenuMobile} /> 
            <label for="main-header--menu__responsive-button">&#9776;</label>
            <ul className="main-header--menu">
                <li className="main-header--menu__item">
                    <Link to="/sobre-mim">Sobre mim</Link>
                    <span className="line"></span>
                </li>
                <li className="main-header--menu__item">
                    <Link to="/habilidades">Habilidades</Link>
                    <span className="line"></span>
                </li>
                <li className="main-header--menu__item">
                    <Link to="/projetos">Projetos</Link>
                    <span className="line"></span>
                </li>
                <li className="main-header--menu__item">
                    <Link to="/curriculo">Currículo</Link>
                    <span className="line"></span>
                </li>
                <li className="main-header--menu__item">
                    <Link to="/contato">Contato</Link>
                    <span className="line"></span>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
