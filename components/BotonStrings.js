import React from 'react'
import PropTypes from 'prop-types'

const [datos, setDatos] = useState([]);
const [texto1, setTexto1] = useState('');
const [texto2, setTexto2] = useState('');

const isDisable = ( texto1 ===  '' || texto2 === '');

const JoinData = () => {
    const newData = {
        texto1: texto1,
        texto2: texto2
    }
    setDatos([newData, ... datos])
}

const Print = () => {
    return datos.map((data) => (
        <ls key={data}>
            {data.texto1},
            {data.texto2}
        </ls>
    ))
}

return (
    <div className='Exam'>
        <label>Texto 1: </label>
        <input 
            type = "text"
            value = {texto1}
            onChange = {(e) => {setTexto1(e.target.value)}}>
        </input>
        <br/>

        <label>Texto 2: </label>
        <input 
            type = "text"
            value = {texto2}
            onChange = {(e) => {setTexto2(e.target.value)}}>
        </input>
        <br/> 
        <button disabled = {isDisable} on click = {JoinData}> Juntar </button>
        
    </div>
)