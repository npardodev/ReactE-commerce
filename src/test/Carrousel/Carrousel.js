import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import { CarrouselStyle } from '../../styles/Carrousel/CarrouselStyle.js'

const useStyle = makeStyles((theme) => CarrouselStyle(theme));

const data = [{
        img: './img/test.jpg',
        alt: 'imagen 1'
    },
    {
        img: './img/test2.jpg',
        alt: 'imagen 2'
    },
    {
        img: './img/test3.jpg',
        alt: 'imagen 4' 
    }
]

export const Carrousel = () => {

        const classes = useStyle();

        const [position, setPosition] = useState(0);

        const siguienteFoto = () => {
            const numeroProximafOTO = position + 1;
            const estoyEnUltimaFoto = numeroProximafOTO + data.lenght - 1;
            setPosition(estoyEnUltimaFoto ? 0 : numeroProximafOTO);
        }

        return ( 
               
            <div>
                <img src = { data[position].img } alt = { data[position].alt }/> 
                <button onClick = { siguienteFoto } > Siguiente </button>
            </div>

        )
        
    
}