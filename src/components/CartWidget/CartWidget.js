import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {CartContext} from './../../Context/CartContext/CartContext.js'

export const CartWidget = ( {items }) => {
    
    const history = useHistory();
    const {getTotalQuantity} = useContext(CartContext);
    const total = getTotalQuantity();

    const handlerClick = () => {
        history.push(`/cart`);
    }

    return (
        <li>
            <h4>{items}</h4>
            <IconButton aria-label="cart" onClick={handlerClick}>
                <Badge badgeContent={`${total}`} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </li>
    )
}

