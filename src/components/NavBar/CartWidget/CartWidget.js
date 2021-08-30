import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import {CartContext} from './../../../Context/CartContext/CartContext.js'
import { NavBarStyle } from '../NavBarStyle.js';
import { Badge } from '@material-ui/core';
import { makeStyles} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const useStyle = makeStyles ((theme) => NavBarStyle(theme));

export const CartWidget = ( {items }) => {
    
    const {cartTotal} = useContext(CartContext);
    const classes = useStyle();

    return <div className={classes.cartWidget}>
        <Link to="/cart">
            <IconButton aria-label="cart">
                <Badge badgeContent={`${cartTotal}`} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Link>
    </div>
}

