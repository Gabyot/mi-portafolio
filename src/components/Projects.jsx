import React from 'react';
import './Projects.css';
import mongo from '../assets/mongodb-logo.svg';
import js from '../assets/javascript-logo.svg';
import express from '../assets/express-logo.svg'
import vetbond from '../assets/image.png'

const Projects = () => {
    const projectList = [
        {
            title: 'Vetbond: App Web de Citas Médicas Veterinarias',
            description: <p>
                <p>Vetbond es un prototipo de aplicación web diseñada para conectar a tutores de animales de compañía con médicos veterinarios, facilitando la gestión de citas veterinarias de manera eficiente y cómoda. Ofrece las siguientes funcionalidades:</p>
            <ul>
            <li>Autenticación: Registro y login seguro con JWT.</li>
            <li>Visualización de Citas Disponibles: Filtros por comuna y tipo de servicio.</li>
            <li>Solicitud de Citas: Formulario con información relevante a la cita.</li>
            <li>Gestión de Citas: Visualización y cancelación de citas programadas.</li>
            <li>Reseñas: Dejar reseñas en citas completadas.</li>
            <li>Perfil de Veterinario: Visualización del perfil y reseñas de otros usuarios.</li>
            </ul>
            <p>
            Implementé una RESTful API con Express, organizando el proyecto bajo la arquitectura MVC. Utilizamos Git para el control de versiones y seguí un flujo kanban para la gestión del equipo. Mi rol incluyó diseñar el proyecto y flujos ux/ui, desarrollar la API, y liderar un equipo de desarrollo.
            </p>
            <p>
            Vetbond optimiza la interacción entre usuarios y veterinarios, haciendo la gestión de citas más eficiente y accesible.</p>
            </p>,
            imageUrl: vetbond
        },{
            title: 'ChatSocket: App de Chat en Tiempo Real',
            description: 'Lorem  ipsum dolor sit amet consectetur, adipisicing elit. Ipsam neque soluta vel, deserunt aliquid, expedita assumenda magni enim corrupti velit ratione optio nemo aspernatur? Vel, quasi minima. Totam, eos soluta..',
            imageUrl: vetbond
        },
        {
            title: 'FuturaLib: Sistema de Gestión Bibliotecaria',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat voluptatum eum dolorem. Alias soluta provident vitae expedita laboriosam architecto voluptas consequuntur, ex, quaerat odio quos minus quo rem vero voluptates!.',
            imageUrl: vetbond
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>Proyectos más relevantes</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project">
                        <div className="project-content">
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        <div className="tools-container">
                                    <h5>SKILLS:</h5>
                                    <div className='tool-box'>
                                        <img src={js} alt="kotlin" className='tools-icon' /> JavaScript
                                    </div>
                                    <div className='tool-box'>
                                        <img src={express} alt="springboot" className='tools-icon express' /> Express
                                    </div>
                                    <div className='tool-box'>
                                        <img src={mongo} alt="mongo" className='tools-icon' /> Mongo DB
                                    </div>
                                </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

