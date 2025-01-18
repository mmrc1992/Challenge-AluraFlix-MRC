import "./BotonFormulario.css";

const Boton = (props) => {
    return <button className="botones" onClick={props.onClick}>{props.texto}</button>;
};

export default Boton;

// const BotonLimpiar = (props) => {
// return <button className="boton-limpiar">{props.texto}</button>
//  }
//  export default BotonLimpiar