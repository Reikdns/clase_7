import { useState } from 'react';
import './contenido1.css'

export default function Contenido1(){

    const [numero, setNumero] = useState(0)

    return(
        <main id="contenido1">
            <button onClick={() => setNumero(numero + 1)}>Sumar</button>
            <span>{numero}</span>
        </main>
    );

} 