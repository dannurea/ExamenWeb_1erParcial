// rafc - React Functional Component 
import React, { useState }  from 'react'
//import { FirstComponents } from './components/FirstComponents'
import './Styles.css'



export const Main = () => {
    const [datos, setDatos] = useState([]);
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');

    const isDisable = (texto1 === '' || texto2 === '');

    const JoinData = () => {
        const newData = {
            texto1: texto1,
            texto2: texto2
        }
        setDatos([newData, ...datos])
    }

    const Print = () => {
        return datos.map((data) => (
            <ls key={data}>
                {data.texto1 + ' ' + data.texto2},
            </ls>
        ))
    }

    return (
        <div>
            <label><h1> Examen 1er Parcial </h1></label>
            <label><h3> Inserta la información que desees juntar </h3></label>
            
            <label>Texto_1: </label>
            <input
                type="text"
                value={texto1}
                onChange={(e) => { setTexto1(e.target.value) }}>
            </input>
            <br />

            <label>Texto_2: </label>
            <input
                type="text"
                value={texto2}
                onChange={(e) => { setTexto2(e.target.value) }}>
            </input>
            <br />
            <button disabled={isDisable} onClick={JoinData}> Juntar </button>

            <br />
            {Print()}

            <label><p> Recuerda, debes ingresar texto en ambos espacios para que funcione adecuadamente </p></label>

        </div>
    )
}