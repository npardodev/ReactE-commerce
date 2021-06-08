import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import { CartWidgetStyle } from '../../styles/CartWidget/CartWidgetStyle.js'
import { CartWidgetBadgeStyle } from '../../styles/CartWidget/CartWidgetStyle.js'


const useStyle = makeStyles ((theme) => CartWidgetStyle(theme));
const StyledBadge = withStyles((theme) => CartWidgetBadgeStyle(theme))(Badge);
  
export const CartWidget = ( {items }) => {
    
    const classes = useStyle();

    const [count, setCount] = useState(0);

    return (
        <div className="CartWidget">
            <h4>{items}</h4>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={`${count}`} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
            </IconButton>
        </div>
    )
}

