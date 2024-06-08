import React from 'react';
import './AboutMe.css';
import me from '../assets/me.png';

const AboutMe = () => {
    return (
        <section id="aboutme">
            <div className="about-me">
                <h2>Sobre Mí</h2>
                <div className="aboutme-content">
                    <img src={me} alt="Mi imagen" className="me" />
                    <div className="text-content">
                        <p>
                            Durante 7 años trabajé en el rubro de ventas de tecnología, lo que me brindó comprensión del mercado tecnológico y gran interés por la ingeniería de software, por lo que decidí estudiar programación y análisis de sistemas en un instituto profesional.
                        </p>
                        <p> 
                            Durante mi formación, participé en un proyecto multidisciplinario a beneficio de la comunidad, el que fue mi primer acercamiento a proyectos de desarrollo de software reales. En este proyecto, mi rol fue implentar la lógica de un sistema generador de certificados para una junta de vecinos. Esta experiencia no solo fortaleció mis habilidades técnicas, sino que también me enseñó la importancia de la colaboración interdisciplinaria y el impacto positivo que la tecnología puede tener en la sociedad.
                        </p>
                        <p>
                            Posteriormente, lideré y desarrollé con éxito proyectos en equipos pequeños, creando prototipos de aplicaciones web que combinaban mis habilidades técnicas con mi capacidad para gestionar equipos y comunicarme de manera efectiva. Esta experiencia me abrió las puertas a mi primer empleo como desarrolladora backend en una startup, donde puedo trabajar bajo la tutela de una desarrolladora senior con una vasta experiencia en la gestión de equipos y el desarrollo de software para empresas multinacionales.
                        </p>
                        <p>
                            En la actualidad, me desempeño como desarrolladora backend utilizando tecnologías como Kotlin y Spring Boot. Estoy comprometida con mi crecimiento profesional y me encuentro en constante formación en arquitecturas limpias y buenas prácticas de desarrollo. Además, continúo buscando nuevas oportunidades para aprender y colaborar, con el objetivo de superar mis límites y agregar valor a cada proyecto en el que participe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
