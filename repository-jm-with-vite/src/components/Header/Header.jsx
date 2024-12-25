import React from "react"
import './header.css'

const Header = () => {

    return(
        <header className="main-header">
        <h1 className="main-header--title"><a href={`/`}>Bem-vindo(a) ao meu portfólio!</a></h1>
        <div className="main-header--menu">
            <div className="main-header--menu__item">
                <a href={`/sobre-mim`}>Sobre mim</a>
                <span className="line">
                </span>
            </div>
            <div className="main-header--menu__item">
                <a href={`/habilidades`}>Habilidades</a>
                <span className="line">
                </span>
            </div>
            <div className="main-header--menu__item">
                <a href={`/projetos`}>Projetos</a>
                <span className="line">
                </span>
            </div>
            <div className="main-header--menu__item">
                <a href={`/curriculo`}>Currículo</a>
                <span className="line">
                </span>
            </div>
            <div className="main-header--menu__item">
                <a href={`/contato`}>Contato</a>
                <span className="line">
                </span>
            </div>
        </div>
        </header>
    )
} 
export default Header