import "./ListaOpciones.css";

const ListaOpciones = (props) => {
       
    const manejarCambio = (event) => {
        console.log(event.target.value);
        props.actualizarCategoria(event.target.value); // Llama al prop pasado desde el padre
    };

    return (
        <div className="lista-opciones">
            <label>Categoría</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar categoría
                </option>
                {props.categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                        {categoria}
                    </option>))}

            </select>
        </div>
    );
};

export default ListaOpciones; //para usar esta lista en todo el documento