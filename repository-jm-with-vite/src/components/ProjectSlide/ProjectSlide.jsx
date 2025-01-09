import React, { useRef, useContext, useState, useEffect } from "react";
import './ProjectSlide.css'
import { FaGithub } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { ThemeContext } from '../../context/ThemeContext.jsx';

const ProjectSlide = ({direction, image, tittle, text, linkRepo, linkView, techsIcons}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(true);
    const [cardShow, setCardShow] = useState(true);
    const [widthScreen, setWidthScreen] = useState(window.screen.width);
    const arrowBackColor = theme === "light" ? "#000" : "#fff";

    function hideShow() {
        setIsOpen((prev) => !prev);
    }

    function hideShowMobile() {
        setCardShow((prev) => !prev);
    }

    useEffect(() => {
        const handleResize = () => {
          setWidthScreen(window.screen.width)
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    },[]);

    return(
        widthScreen > 800 ? 
        <div className="project-slide" onClick={()=> hideShow()}>
            <div className={`project-slide--image-div ${direction} ${theme} ${isOpen ? '' : `closed-img-div-${direction}`}`}>
                <img src={image} alt="imagem do projeto" />
            </div>
            <div className={`project-slide--cover-div ${direction} ${isOpen ? '' : `closed-cover-div-${direction}`}`}>
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
    : 
    <div className="project-card-container" >

        <div className={`project-card-mobile ${cardShow ? "" : "card-hide"}`} onClick={() => hideShowMobile()}>
            <img src={image} alt="Imagem do projeto" />
            <div className={`project-card-mobile--cover ${theme}`}>
                <h3>{tittle}</h3>
            </div>
        </div>
        
        <div className={`project-text-mobile ${theme} ${cardShow ? "" : "card-hide"}`}>
            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <a href={linkView} target="_blank">
                    Clique aqui para visualizar
                </a>
                <span style={{display: "flex", alignItems: "center", gap: "4px", color: arrowBackColor}} onClick={() => hideShowMobile()}>
                    <RiArrowGoBackLine color={arrowBackColor} />
                    Ver imagem
                </span>
            </div>
            <br/>
            <h3>{tittle}</h3>
            <p>{text}</p>
            
            <div style={{display: "flex",alignItems: "center", flexWrap: "wrap", width: "100%"}}>
                <div className={`second-component-text ${theme}`} style={{display: "flex"}}>
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
        </div>
        
    </div>
    
    )
} 
export default ProjectSlide;