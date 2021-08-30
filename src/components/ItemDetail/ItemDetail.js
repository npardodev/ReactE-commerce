import React, {useState} from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles} from '@material-ui/core';
import {StockContainer, CustomStockChangeController} from './../StockContainer/StockContainer.js';

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {

    const classes = useStyles();
    const [stock, setStock] = useState(0);
	const handlerStock = value => setStock(value);

    return <section className= {classes.productItem}>
                <div>
                   <img src={item.imgSrc} alt={item.imgAlt}/> 
                </div>
                <div className= {classes.productDetails}>
                    <div>
                        <h3>{item.title}</h3>
                        <h4 className= {classes.actualPrice}>${item.price}</h4>
                        <p>{item.longDescription}</p>
                    </div>
                    <div className= {classes.stockDetails}>
                        {
                            item.stock>0 ?  
                            <StockContainer component={CustomStockChangeController} stock={stock} handlerChange={handlerStock} item={item} />
                            :
                            <p>Sin Stock</p>
                        }
                    </div>
                </div>
    </section>
}

