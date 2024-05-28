import React from 'react';
import './Projects.css';
import mongo from '../assets/mongodb-logo.svg';
import js from '../assets/javascript-logo.svg';
import express from '../assets/express-logo.svg'
import vetbond from '../assets/indexvetbond.png'
import link from '../assets/link.svg'
import github from '../assets/github-logo.svg'
import git from '../assets/git-logo.svg'
import html from '../assets/html5-logo.svg'
import css from '../assets/css3.svg'
import futuralib from '../assets/futuralib.png'

const Projects = () => {
    const projectList = [
        {
            title: 'Vetbond: Aplicación Web de Citas Médicas Veterinarias',
            description: <>
                <p>Prototipo de aplicación web diseñada para conectar a tutores de animales de compañía con médicos veterinarios, facilitando la gestión de citas veterinarias de manera eficiente y cómoda. Implementé las siguientes funcionalidades:</p>
                <ul>
                    <li><strong>Autenticación:</strong> con JWT.</li>
                    <li><strong>Visualización de Citas Disponibles</strong> con filtros de búsqueda.</li>
                    <li><strong>Reserva de Citas</strong> Formulario con información relevante a la cita.</li>
                    <li><strong>Gestión de Citas:</strong> Visualización y cancelación de citas programadas.</li>
                    <li><strong>Reseñas:</strong> Dejar reseñas en citas completadas.</li>
                    <li><strong>Perfil de Veterinario:</strong> Incluye reseñas de otros usuarios.</li>
                </ul>
            </>,
            imageUrl: vetbond,
            webUrl: 'https://vetbond.onrender.com',
            githubUrl: 'https://github.com/Gabyot/vetbond'
        }, 
        {
            title: 'FuturaLib: Sistema de Gestión Bibliotecaria',
            description: <>
            <p>Sistema de gestión bibliotecaria desarrollado con Python y Flask. Este sistema proporciona una solución integral para la administración de recursos bibliográficos implementando las siguientes funcionalidades: </p>
                    <ul>
                        <li><strong>Gestión de Inventario</strong></li>
                        <li><strong>Préstamos y Devoluciones</strong></li>
                        <li><strong>Búsqueda y Consulta</strong></li>
                        <li><strong>Perfil de Usuario</strong></li>
                        <li><strong>Autenticación</strong> </li>
                    </ul>
                </>,
                imageUrl: futuralib,
                webUrl: "https://vetbond.onrender.com"
        }
                ];

                return (
                <section id="projects" className="projects">
                    <h2>Proyectos más relevantes</h2>
                    <div className="project-list">
                        {projectList.map((project, index) => (
                            <div key={index} className="project">
                                <h3>{project.title}<div className='button-content'>
                                    <a className='github-button' href={project.githubUrl}><img src={github} alt="" className='black-icon' /></a>
                                    <a className='github-button' href={project.webUrl}><img src={link} alt="" className='black-icon' /></a>
                                </div></h3>
                                <div className="project-content">
                                    <div className='img-project'>
                                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                                    </div>
                                    <div className='description'>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <h5>Herramientas de desarrollo y colaborativas utilizadas:</h5>
                                <div className="tools-container">
                                    <div className='tool-box'>
                                        <img src={js} alt="kotlin" className='tools-icon' /> JavaScript
                                    </div>
                                    <div className='tool-box'>
                                        <img src={express} alt="springboot" className='tools-icon' /> Express
                                    </div>
                                    <div className='tool-box'>
                                        <img src={mongo} alt="mongo" className='tools-icon' /> Mongo DB
                                    </div>
                                    <div className='tool-box'>
                                        <img src={html} alt="html" className='tools-icon' /> HTML
                                    </div>
                                    <div className='tool-box'>
                                        <img src={css} alt="css" className='tools-icon' /> CSS
                                    </div>
                                    <div className='tool-box'>
                                        <img src={git} alt="git" className='tools-icon' />
                                    </div>
                                    <div className='tool-box'>
                                        <img src={github} alt="github" className='tools-icon' /> Github
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                );
};

                export default Projects;

