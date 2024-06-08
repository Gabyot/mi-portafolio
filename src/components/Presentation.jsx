import React, { useEffect, useState } from 'react';
import githubLogoLight from '../assets/github-logo-light.svg';
import linkedinLogoLight from '../assets/linkedin-logo-light.svg';
import memoji from '../assets/gabyot.png'
import './Presentation.css';
import { FaFilePdf } from 'react-icons/fa';

const Presentation = () => {
    const [text, setText] = useState('');
    const [showMemoji, setShowMemoji] = useState(false);
    const fullText = "Hola, soy Gabriela Arancibia";

    useEffect(() => {
        setShowMemoji(true);
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 100); // Velocidad de tipeo en milisegundos

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="presentation" className="presentation">
            <img src={memoji} alt="memoji-me" className={`memoji ${showMemoji ? 'show' : ''}`} />
            <h1 className="typing">
                {text}
                <span className="cursor">  </span>
            </h1>
            <p>Desarrolladora de software con experiencia en la creación de RESTful APIs en arquitecturas de microservicios.</p>
            <div className="social-links">
                <a href="https://github.com/Gabyot" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogoLight} alt="GitHub" className="social-icon github-icon" />
                </a>
                <a href="https://www.linkedin.com/in/gabriela-paz-arancibia-echeverr%C3%ADa-039a91142/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogoLight} alt="LinkedIn" className="social-icon linkedin-icon" />
                </a>
                <a href="https://www.canva.com/design/DAGG2Su5dfk/QHivCWj5vj0cuCpDU0OkOQ/view?utm_content=DAGG2Su5dfk&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className="social-icon cv-icon" />
                </a>
            </div>
        </section>
    );
};

export default Presentation;



