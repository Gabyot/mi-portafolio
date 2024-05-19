import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <form>
                <label>Nombre</label>
                <input type="text" name="name" />
                
                <label>Email</label>
                <input type="email" name="email" />
                
                <label>Mensaje</label>
                <textarea name="message"></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
