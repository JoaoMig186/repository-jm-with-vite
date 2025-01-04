import React, { useState, useEffect } from "react";
import './ContactForm.css';
import ImageAvatar from '../../assets/avatar.png'
import { FaInstagramSquare, FaLinkedin, FaGithub,   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    const [typeContact, setTypeContact] = useState("email");
    var colorIcons = typeContact === "email" ? "#6767fd" : "#165c46"
    const handleContactChange = () =>{
        setTypeContact(typeContact === "email" ? "whatsapp" : "email");
    }

    return(
        <div className="contact-form">
            <div className={`contact-form--social-midias ${typeContact}`}>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-miguel-dos-santos-751a64227/" target="_blank">
                    <div className="contact-form--social-midia__item">
                        <FaLinkedin style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>João Miguel dos Santos</span>
                    </div> 
                </a>
                <a href="#">
                    <div className="contact-form--social-midia__item">
                        <FaGithub style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>JoaoMig186</span>
                    </div> 
                </a>
                <a href="https://www.instagram.com/j.miguel_186/">
                    <div className="contact-form--social-midia__item">
                        <FaInstagramSquare style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>@j.miguel_186</span>
                    </div> 
                </a>
                    <div className="contact-form--social-midia__item">
                        <MdEmail style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>joaomiguelscrs@gmail.com</span>
                    </div> 
            </div>
            <div className={`contact-form--area ${typeContact}`}>
                <input 
                    className={`contact-form--area--type-checkbox`} 
                    type="checkbox" 
                    name="checkboxType" 
                    onChange={handleContactChange} 
                />
                <h2>Entre em contato comigo através do {typeContact}:</h2>
                {
                    typeContact == "email" ? 
                    <form action="" className="contact-form--area__form">
                        <label htmlFor="username">
                            Seu nome ou de sua Empresa:
                        </label>
                        <input id="username" name="username" type="text" className="input-text" placeholder="Meu Nome Exemplo"/> 
                        <label htmlFor="email">
                            Seu email ou de sua Empresa:
                        </label>
                        <input id="email" name="email" type="text" className="input-text" placeholder="exemplo@email.com"/> 
                        <label htmlFor="message">
                            Sua mensagem:
                        </label>
                        <textarea id="message" name="message" type="text" className="input-text-area" placeholder="Escreva sua mensagem para entrar em contato comigo..."/> 
                        <button id="submit" className="button-submit" onClick={() => {alert("Enviado!")}}>Enviar</button>
                    </form>
                    :
                    <div className="contact-form--area__whatsapp">
                        <h3>Clique no botão para ser redirecionado ao meu whatsapp!</h3>
                        <div className="image-card">
                            <div className="image-card--div">
                                <img src={ImageAvatar} alt="imagem whatsapp" />
                            </div>
                            <p>+55 (24)98115-1365</p>
                        </div>
                        <button>Iniciar conversa</button>
                    </div>
                }
                
            </div>
        </div>
    )
}
export default ContactForm;