import React, { useState, useEffect, useContext } from 'react';
import './TextTypingAvatar.css';
import Avatar from '../Avatar/Avatar.jsx'
import { ThemeContext } from '../../context/ThemeContext.jsx'

function TextTypingAvatar() {
  const [displayText, setDisplayText] = useState('');
  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  const {theme, toggleTheme} = useContext(ThemeContext); 
  const viewPort = widthScreen < 560 ? "Clique no ": "Passe o ";
  const text = `   ${viewPort}mouse sobre o avatar abaixo :)`;
  
  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.screen.width)
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
  };
  },[]);

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
    <>
      <div className={`main--frase ${theme}`}>{displayText}</div>
      <Avatar/>
    </>
    
  );
}

export default TextTypingAvatar;