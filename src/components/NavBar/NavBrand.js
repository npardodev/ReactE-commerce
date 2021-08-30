import React from 'react';
import {Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle.js';
import logoNav from "../../assets/img/logo.png";

const useStyle = makeStyles ((theme) => NavBarStyle(theme));


export const NavBrand = () => {
      
  const classes = useStyle();

  return <div className={classes.navbarLogo}>
    <Link to="/">
        <img src={logoNav} alt="Imagen logo" />
    </Link>
  </div>
}