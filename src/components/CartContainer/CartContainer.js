import React, { useState, useContext } from 'react';
import { makeStyles, Container, Paper, Button} from '@material-ui/core';
import { CartContainerStyle } from './CartContainerStyle.js'
import { Cart } from './../Cart/Cart.js';
import {CartContext} from './../../Context/CartContext/CartContext.js'
import { CustomCartEmpty } from './../CustomComponents/CustomCartEmpty.js';
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles((theme) => CartContainerStyle(theme));

export const CartContainer = ({ items }) => {

    const classes = useStyle();
    const history = useHistory();
    const {cartItems, addItem, removeItem} = useContext(CartContext);

    const onClickHandler = (e) =>{
        e.preventDefault();
        history.push('/checkout');
    }


    return ( <>
        {(cartItems.length ===0? (<CustomCartEmpty/>) : (
            <section>
                <div className={classes.cartTitle}>
                    <h1> {"En carrito:"} </h1>
                </div>
                <Container maxWidth="l">
                    <Paper elevation={2} variant="outlined" > 
                        <div className = {classes.products }>
                            {cartItems.map((element)=><Cart key={element.id} item={element.item} quantity={element.quantity}/>)}
                        </div>
                    </Paper>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={e => onClickHandler(e)}
                        > Finalizar
                    </Button>
                </Container>
            </section>
        ))}            
 </> )
}


 