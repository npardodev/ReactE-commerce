import React from 'react';
import {CartWidget} from '../../components/CartWidget/CartWidget';

import { makeStyles } from '@material-ui/core';
import { NavBarStyle } from '../../styles/NavBar/NavBarStyle.js'

const useStyle = makeStyles ((theme) => NavBarStyle(theme));

export const NavBar = () => {

    const classes = useStyle();
    
    return <>
        <div className={classes.nav}>
            <ul>
                <li className={classes.logo}>
                    <img src='./img/logo.svg' alt="Imagen logo" />
                </li>
                <li><a href=""> Nosotros</a></li>
                <li><a href=""> Productos</a></li>
                <li><a href=""> Contacto</a></li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </div>
    </>
}
