import React from 'react';
import {Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle.js';

const useStyle = makeStyles ((theme) => NavBarStyle(theme));


export const NavBrand = () => {
      
  const classes = useStyle();

  return <li className={classes.navbarLogo}>
    <Link to="/">
        <img src='./img/logo.png' width="50px" height="" alt="Imagen logo" />
    </Link>
  </li>
}