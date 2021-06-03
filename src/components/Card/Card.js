import React from 'react';
import '../../styles/styles.css';



export const Card = ( {imagen, descrip, precio }) => {

    return (
        <div className="card">
            <img src={imagen} alt="Imagen de card" />
            <h4>{precio}</h4>
            <p>{descrip}</p>
        </div>
    )
}

