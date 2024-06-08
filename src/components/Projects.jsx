import React from 'react';
import './Projects.css';
import mongo from '../assets/mongodb-logo.svg';
import js from '../assets/javascript-logo.svg';
import express from '../assets/express-logo.svg'
import vetbond from '../assets/vetbondpresent.png'
import link from '../assets/link.svg'
import github from '../assets/github-logo.svg'
import git from '../assets/git-logo.svg'
import html from '../assets/html5-logo.svg'
import css from '../assets/css3.svg'
import futuralib from '../assets/futuralib.png'
import python from '../assets/python-logo.svg'
import flask from '../assets/flask.svg'

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
            webUrl: 'https://vetbond.vercel.app/',
            githubUrl: 'https://github.com/Gabyot/vetbond',
            skills: ['JavaScript', 'Express', 'Mongo DB', 'HTML', 'CSS', 'Git', 'Github']
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
                webUrl: "https://www.canva.com/design/DAF23vLd18w/LaC7L7cHuEhYFtg5d05umQ/view?utm_content=DAF23vLd18w&utm_campaign=designshare&utm_medium=link&utm_source=editor",
                githubUrl: 'https://github.com/Gabyot/FuturaLib-1',
                skills: ['Python', 'Flask', 'HTML', 'CSS', 'Git', 'Github']
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>Proyectos más relevantes</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}<div className='button-content'>
                            <a className='github-button' href={project.githubUrl} target="_blank" rel="noopener noreferrer"><img src={github} alt="" className='black-icon' /></a>
                            <a className='github-button' href={project.webUrl} target="_blank" rel="noopener noreferrer"><img src={link} alt="" className='black-icon' /></a>
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
                            {project.skills.map((skill, index) => (
                                <div key={index} className='tool-box'>
                                    {getSkillIcon(skill)} {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Función para obtener el icono correspondiente a cada habilidad
const getSkillIcon = (skill) => {
    switch (skill) {
        case 'JavaScript':
            return <img src={js} alt={skill} className='tools-icon' />;
        case 'Express':
            return <img src={express} alt={skill} className='tools-icon' />;
        case 'Mongo DB':
            return <img src={mongo} alt={skill} className='tools-icon' />;
        case 'Python':
            return <img src={python} alt={skill} className='tools-icon' />;
        case 'Flask':
            return <img src={flask} alt={skill} className='tools-icon' />;
        case 'HTML':
            return <img src={html} alt={skill} className='tools-icon' />;
        case 'CSS':
            return <img src={css} alt={skill} className='tools-icon' />;
        case 'Git':
            return <img src={git} alt={skill} className='tools-icon' />;
        case 'Github':
            return <img src={github} alt={skill} className='tools-icon' />;
        default:
            return null;
    }
};

export default Projects;
