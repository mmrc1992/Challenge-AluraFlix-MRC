import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/index.jsx';
import ListaOpciones from '../ListaOpciones/ListaOpciones.jsx';
import Boton from '../BotonFormulario/index.jsx';

const Formulario = ({ agregarCard, agregarCategoria, eliminarCategoria, categorias }) => {
    const [titulo, actualizarTitulo] = useState('');
    const [descripcion, actualizarDescripcion] = useState('');
    const [imagen, actualizarImagen] = useState('');
    const [video, actualizarVideo] = useState('');
    const [categoria, actualizarCategoria] = useState('');
    const [seccion, actualizarSeccion] = useState('');
    const [color, actualizarColor] = useState('');
    const [categoriaEliminar, actualizarCategoriaEliminar] = useState('');

    //Función para manejar el envío del formulario de subida de videos
    const manejarEnvio = (event) => {
        event.preventDefault();
        if (titulo && descripcion && imagen && video && categoria) {
            const nuevaCard = {
                titulo,
                descripcion,
                imagen,
                video,
                categoria,
            };
            agregarCard(nuevaCard);
            limpiarFormulario();
            alert("¡Video subido con éxito!");
        } else {
            alert("Por favor completa todos los campos.");
        }
    };

    //Función para limpiar el formulario de subida de videos
    const limpiarFormulario = () => {
        actualizarTitulo('');
        actualizarDescripcion('');
        actualizarImagen('');
        actualizarVideo('');
        actualizarCategoria('');
        actualizarSeccion('');
        actualizarColor('');
    };

    const manejarEnvioCategoriaNueva = (event) => {
        event.preventDefault();
        if (seccion && color) {
            const nuevaCategoria = {
                seccion,
                color
            };
            agregarCategoria(nuevaCategoria);
            actualizarSeccion('');
            actualizarColor('');
            alert("¡Categoría creada con éxito!");
        } else {
            alert("Por favor completa todos los campos.");
        }   
    };

    const manejarEliminacionCategoria = (event) => {
        event.preventDefault();
        if (categoriaEliminar) {
            eliminarCategoria(categoriaEliminar);
            actualizarCategoriaEliminar('');
            alert("¡Categoría eliminada con éxito!");
        } else {
            alert("Por favor selecciona una categoría para eliminar.");
        }   
    };

    return (
        <section className="formulario">
            <form className="formulario-videos" onSubmit={manejarEnvio}>
                <h2>Ingresa los datos del video</h2>

                <ListaOpciones
                    valor={categoria}
                    actualizarCategoria={actualizarCategoria}
                    categorias={categorias}
                    required
                />

                <CampoTexto
                    titulo="Título"
                    placeholder="Ingresar título del video"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />

                <CampoTexto
                    titulo="Imagen"
                    placeholder="Ingresar URL de la imagen"
                    required
                    valor={imagen}
                    actualizarValor={actualizarImagen}
                />
                <CampoTexto
                    titulo="Video"
                    placeholder="Ingresar URL del video"
                    required
                    valor={video}
                    actualizarValor={actualizarVideo}
                />
                <CampoTexto
                    titulo="Descripción"
                    placeholder="Ingresar una descripción"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
                />
                <div className="divBotones">
                    <Boton className="botones" texto="Subir video" />
                    <Boton className="botones" texto="Limpiar" onClick={limpiarFormulario} type="button" />
                </div>
            </form>
            {/* Formulario para crear categorías */}
            <form onSubmit={manejarEnvioCategoriaNueva}>
                <h2>Ingresa los datos de la nueva sección</h2>
                <CampoTexto
                    titulo="Categoría"
                    placeholder="Ingresa el nombre"
                    required
                    valor={seccion}
                    actualizarValor={actualizarSeccion}
                />
                <CampoTexto
                    titulo="Color"
                    placeholder="Ingresar el color identitario en formato HEX"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                />
                <div className="divBotones">
                    <Boton className="botones" texto="Crear categoría" />
                    <Boton className="botones" texto="Limpiar" onClick={() => {
                        actualizarSeccion('');
                        actualizarColor('');
                    }} type="button" />
                </div>
            </form>
            
            {/* Formulario para eliminar categorías */}
            <form onSubmit={manejarEliminacionCategoria}>
                <h2>Eliminar una categoría</h2>
                <ListaOpciones
                    valor={categoriaEliminar}
                    actualizarCategoria={actualizarCategoriaEliminar}
                    categorias={categorias}
                    required
                />
                <div className="divBotones">
                    <Boton className="botones" texto="Eliminar categoría" />
                    <Boton 
                        className="botones" 
                        texto="Limpiar" 
                        onClick={() => actualizarCategoriaEliminar('')} 
                        type="button" 
                    />
                </div>
            </form>
        </section>
    );
};

export default Formulario;