import React from "react";
import './SkillsBoard.css'

const SkillsBoard = ({}) => {
    return(
            <div className="skill-board">
                <div class="skill-board--header">
                    <h2>Habilidades</h2>
                    <p>Aqui você pode observar as minhas skills com programação! A tabela segue um fluxo das tecnologias que eu melhor domino (cores mais claras) até as que eu menos domino (cores mais escuras) e também a cor logo abaixo representando as tecnologias que eu pretendo aprender!</p>
                </div>
                <div className="skill-board--list">
                    <div className="skill-board--list__item" id="learn-wanted">
                        <h3>🧠 Quero Aprender: </h3>
                        <p>SQL - Java - PHP - Flutter - CSS-Grid - Vue</p>
                    </div>
                    <div className="skill-board--list__item" id="little-knowledge">
                        <h3>⭐ Tenho pouco domínio: </h3>
                        <p> Pandas - React-Native - C# - .NET-MVC - Entity/Identity-Framework</p>
                    </div>
                    <div className="skill-board--list__item" id="regular-knowledge">
                        <h3>⭐⭐ Tenho domínio razoável: </h3>
                        <p>Javascript - Bootstrap - Jquery - Python - React</p>
                    </div>
                    <div className="skill-board--list__item" id="good-knowledge">
                        <h3>⭐⭐⭐ Tenho um bom domínio: </h3>
                        <p>Html5 - CSS - Responsividade - Flexbox</p>
                    </div>
                </div>
            </div>
    )
}
export default SkillsBoard;