import React, { useState, useEffect } from 'react';
import { ProductDetailStyle } from './ProductDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import {Button, Typography, Chip} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles ((theme) => ProductDetailStyle(theme));

export const ProductDetail = ({item}) => {

    const classes = useStyles();

    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                    <img src={item.img.src} alt={item.img.alt}/>
                </div>
                <div className= {classes.productDetails}>
                    <h3>{item.title}</h3>
                    <h4 className= {classes.actualPrice}>{item.price}</h4>
                    <h4 className= {classes.offerPrice}>{item.price}</h4>
                    <p>{item.descrip}</p>
                    <div>
                        <h4>Tamaño</h4>
                        <select name="select">
                            <option value="value1">Value 1</option>
                            <option value="value2" selected>Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                    </div>
                    <Button variant="contained" color="primary"> Agregar </Button>
                </div>
            </div>
    </section>))
}

