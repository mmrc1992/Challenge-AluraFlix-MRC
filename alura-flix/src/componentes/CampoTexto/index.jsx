import { useState } from "react"
import "./CampoTexto.css"
const CampoTexto = (props) => { //props son las propiedades que va almacenar la función
   
    const placeholderModificado = `${props.placeholder}`

    //manejarCambio es una arrow function que permite capturar el valor del input que ingresa el usuario
    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio} 
            />
    </div>
}
// event o e es lo mismo
//required es para que el campo sea obligatorio
//value {valor} es para que el campo tenga un valor por defecto en este caso Mica
export default CampoTexto