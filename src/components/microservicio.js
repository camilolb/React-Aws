import React, {useState, useContext } from 'react';
import rp from 'request-promise';


export default () => {
    const [info, setInfo] = useState('');
    
    const number = async () => {
        debugger;
        const url = "https://wxlrl8uk2k.execute-api.us-east-2.amazonaws.com/prueba";

        const info = await rp(url);
        console.log(info);
    }

    return (
        <div>
            <div>informacion {info}</div>
            <button onClick={number}>Obtener información</button>
        </div>
    )


}