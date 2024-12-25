import React, { useState } from "react";
import PagesContent from "../../components/PagesContent/PagesContent";
import PagesControl from "../../components/PagesControl/PagesControl";

const SobreMim = () => {
const [currentPage, setCurrentPage] = useState(0);

const textFirstPage = "Meu nome é João Miguel dos Santos, tenho 19 anos e atualmente estou cursando o terceiro período de Engenharia de Software presencialmente no instituto INFNET. Estou no mundo da programação desde 2019, principalmente com o desenvolvimento WEB front-end.  Sou formado desde fevereiro de 2022 no Curso Técnico de Informática para Internet (desenvolvimento web) integrado ao Ensino Médio no IFRJ (Instituto Federal do Rio de Janeiro), campus Engenheiro Paulo de Frontin. Lá dei meus primeiros passos em HTML e CSS, além de lógicas de programação com Javascript e algumas outras linguagens."
const textSecondPage = "Aprendi com o passar do tempo algumas linguagens de programação. Na faculdade aprendi Python, desenvolvimento ASP .NET com C# no modelo MVC. Também aprendi noções de estruturas de dados, bacos de dados SQl utilizando ferramentas do Entity Framework, Identity Framework e Dapper. Atualmente estou aprendendo React e React-Native no bloco de front-end. Estou aprimorando meus conhecimentos na área para sempre desenvolver melhores interfaces."

const pages = [
    (
        <PagesContent text={textFirstPage} withTittle={true} lastOne={false} tittle={"Sobre mim..."} key={"page1"}/> 
    ),
    (
        <PagesContent text={textSecondPage} withTittle={false} lastOne={true} key={"page2"}/> 
    )
  ];

 return(
    <section className="default-pages" id="sobre-mim">
          <div className="pages-container">{pages[currentPage]}</div>
          <PagesControl currentPage={currentPage} totalPages={pages.length} setCurrentPage={setCurrentPage} />
    </section>
 )
} 
export default SobreMim