import React, { useRef, useContext } from "react";
import './ProjectSlide.css'
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from '../../context/ThemeContext.jsx';

const ProjectSlide = ({direction, image, tittle, text, linkRepo, linkView, techsIcons}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const projetoRef = useRef();

    function hideShow(){
        projetoRef.current.children[0].classList.toggle(`closed-img-div-${direction}`)
        projetoRef.current.children[1].classList.toggle(`closed-cover-div-${direction}`)
    }

    return(
        <div className="project-slide" ref={projetoRef} onClick={()=> hideShow()}>
            <div className={`project-slide--image-div ${direction} ${theme}`}>
                <img src={image} alt="imagem do projeto" />
            </div>
            <div className={`project-slide--cover-div ${direction}`}>
                <span>{tittle}</span>
                <span style={{fontSize: "19px"}}>(clique para revelar)</span>
            </div>
            <div className={`project-slide--texts ${direction} ${theme}`}>
                <a href={linkView} target="_blank">
                    <h3>{tittle}</h3>
                    <p>{text}</p><br/>
                    <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <div style={{display: "flex"}}>
                            <span>Conhecimentos utilizados: </span>
                            <div style={{display: "flex", marginLeft:"8px", alignItems: "center"}}>
                                {
                                    techsIcons.map((item) => item)
                                }
                            </div>
                        </div>
                        {linkRepo && 
                        <div>
                            <a className={`linkRepo ${theme}`} target="_blank" href={linkRepo}>Clique aqui para a accessar o repositório.<FaGithub /></a>
                        </div>}
                    </div>
                </a>
            </div>
        </div>
    )
} 
export default ProjectSlide;