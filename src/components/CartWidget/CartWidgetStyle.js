import React from 'react';
import '../../styles/styles.css';
import { makeStyles } from '@material-ui/core';

import { componentePadreStyle } from '../componentePadreStyle.js'

const useStyle = makeStyles ((theme) => componentePadreStyle(theme));

export const CartWidget = ( {icon, items }) => {
    return (
        <div className="CartWidget">
            <span> {icon} </span>
            <h4>{items}</h4>
        </div>
    )
}

export const ComponentePadre = () => {
   
	/* Ejecuta estos estilos y guardalos aca */
    const classes = useStyle ();

    return (
        <div className={classes.container}>
            <p>Hola manolo</p>
            <h3>Ruberti</h3>
            <button>Botonazo</button>
        </div>
    )
}
