import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className="main-header">
            <h1 className="main-header--title">
                <Link to="/">Bem-vindo(a) ao meu portfólio!</Link>
            </h1>
            <div className="main-header--menu">
                <div className="main-header--menu__item">
                    <Link to="/sobre-mim">Sobre mim</Link>
                    <span className="line"></span>
                </div>
                <div className="main-header--menu__item">
                    <Link to="/habilidades">Habilidades</Link>
                    <span className="line"></span>
                </div>
                <div className="main-header--menu__item">
                    <Link to="/projetos">Projetos</Link>
                    <span className="line"></span>
                </div>
                <div className="main-header--menu__item">
                    <Link to="/curriculo">Currículo</Link>
                    <span className="line"></span>
                </div>
                <div className="main-header--menu__item">
                    <Link to="/contato">Contato</Link>
                    <span className="line"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
