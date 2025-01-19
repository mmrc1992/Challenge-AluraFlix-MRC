import React from 'react';
import './HeroSection.css';

const HeroSection = ({ cambiarMostrar }) => {
    return (
        <section className="hero-section" aria-label="Sección principal">
            <div className="hero-content">
                <div className="hero-header">
                    <h1>Bienvenido a AluraFlix</h1>
                </div>
                <p className="hero-description">
                    <a 
                        href="https://www.aluracursos.com/latam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visitar sitio web de Alura Latam"
                    >
                        Tu plataforma de aprendizaje tecnológico
                    </a>
                </p>
                <div className="hero-features" aria-label="Características principales">
                    <div className="feature">
                        <span className="feature-icon" aria-hidden="true">🚀</span>
                        <h3>Cursos Actualizados</h3>
                        <p>Contenido siempre al día con las últimas tecnologías</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon" aria-hidden="true">💻</span>
                        <h3>Aprende Haciendo</h3>
                        <p>Proyectos prácticos y ejercicios reales</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon" aria-hidden="true">🌟</span>
                        <h3>Instructores Expertos</h3>
                        <p>Aprende de grandes profesionales de la industria</p>
                    </div>
                    <div className="feature">
                        <span className="feature-icon" aria-hidden="true">💡</span>
                        <h3>Gestión de Contenido</h3>
                        <p>Agrega y personaliza tus videos y categorías favoritas</p>
                        <button
                            className="add-video-btn feature-action"
                            onClick={cambiarMostrar}
                            title="Agregar nuevo video o categoría"
                            aria-label="Añadir nuevo video"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
