import React from "react"
import './header.css'

const Header = () => {

    return(
        <header>
        <h1 className="titulo-principal">Bem-vindo(a) ao meu portfólio!</h1>
        <div className="menu">
            <div className="menut--item">
                <a href={`/sobre-mim`}>Sobre mim</a>
                <span className="linha">
                </span>
            </div>
            <div className="menut--item">
                <a href={`/habilidades`}>Habilidades</a>
                <span className="linha">
                </span>
            </div>
            <div className="menut--item">
                <a href={`/projetos`}>Projetos</a>
                <span className="linha">
                </span>
            </div>
            <div className="menut--item">
                <a href={`/curriculo`}>Currículo</a>
                <span className="linha">
                </span>
            </div>
            <div className="menut--item">
                <a href={`/contato`}>Contato</a>
                <span className="linha">
                </span>
            </div>
        </div>
        </header>
    )
} 
export default Header