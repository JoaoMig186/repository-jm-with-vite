import React, { useState, useEffect } from 'react';
import './App.css';
import Avatar from '../../components/Avatar/Avatar.jsx'

function App() {
  const [displayText, setDisplayText] = useState('');
  const text = "   Passe o mouse sobre o avatar abaixo :)";
  
  useEffect(() => {
    let index = 1;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prevText => {
          const nextChar = text[index -1];
          return prevText + nextChar;
        });
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 55);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className='main'>
      <div className='main--frase'>{displayText}</div>
      <Avatar/>
    </div>
  );
}

export default App;