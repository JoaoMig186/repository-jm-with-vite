import React, { useState, useEffect } from 'react'
import './App.css'


function App() {

    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText(prevText => prevText + text[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 55);
  
      return () => clearInterval(intervalId);
    }, [text]);


  return (
    <div className='main'>
      <div className='main-frase'>{displayText}</div>
    </div>
  )
}

export default App
