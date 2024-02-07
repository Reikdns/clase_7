import { useState } from 'react';
import './contenido2.css'

export default function Contenido2(){

    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    return(
        <main id="contenido2">
            <span>Numero 1</span>
            <input value={numero1} onChange={(e) => setNumero1(e.target.value)}></input>
            <br></br>
            <span>Numero 2</span>
            <input value={numero2} onChange={(e) => setNumero2(e.target.value)}></input>
            <br></br>
            <button onClick={() => setResultado(parseInt(numero1) + parseInt(numero2))}>Sumar</button>
            <br></br>
            <span>{resultado}</span>
        </main>
    );
}