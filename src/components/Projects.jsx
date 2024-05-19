import React from 'react';
import './Projects.css';
import mongo from '../assets/mongodb-logo.svg';
import js from '../assets/javascript-logo.svg';
import express from '../assets/express-logo.svg'
import vetbond from '../assets/image.png'

const Projects = () => {
    const projectList = [
        {
            title: 'ChatSocket: App de Chat en Tiempo Real',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam neque soluta vel, deserunt aliquid, expedita assumenda magni enim corrupti velit ratione optio nemo aspernatur? Vel, quasi minima. Totam, eos soluta..',
            imageUrl: vetbond
        },
        {
            title: 'Vetbond: App Web de Citas Médicas Veterinarias',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam neque soluta vel, deserunt aliquid, expedita assumenda magni enim corrupti velit ratione optio nemo aspernatur? Vel, quasi minima. Totam, eos soluta..',
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
            <h2>Proyectos</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project">
                        <div className="project-content">
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tools-container">
                                <h5>SKILLS:</h5>
                                <div className='tool-box'>
                                    <img src={js} alt="kotlin" className='tools-icon' /> JavaScript
                                </div>
                                <div className='tool-box'>
                                    <img src={express} alt="springboot" className='tools-icon' /> Express
                                </div>
                                <div className='tool-box'>
                                    <img src={mongo} alt="mongo" className='tools-icon' /> Mongo DB
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

