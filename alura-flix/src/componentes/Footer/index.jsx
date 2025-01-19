import React from 'react';
import "./Footer.css"
import linkedinLogo from '/linkedin.png';
import githubLogo from '/github.png';

function Footer() {
    return (
        <footer className="footer">
            <p> 2025 Desarrollado por Micaela Roig Courtis</p>
            <div className="alura">
                <a href="https://www.aluracursos.com/" target="_blank" rel="noopener noreferrer">
                    <img className="logo-alura" src="/img/icono-alura.png" alt='Logo Alura' />
                </a>
            </div>

            <div className="redes-sociales">
                <a href="https://www.linkedin.com/in/micaela-roig-courtis/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin" src="/img/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/mmrc1992" target="_blank" rel="noopener noreferrer">
                    <img className="github" src="/img/github.png" alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}

export default Footer