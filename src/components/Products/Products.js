import React from 'react';
import '../../styles/styles.css';
import {Card} from '../../components/Card/Card';


export const Products = ({}) => {

    return (
        <div className="container ">
            <div className="products ">

            
            <Card imagen="../../public/img/product.svg" descrip="Descripcion del producto " precio="2"/> 
            <Card imagen="../../public/img/product.svg" descrip="Descripcion del producto " precio="2"/> 
            <Card imagen="../../public/img/product.svg" descrip="Descripcion del producto " precio="2"/> 
            <Card imagen="../../public/img/product.svg" descrip="Descripcion del producto " precio="2"/> 
            </div>
        </div>

    )
}

