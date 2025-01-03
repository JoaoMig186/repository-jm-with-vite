import React from "react";
import CurriculumSheet from "../../components/CurriculumSheet/CurriculumSheet";
import { GoDownload } from "react-icons/go";

const Curriculo = () => {
    return(
        <section className="section-page">
            <CurriculumSheet />
            <div id="download-curriculum-tag">
                <GoDownload color="#b3b3fc" size={40}/>
            </div>
        </section>
    )
}

export default Curriculo;