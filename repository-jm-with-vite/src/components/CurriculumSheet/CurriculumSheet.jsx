import React, { useContext } from "react";
import './CurriculumSheet.css'
import AvatarImg from '../../assets/avatar.png'
import { ThemeContext } from '../../context/ThemeContext.jsx';

const CurriculumSheet = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <div className="curriculum-sheet">
            <div className={`curriculum-sheet--header ${theme}`}>
                <div className="curriculum-sheet--header__img">
                    <img src={AvatarImg} alt="Imagem currículo"/>
                </div>
                <div className="curriculum-sheet--header__text-box">
                    <h4 className={theme}>João Miguel de Souza Cruz Ramos dos Santos</h4>
                    
                </div>
            </div>
            <div className={`curriculum-sheet--texts ${theme}`}>
                <h2>Formação acadêmica:</h2><br/>
                <p>Sou formado no curso técnico de informática para internet (programação web) no IFRJ -
                Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro (Campus Engenheiro Paulo de Frontin).<br/>
                Atualmente faço graduação em Engenharia de Software no Instituto INFNET no Rio de Janeiro (conclusão em junho de 2026).</p>
            </div>
            <div className={`curriculum-sheet--texts ${theme}`}>
                <h2>Experiências profissionais:</h2><br/>
                <p>Atualmente sou analista desenvolvedor front-end na Empresa 'Verigo Tecnologia'. Comecei como estagiário em junho
                    de 2023 e fui efetivado como júnior em outubro de 2024.<br/>
                    Desenvolvemos soluções web como criação de sites, sistemas web e integrações com inteligência artificial. As principais
                    tecnologias utilizadas no dia a dia são: <b><a target="_blank" href="https://www.liferay.com/pt/home">Liferay</a>, React, HTML, Css utilizando
                    pré-processadores como Sass, Javascript, Jquery, Bootstrap e integrações/construções de API's RESTful (na parte do front-end).
                    </b></p><br/>
                <h3>Outras Experiências:</h3><br/>
                <ul>
                    <li>Desenvolvedor web da Contexto Brasil (2022 - );</li>
                    <li>Desenvolvedor web da Coopermike Marítimos (2022 - 2023);</li>
                    <li>Gerente de mídias em redes sociais da APAE Petrópolis (2022).</li>
                </ul>
            </div>
            <div className={`curriculum-sheet--texts ${theme}`}>
                <h2>Cursos com certificados:</h2><br/>
                <ul>
                    <li>Curso de inglês remoto – Instituto Federal do Sul-Rio grandense - IFSUL – (40 horas);</li>
                    <li>Curso básico de informática (ferramentas Office) - Graal, Paty do Alferes (40 horas);</li>
                    <li>Curso básico de Excel - Graal, Paty do Alferes (40 horas);</li>
                    <li>Curso ‘Docker do 0 à Maestria: Contêineres Desmistificados com K8s (15 horas);</li>
                    <li>’Linux TOTAL: dos primeiros passos aos comandos avançados (10.5 horas);</li>
                </ul>
            </div>
            <div className={`curriculum-sheet--texts ${theme}`}>
                <h2>Atividades acadêmicas:</h2><br/>
                <ul>
                    <li>Mediador na palestra “Gestão do conhecimento e novas tendências tecnológicas”, no programa 
                        Escola Virtual, realizado pelo Curso Técnico em Informática para Internet integrado ao Ensino Médio, 
                        no Instituto Federal do Rio de Janeiro (IFRJ);</li>
                    <li>Participação na criação do curta “O pequeno Rei”, publicado na feira latino-americana da CLASCO 
                        (Conselho Latino-americano de Ciências Sociais).</li>
                </ul>
            </div>
            <div className="curriculum-sheet--vertical-box left"></div>
            <div className={`curriculum-sheet--vertical-box right ${theme}`}></div>
        </div>
    )
}

export default CurriculumSheet;