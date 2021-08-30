import React, { useState, useContext } from 'react';
import { Counter } from '../Counter/Counter.js';
import { ItemStyle } from './ItemStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory, Link} from 'react-router-dom';
import { ShippingMethod} from './../ShippingMethod/ShippingMethod.js';
import {CartContext} from './../../Context/CartContext/CartContext.js'

const useStyle = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ item, onClick, onFocus }) => {

        const classes = useStyle();
        const history = useHistory();
        const idItem = item.id;
        const idCategory = item.category;
        const [count, setCount] = useState(0);
        const {cartItems, addItem} = useContext(CartContext);

        const handlerClick = (e) => {
            e.preventDefault();
            history.replace(`/`);
            history.push(`products/${idCategory}/${idItem}`);
        }

        const onAdd = () =>{
            addItem(item,count);
        }

        return (
            <div className= {classes.card} >
                <Link to={`/products/${idCategory}/${idItem}`}>
                    <img src={item.imgSrc} alt={item.imgAlt} onClick={(e) => handlerClick(e)} />
                </Link>
                <h4>{`$${item.price}`}</h4>
                <p>{item.description}</p>
                <Counter stock= {item.stock} count={count} setter={setCount} initial={0} onAdd={onAdd} />
                <ShippingMethod delivery={item.delivery} inStore={item.inStore} />
            </div>
        )
    }

