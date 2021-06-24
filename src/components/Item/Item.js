import React, {useEffect} from 'react';
import {Counter} from '../Counter/Counter.js';
import { ItemStyle } from './ItemStyle.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useParams, Link, useHistory, useLocation} from 'react-router-dom';

const useStyle = makeStyles ((theme) => ItemStyle(theme));

export const Item = ({item , onClick, onFocus}) => {

    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();
    const idItem = item.id;
    const idCategory = item.category.id;

    const {id} = useParams();

    /*
    useEffect(() => {
        ;
    }, [])
    */

    const handlerClick = (e) =>{ 
        e.preventDefault();
        history.push(`${location.pathname}/${idItem}`);
    }

    const handlerFocus = () =>{
        /* Efecto onFocus */
    };

    return (
        <div className= {classes.card}  onFocus={handlerFocus()}>
            <div>
                <img src={item.img.src} alt={item.img.alt} onClick={(e) => handlerClick(e)} />
            </div>
            <h4>{`$${item.price}`}</h4>
            <p>{item.descrip}</p>
            <Counter stock= {item.stock} initial={0} />
        </div>
    )
}


