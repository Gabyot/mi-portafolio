import React from 'react';
import './AboutMe.css';
import me from '../assets/me.png';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>Sobre Mí</h2>
            <div className="aboutme-content">
                <img src={me} alt="Mi imagen" className="me" />
                <div className="text-content">
                    <p>
                        Durante muchos años trabajé en el rubro de ventas de tecnología, lo que me brindó comprensión del mercado tecnológico y gran interés por la ingeniería de software, por lo que decidí estudiar en un instituto profesional.
                    </p>
                    <p> Durante mi formación, participé en un proyecto multidisciplinario a beneficio de la comunidad, el que fue mi primer acercamiento a proyectos de desarrollo de software reales. En este proyecto, mi rol fue implentar el backend de un sistema generador de certificados para juntas de vecinos.
                    </p>
                    <p>
                        También lideré y desarrollé con éxito proyectos en equipos pequeños, creando prototipos de aplicaciones web. Esta experiencia me permitió conseguir mi primer empleo de programación en una startup liderada por una desarrolladora de software senior con amplia experiencia en la gestión de equipos y el desarrollo de software para empresas multinacionales.
                    </p>
                    <p>
                        Actualmente, trabajo como desarrolladora backend con Kotlin y Spring Boot. Me estoy formando en arquitecturas limpias y buenas prácticas de desarrollo.
                    </p>
                    <p>
                        Estoy constantemente en busca de nuevas oportunidades para aprender y colaborar. Mi objetivo es superar mis límites y agregar valor a cada proyecto en el que participe.
                    </p>
                    <p> <strong>¡Supera tus límites aquí y ahora! 🚀</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
