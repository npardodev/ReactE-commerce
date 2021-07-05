import React, { useState } from 'react';
import { Counter } from '../Counter/Counter.js';
import { ItemStyle } from './ItemStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory } from 'react-router-dom';


import { TestComponent} from './../test.js';


const useStyle = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ item, onClick, onFocus }) => {

        const classes = useStyle();
        const history = useHistory();
        const idItem = item.id;
        const idCategory = item.category;

        const handlerClick = (e) => {
            e.preventDefault();
            history.replace(`/`);
            history.push(`products/${idCategory}/${idItem}`);
        }

        const handlerFocus = () => {
            /* Efecto onFocus */
        };

        return (
            <div className= {classes.card}  onFocus={handlerFocus()}>
                <div>
                    <img src={item.imgSrc} alt={item.imgAlt} onClick={(e) => handlerClick(e)} />
                </div>
                <h4>{`$${item.price}`}</h4>
                <p>{item.description}</p>
                <Counter stock= {item.stock} initial={0} />
                <TestComponent/>
            </div>
        )
    }

