import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import './ContactForm.css';
import ImageAvatar from '../../assets/avatar.png'
import { FaInstagramSquare, FaLinkedin, FaGithub,   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactValidationSchema } from "../../ValidationsForms/contactValidation";

const ContactForm = () => {
    const [typeContact, setTypeContact] = useState("email");
    var colorIcons = typeContact === "email" ? "#6767fd" : "#165c46"
    const handleContactChange = () =>{
        setTypeContact(typeContact === "email" ? "whatsapp" : "email");
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(contactValidationSchema) 
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://formspree.io/f/mkggpbyq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert("Formulário enviado com sucesso!");
                reset();
            } else {
                alert("Houve um problema ao enviar o formulário. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            alert("Erro ao enviar o formulário. Verifique sua conexão e tente novamente.");
        }
    };

    return(
        <div className="contact-form">
            <div className={`contact-form--social-midias ${typeContact}`}>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-miguel-dos-santos-751a64227/" target="_blank">
                    <div className="contact-form--social-midia__item">
                        <FaLinkedin style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>João Miguel dos Santos</span>
                    </div> 
                </a>
                <a href="https://github.com/JoaoMig186" target="_blank">
                    <div className="contact-form--social-midia__item">
                        <FaGithub style={{transition: "0.7s all"}} color={colorIcons} size={40}/> <span>JoaoMig186</span>
                    </div> 
                </a>
                <a href="https://www.instagram.com/j.miguel_186/" target="_blank">
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
                    <form action="https://formspree.io/f/mkggpbyq" method="POST" className="contact-form--area__form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username">
                            Seu nome ou de sua empresa:
                        </label>
                        <input id="username" name="username" type="text" className="input-text" placeholder="Meu Nome Exemplo" {...register("username")}/> 
                        <span>{errors.username?.message}</span>
                        <label htmlFor="email">
                            Seu email ou de sua empresa:
                        </label>
                        <input id="email" name="email" type="text" className="input-text" placeholder="exemplo@email.com" {...register("email")}/> 
                        <span>{errors.email?.message}</span>
                        <label htmlFor="message">
                            Sua mensagem:
                        </label>
                        <textarea id="message" name="message" type="text" className="input-text-area" placeholder="Escreva sua mensagem para entrar em contato comigo..." {...register("message")}/> 
                        <span>{errors.message?.message}</span>
                        <button id="submitButton" type="submit" className="button-submit" >Enviar</button>
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
                        <a href="https://wa.me/5524981151365" target="_blank">Iniciar conversa</a>
                    </div>
                }
                
            </div>
        </div>
    )
}
export default ContactForm;