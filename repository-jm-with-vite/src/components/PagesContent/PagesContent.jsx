import React, { useState, useEffect } from "react";
import './PagesContent.css'

const PagesContent = ({text, withTittle, tittle, lastOne, key}) => {
    const [arrayParagraphs, setArrayParagraphs] = useState([]);

    function splitTextByWords(text, maxWords = 55) {
        const sentences = text.match(/[^.!?]+[.!?]/g);
        const result = [];
        let currentPart = [];
        let wordCount = 0;
      
        sentences.forEach(sentence => {
          const wordsInSentence = sentence.trim().split(/\s+/).length;
      
          if (wordCount + wordsInSentence <= maxWords) {
            currentPart.push(sentence);
            wordCount += wordsInSentence;
          } else {
            result.push(currentPart.join(' ').trim());
            currentPart = [sentence];
            wordCount = wordsInSentence;
          }
        });
      
        if (currentPart.length) {
          result.push(currentPart.join(' ').trim());
        }
        return result;
      }
    useEffect(() => {
        setArrayParagraphs(splitTextByWords(text))
    },[])

    return(
        <div className="pages" key={key}>
        {withTittle && <h2>{tittle}</h2>}
        {
            arrayParagraphs.map((paragraph, index) => {
                const isLastP = index === arrayParagraphs.length - 1;

                return(
                    <div className="pages--paragraphs" key={index}>
                        <p id={(isLastP && lastOne) ? "last-one" : ""}>{paragraph}</p>
                    </div>
                )
            })
        }
        
      </div>
    )
}
export default PagesContent;