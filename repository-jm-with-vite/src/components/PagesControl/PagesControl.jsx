import React from "react";
import './PagesControl.css'

const PagesControl = ({currentPage, totalPages, setCurrentPage}) => {

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handleBack = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };

return(
    <div className="pages-control"> 
        <div className="pages-control--pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
            <span key={index} className={`pages-control--pagination__balls ${index === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(index)}></span>
            ))}
        </div> 

        <div style={{"display" : "flex"}}>
            {currentPage > 0 && (
                <button onClick={handleBack} id="btn-back" className="pages-control--buttons show">
                Back
                </button>
            )}

            {currentPage < totalPages - 1 ? (
                <button onClick={handleNext} id="btn-next" className="pages-control--buttons show">
                Next
                </button>
            ) : null}
        </div>
        
    </div>
)
}
export default PagesControl;