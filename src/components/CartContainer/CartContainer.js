import React, { useState, useEffect, useContext } from 'react';
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(cartItems);
        console.log(`los elementos del carrito son ${(cartItems.map((element)=>element.quantity))}`);
    },[])

    const onClickHandler = (e) =>{
        e.preventDefault();
        history.push('/checkout');
    }


    return ( <>
        {(cartItems.length ===0? (<CustomCartEmpty/>) : (
            <div>
                <div className={classes.cartTitle}>
                    <h1> {"En carrito:"} </h1>
                </div>
                <Container maxWidth="l">
                    <Paper elevation={2} variant="outlined" > 
                        <div className = {classes.products }>
                            {cartItems.map((element, index)=><Cart key={index} item={element.item} quantity={element.quantity}/>)}
                        </div>
                    </Paper>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={e => onClickHandler(e)}
                        > Finalizar
                    </Button>

                </Container>
            </div>
        ))}            
 </> )
}

    {/*
        Despues implementar el loader spinner
    {(cartItems.length ===0? (<CustomLoadingComponent  iconLoad={CircularProgress} messageLoad="Cargando..." color="primary"/> ) : (    ))} */}


 