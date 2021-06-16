import React from 'react';
import {Counter} from '../Counter/Counter.js';
import { ItemStyle } from '../../styles/Item/ItemStyle.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
//import { itemListStyles } from './ItemListStyles'
import LinearProgress from '@material-ui/core/LinearProgress';
//const useStyle = makeStyles((theme) => itemListStyles(theme));

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ({item}) => {

    const classes = useStyle();

    return (
        <div className= {classes.card}>
            <img src={item.img.src} alt={item.img.alt} />
            <h4>{`$${item.price}`}</h4>
            <p>{item.descrip}</p>
            <Counter stock= {item.stock} initial={0} /> 
        </div>
    )
}


