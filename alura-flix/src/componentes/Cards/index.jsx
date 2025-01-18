import { useState } from 'react';
import "./Cards.css"
import { RiDeleteBinLine } from "react-icons/ri";

const Cards = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [likes, setLikes] = useState(0);

    const { categoria, descripcion, imagen, titulo, video, colorPrimario } = props.datos;
    const { eliminarCard } = props

    const handleFavorite = (e) => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
    };

    const handleLike = (e) => {
        e.preventDefault();
        setLikes(prev => prev + 1);
    };

    const handleShare = async (e) => {
        e.preventDefault();
        try {
            await navigator.share({
                title: titulo,
                text: descripcion,
                url: video
            });
        } catch (err) {
            console.log('Error al compartir:', err);
        }
    };

    return (
        <div 
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-header" style={{ backgroundColor: colorPrimario }}>
                <a href={video} target="_blank" rel="noopener noreferrer">
                    {isHovered ? (
                        <div className="video-preview">
                            <iframe
                                src={`${video.replace('watch?v=', 'embed/')}?autoplay=1&mute=1`}
                                title={titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img src={imagen || `/default-thumbnail.jpg`} alt={titulo} />
                    )}
                </a>
            </div>
            <div className="card-content">
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
                <div className="card-actions">
                    <button 
                        className={`action-btn favorite ${isFavorite ? 'active' : ''}`}
                        onClick={handleFavorite}
                    >
                        <span className="material-icons">
                            {isFavorite ? 'favorite' : 'favorite_border'}
                        </span>
                    </button>
                    <button className="action-btn like" onClick={handleLike}>
                        <span className="material-icons">thumb_up</span>
                        <span className="like-count">{likes}</span>
                    </button>
                    <button className="action-btn share" onClick={handleShare}>
                        <span className="material-icons">share</span>
                    </button>
                    <RiDeleteBinLine className="eliminar" alt="Eliminar video" onClick={() => props.eliminarCard(titulo)}/>
                </div>
            </div>
            <div className="card-category" style={{ backgroundColor: colorPrimario }}>
                {categoria}
            </div>
        </div>
    );
};

export default Cards