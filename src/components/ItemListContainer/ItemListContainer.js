import React from 'react';
import {Card} from '../../components/Card/Card';

import { ItemListContainerStyle } from '../../styles/ItemListContainer/ItemListContainerStyle.js'
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles ((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = () => {
   
    const classes = useStyle ();

    return (
        <div className= "container">
            <div className= "products">
                <Card imagen="./img/product.svg" descrip="Descripcion del producto " precio="2"/> 
                <Card imagen="./img/product.svg" descrip="Descripcion del producto " precio="4"/> 
                <Card imagen="./img/product.svg"  descrip="Descripcion del producto " precio="2"/> 
                <Card imagen="./img/product.svg"  descrip="Descripcion del producto " precio="2"/> 
            </div>
        </div>
    )
}
