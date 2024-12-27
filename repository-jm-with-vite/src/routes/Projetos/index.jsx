import React, { useState, useRef, useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import ImgToDoList from "../../assets/projects-imgs/todolistPrimeiro.png";
import ImgToDoListWithBootstrap from '../../assets/projects-imgs/todolistBootstrap.png';
import ImgContextoBrasil from '../../assets/projects-imgs/contextoBrasil.png';
import Img4andar from '../../assets/projects-imgs/quartoAndar.png';
import ImgWindows10 from '../../assets/projects-imgs/windows10.png';
import ImgWindows7 from '../../assets/projects-imgs/windows7.png';
import ImgUrna from '../../assets/projects-imgs/urna.png'

import ProjectSlide from "../../components/ProjectSlide/ProjectSlide";

const Projetos = () => {
    const [quantProjects, setQuantProjects] = useState("Indefinido");

    useEffect(()=> {
        const listaProjetos = containerProjects.current.children;
        setQuantProjects(listaProjetos.length);
    },[])

    const containerProjects = useRef();

    const textToDoList = "Este projeto foi minha primeira interface criada com React. Acompanhei por um tutorial no youtube e a estilização foi feita por mim. É um projeto básico e simples, mas serviu para dar o pontapé em React."
    const textToDoListWithBootstrap = "Este projeto foi feito para um processo seletivo. O projeto foi estilizado com CSS e React-bootstrap. Ele foi feito com base no 'to do list' anterior, porém com uma estilização diferente, assim como as suas funcionalidades. Também foi usando uma FAKE API, onde há um cadastro de pessoas e manipulação do DOM com open modal. Esse também foi um dos meus primeiros projetos em React."
    const textContextoBrasil = "O site da Contexto Brasil é meu segundo projeto entregue como Freelancer e está hospedado na internet desde agosto de 2022. Ele foi feito apenas com HTML e CSS, mas não deixa de ser um site responsivo, bonito e funcional."
    const textWindows7 = "Este projeto é a criação visual do windows 7 com CSS e HTML. Você pode interagir com os itens e o menu. Foram utilizados conceitos de Flexbox Layout para organizar os itens na tela."
    const textWindows10 = "Este projeto é a criação visual do windows 10, tendo o mesmo conceito da criação do windows 7 no item anterior. Você pode interagir com os itens e o menu. Foram utilizados conceitos de Flexbox Layout para organizar os itens na tela."
    const textUrna = "Este é um projeto HTML, CSS, Js da criação de uma urna eletrônica. Foi feito apenas o front-end (sem persistência dos dados dos votos). Foi utilizado técnicas de lógica de programação para que tudo funcionasse corretamente. Para testar, use os cadidatos 07, 88 e 93" 
    const text4andar = "O projeto do Quarto andar é de um trabalho da faculdade que está sendo feito em conjunto com mais 2 amigos. É um site (feito apenas o front-end) que está sendo criado em React e usando conceitos de mobile-first sobre uma empresa de criação de sites e sistemas. O objetivo é entregar um site funcional e completo ao final do período. "

    const arrayIconsHTMLcssJS = [
        <FaHtml5 color="#ff3300" size={"30px"} style={{marginRight: "5px"}} />, 
        <FaCss3Alt color="#0091ff" size={"30px"} style={{marginRight: "5px"}} />, 
        <IoLogoJavascript color="#EFD81C" size={"30px"} />,  
    ]

    const arrayIconsWindows7 = [
        <FaHtml5 color="#ff3300" size={"30px"} style={{marginRight: "5px"}} />, 
        <FaCss3Alt color="#0091ff" size={"30px"} />, 
    ]

    const arrayIconsToDoList = [
            <FaReact color="#1ccef2" size={"30px"} style={{marginRight: "5px"}}/>, 
            <FaHtml5 color="#ff3300" size={"30px"} style={{marginRight: "5px"}} />, 
            <FaCss3Alt color="#0091ff" size={"30px"} style={{marginRight: "5px"}} />, 
            <BsFiletypeJson  color="gray" size={"30px"} />, 
        ]
        
    const arrayIconsFullReactProject = [
            <FaReact color="#1ccef2" size={"30px"} style={{marginRight: "5px"}}/>, 
            <FaHtml5 color="#ff3300" size={"30px"} style={{marginRight: "5px"}} />, 
            <FaCss3Alt color="#0091ff" size={"30px"} style={{marginRight: "5px"}} />, 
            <BsFiletypeJson  color="gray" size={"30px"} style={{marginRight: "5px"}}/>, 
            <FaBootstrap  color="#7910F1" size={"30px"} style={{marginRight: "5px"}}/>, 
            <TbApi color="yellow" size={"30px"} style={{backgroundColor: "#000"}} />
        ]

    return(
        <section className="default-pages">
            <h2>Número de projetos: {quantProjects}</h2>
            <div ref={containerProjects}>
                <ProjectSlide direction={"left"} image={ImgContextoBrasil} tittle={"Contexto Brasil"} linkView={"https://www.contextobrasil.com"} text={textContextoBrasil} techsIcons={arrayIconsHTMLcssJS} />
                <ProjectSlide direction={"right"} image={ImgUrna} tittle={"Urna Eleitoral"} linkRepo={"https://github.com/JoaoMig186/Urna/tree/main"} linkView={"https://urna-eletronica-ten.vercel.app/index.html"} text={textUrna} techsIcons={arrayIconsHTMLcssJS} />
                <ProjectSlide direction={"left"} image={ImgWindows7} tittle={"Clone do Windows 7"} linkRepo={"https://github.com/JoaoMig186/Windows-7-Interface"} linkView={"https://windows-7-interface.vercel.app/"} text={textWindows7} techsIcons={arrayIconsWindows7} />
                <ProjectSlide direction={"right"} image={ImgWindows10} tittle={"Clone do Windows 10"} linkRepo={"https://github.com/JoaoMig186/Windows-10"} linkView={"https://windows-7-interface.vercel.app/"} text={textWindows10} techsIcons={arrayIconsHTMLcssJS} />
                <ProjectSlide direction={"left"} image={ImgToDoList} tittle={"To do List React"} text={textToDoList} linkRepo={"https://github.com/JoaoMig186/primeiro-projeto-reactjs"} linkView={"https://primeiro-projeto-reactjs.vercel.app/"} techsIcons={arrayIconsToDoList} />
                <ProjectSlide direction={"right"} image={ImgToDoListWithBootstrap} tittle={"To do List em React Bootstrap com API"} linkRepo={"https://github.com/JoaoMig186/Teste-bIT-faperj"} linkView={"https://todolist-react-bootstrap.vercel.app/"} text={textToDoListWithBootstrap} techsIcons={arrayIconsFullReactProject} />
                <ProjectSlide direction={"left"} image={Img4andar} tittle={"Quarto Andar"} linkRepo={"https://github.com/JoaoMig186/4Andar"} linkView={"https://4-andar.vercel.app/"} text={text4andar} techsIcons={arrayIconsFullReactProject} />
            </div>
        </section>
    )
}

export default Projetos;