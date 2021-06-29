import React, { useState } from 'react';
import { Counter } from '../Counter/Counter.js';
import { ItemStyle } from './ItemStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory, useLocation } from 'react-router-dom';

const useStyle = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ item, onClick, onFocus }) => {

        const classes = useStyle();
        const history = useHistory();
        const location = useLocation();
        const idItem = item.id;
       
        const handlerClick = (e) => {
            e.preventDefault();
            history.push(`${location.pathname}/${idItem}`);
        }

        const handlerFocus = () => {
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

