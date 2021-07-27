import React, { useState, useContext } from 'react';
import { makeStyles, Container,Box, Paper} from '@material-ui/core';
import { Counter } from './../Counter/Counter.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { spacing } from '@material-ui/system';
import {CartContext} from './../../Context/CartContext/CartContext.js'
import { CartStyle } from './CartStyle.js'

const useStyle = makeStyles ((theme) => CartStyle(theme));
  
export const Cart = ( {item, quantity}) => {
    
    const classes = useStyle();
    const [count, setCount] = useState(quantity);
    const shortDescript = item.description.substring(0, 19)+"...";
    const {cartItems, addItem} = useContext(CartContext);

    const onAdd = () =>{
        addItem(item,count);
    }

    return ( <>
    <div className={classes.cartItem}>
        <Box className={classes.itemBox}>
        <ListItem>
            <ListItemAvatar>
            <Avatar alt={item.imgAlt} src={item.imgSrc}  />
            </ListItemAvatar>
            <ListItemText primary={item.title}  secondary={shortDescript}  />
        </ListItem>
        </Box>
        <Box className={classes.stockBox}>
            <Counter stock= {item.stock} count={count} setter={setCount} onAdd={onAdd} />
        </Box>
        <Box className={classes.priceBox}> 
            <h3> Precio p/u:</h3>
            <h4><mark>${item.price} </mark></h4>
        </Box>
    </div>
<Divider variant="middle"/>
   </> )
}

