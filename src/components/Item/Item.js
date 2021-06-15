import React from 'react';
import {Counter} from '../Counter/Counter.js';

import { makeStyles } from '@material-ui/core';
import { ItemStyle } from '../../styles/Item/ItemStyle.js'

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ( {id, title, price, descrip, img, alt, stock  }) => {

    const classes = useStyle();

    return (
        <div className= {classes.card}>
            <img src={img} alt="Imagen de card" />
            <h4>{`$${price}`}</h4>
            <p>{descrip}</p>
            <Counter stock= {9} initial={0} /> 
        </div>
    )
}


