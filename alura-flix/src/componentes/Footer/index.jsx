import React from 'react';
import "./Footer.css"
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';

function Footer() {
    return (
        <footer className="footer" aria-label="Pie de página">
            <p> 2025 Desarrollado por Micaela Roig Courtis</p>
            <div className="alura" aria-label="Logotipo de Alura">
                <a href="https://www.aluracursos.com/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Visitar sitio web de Alura">
                    <img 
                        className="logo-alura" 
                        src="/img/icono-alura.png" 
                        alt='Logo Alura' 
                        aria-label="Logo de Alura"
                    />
                </a>
            </div>

            <div className="redes-sociales" aria-label="Redes sociales">
                <a href="https://www.linkedin.com/in/micaela-roig-courtis/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Perfil de LinkedIn de Micaela Roig Courtis">
                    <img 
                        className="linkedin" 
                        src={linkedinLogo} 
                        alt="LinkedIn" 
                        aria-label="Ícono de LinkedIn"
                    />
                </a>
                <a href="https://github.com/mmrc1992" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Perfil de GitHub de Micaela Roig Courtis">
                    <img 
                        className="github" 
                        src={githubLogo} 
                        alt="GitHub" 
                        aria-label="Ícono de GitHub"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer