import React, { useState, useEffect, useContext } from 'react';
import './TextTypingAvatar.css';
import Avatar from '../Avatar/Avatar.jsx'
import { ThemeContext } from '../../context/ThemeContext.jsx';

function TextTypingAvatar() {
  const [displayText, setDisplayText] = useState('');
  const {theme, toggleTheme} = useContext(ThemeContext);

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
    <>
    <p>O Thema atual é: {theme}</p>
      <div className='main--frase'>{displayText}</div>
      <Avatar/>
    </>
    
  );
}

export default TextTypingAvatar;