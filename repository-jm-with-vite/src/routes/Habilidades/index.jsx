import React from "react";
import SkillsBoard from '../../components/SkillsBoard/SkillsBoard.jsx'

const Habilidades = () => {
    const learnWanted = ['Redux', 'Node', 'Flutter', 'Firebase', 'CI/CD'];
    const littleKnowledge = ['C#', '.NET-MVC', 'Java', 'Spring-Boot', 'SQL'];
    const regularKnowledge = ['Python', 'React-Native', 'Hooks(React)', 'Liferay'];
    const goodKnowledge = ['React', 'Bootstrap', 'Jquery', 'Scss/Sass', 'Rest-API'];
    
    return(
        <section className="default-pages">
            <SkillsBoard learnWanted={learnWanted} littleKnowledge={littleKnowledge} regularKnowledge={regularKnowledge} goodKnowledge={goodKnowledge}/>
        </section>
    )
}
export default Habilidades;