import React from 'react';
import {CartWidget} from '../../components/CartWidget/CartWidget';
import {Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle.js'

const useStyles2 = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const useStyle = makeStyles ((theme) => NavBarStyle(theme));

export const NavBar = () => {

    const classes = useStyle();
    
    return <>
        <div className={classes.nav}>
            <ul>
                <li className={classes.logo}>
                    <img src='./img/logo.svg' alt="Imagen logo" />
                </li>
                <li><Link to="/aboutus">Nosotros</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </div>
    </>
}


