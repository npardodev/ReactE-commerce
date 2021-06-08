import React from 'react';
import {Counter} from '../Counter/Counter.js';

import { makeStyles } from '@material-ui/core';
import { CardStyle } from '../../styles/Card/CardStyle.js'

const useStyle = makeStyles ((theme) => CardStyle(theme));

export const Card = ( {imagen, descrip, precio }) => {

    const classes = useStyle();

    return (
        <div className= {classes.card}>
            <img src={imagen} alt="Imagen de card" />
            <h4>{`$${precio}`}</h4>
            <p>{descrip}</p>
            <Counter stock= {9} initial={0} /> 
        </div>
    )
}

