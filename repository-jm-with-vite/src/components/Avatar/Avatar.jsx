import React, { useState, useEffect } from 'react';
import './avatar.css';
import ImageAvatar from '../../assets/avatar.png'
const Avatar = () => {
    return(
        <div class="avatar" id="avatar">
            <span>João Miguel</span>
            <img src={ImageAvatar} className="avatarImg" alt="Imagem do avatar"/>
            <div class="chatBox">
                <p>Olá, eu sou o João Miguel! Você pode me conhecer mais na aba "sobre mim", ver minhas habilidades, ver meus alguns dos meus trabalhos em "projetos", baixar meu currículo ou entrar em contato comigo interagindo com o menu acima.</p>
            </div>
        </div>
    )
}

export default Avatar