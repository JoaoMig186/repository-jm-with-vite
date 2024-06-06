import React, { useState, useEffect } from 'react';
import './avatar.css';

const Avatar = () => {
    return(
        <div class="avatar" id="avatar">
            <span>João Miguel</span>
            <Image src="imgs/avatar.png" class="avatarImg" alt="Imagem do meu avatar" />
            <div class="chatBox">
                <p>Olá, eu sou o João Miguel! Você pode me conhecer mais na aba "sobre mim", ver minhas habilidades, ver meus alguns dos meus trabalhos em "projetos", baixar meu currículo ou entrar em contato comigo interagindo com o menu acima.</p>
            </div>
        </div>
    )
}

export default Avatar