import React, {useState} from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import { CustomSelectComponent } from './../CustomComponents/CustomSelectComponent.js'
import {StockContainer, CustomStockChangeController} from './../StockContainer/StockContainer.js';

let categories = [{name:'Opt1', value:'Opt1'},{name:'Opt2', value:'Opt2'},{name:'Opt3', value:'Opt3'}];

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {

    const classes = useStyles();
    const [stock, setStock] = useState(0);
	const handlerStock = value => setStock(value);

    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                   <img src={item.imgSrc} alt={item.imgAlt}/> 
                </div>
                <div className= {classes.productDetails}>
                    <h3>{item.title}</h3>
                    <h4 className= {classes.actualPrice}>${item.price}</h4>
                    <h4 className= {classes.offerPrice}>${item.price}</h4>
                    <p>{item.longDescription}</p>
                    <div className= {classes.stockDetails}>
                        <p>{`Stock:${item.stock}`}</p>
                        <h6>Categoria</h6>
                        <CustomSelectComponent options ={categories} /> 
                    </div>
                    <StockContainer component={CustomStockChangeController} stock={stock} handlerChange={handlerStock} item={item} />
                </div>
            </div>           

    </section>))
}

