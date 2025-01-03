import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './header.css';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className="main-header">
            <h1 className="main-header--title">
                <Link to="/">Bem-vindo(a) ao meu portfólio!</Link>
            </h1>
            <input 
                className={`main-header--theme-checkbox ${theme}`} 
                type="checkbox" 
                name="checkboxTheme" 
                onChange={(e) => {
                    e.stopPropagation();
                    toggleTheme();
                }} 
            />
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
        </header>
    );
};

export default Header;
