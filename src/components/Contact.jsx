import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('gabrielapaz.ae@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="contact">
            <h2>¿Tienes un proyecto y estás buscando colaborar?</h2>
            <div className="contact-icons">
                <h3>¡Contáctame!</h3>
                <div className="contact-email">
                    <p>gabrielapaz.ae@gmail.com</p>
                    <button onClick={copyToClipboard}>
                        {copied ? <span>Copiado!</span> : <FaCopy />}
                    </button>
                </div>
                <div className="contact-social-icons">
                    <a href="https://github.com/gabyot" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gabriela-paz-arancibia-echeverr%C3%ADa-039a91142/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
