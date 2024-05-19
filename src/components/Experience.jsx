import React from 'react';
import './Experience.css';
import kotlin from '../assets/kotlin-logo.svg';
import springboot from '../assets/spring-logo.svg';
import mongo from '../assets/mongodb-logo.svg';
import Digipaw from '../assets/digipaw.png'
const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2>Experiencia</h2>
            <div className="experience-list">
                <div className="experience-item">
                    <div className="experience-content">
                        <a href="https://www.linkedin.com/company/digipaw/"><img src={Digipaw} alt="digipaw" className="experience-image" /></a>
                        <div>
                            <h3>Desarrolladora Backend en Digipaw</h3>
                            <h6>Noviembre 2023 a la actualidad</h6>
                            <p>
                                Mi rol se centra en el desarrollo de RESTful APIs utilizando Kotlin con Spring Boot en una arquitectura de microservicios y siguiendo principios de código limpio.
                            </p>
                            <p>
                                Estoy directamente involucrada en la creación y gestión de endpoints, en la optimización de consultas a la base de datos y la esquematización de datos para mejorar el rendimiento y la eficiencia del sistema.
                            </p>
                            <p>
                                Digipaw es una aplicación móvil destinada al cuidado de mascotas, utilizamos una metodología ágil con énfasis en el flujo Kanban. 
                            </p>
                        </div>
                    </div>
                    <div className="tools-container">
                        <h5>SKILLS:</h5>
                        <div className='tool-box'>
                            <img src={kotlin} alt="kotlin" className='tools-icon' /> Kotlin
                        </div>
                        <div className='tool-box'>
                            <img src={springboot} alt="springboot" className='tools-icon' /> Spring Boot
                        </div>
                        <div className='tool-box'>
                            <img src={mongo} alt="mongo" className='tools-icon' /> Mongo DB
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
