import React, { useState, useEffect } from "react";
import axios from "axios";
import Frase from "./Components/Frase";

function App() {
    const [frase, getFrase] = useState({});

    const consultaAPI = async () => {
        const resultado = await axios(
            "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
        );
        //console.log(resultado.data[0]);

        // Añadimos el resultado de la api al state
        getFrase(resultado.data[0]);
    };

    // Consulta a una rest api
    useEffect(() => {
        consultaAPI();
    }, []);

    return (
        <div className="contenedor">
            <Frase frase={frase} />
            <button onClick={consultaAPI}> Nueva Frase</button>
        </div>
    );
}

export default App;
