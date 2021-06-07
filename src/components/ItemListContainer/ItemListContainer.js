import React from 'react';
import '../../styles/styles.css';
import {Card} from '../../components/Card/Card';


export const ItemListContainer = () => {

    return (
        <div className="container ">
            <div className="products">
        
            <Card imagen="./img/product.svg" descrip="Descripcion del producto " precio="2"/> 
            <Card imagen="./img/product.svg" descrip="Descripcion del producto " precio="4"/> 
            <Card imagen="./img/product.svg"  descrip="Descripcion del producto " precio="2"/> 
            <Card imagen="./img/product.svg"  descrip="Descripcion del producto " precio="2"/> 
            </div>
        </div>
    )
}
