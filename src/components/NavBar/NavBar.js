import React, {useState} from 'react';
import {CartWidget} from '../../components/CartWidget/CartWidget';
import {Link } from 'react-router-dom';
import { makeStyles, Button} from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle.js';
import {Dropdown} from './DropDown.js';

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
    
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    
    const handlerClick = () => {
        setClick(!click);
    }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    return <>
    
        <nav className={classes.navbar}>
            <ul className={click ? classes.navMenuActive : classes.navMenu}>
                <li className={classes.navbarLogo}>
                <Link to="/">
                    <img src='./img/logo.png' width="50px" height="" alt="Imagen logo" />
                </Link>
                </li>
                <li className={classes.navItem}>
                    <Link to="/aboutus" 
                        className={classes.navLinks}
                        onClick={handlerClick}>
                        Nosotros
                    </Link>
                </li>
                <li 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={classes.navItem}>
                    <Link to="/products" 
                        className={classes.navLinks}
                        onClick={handlerClick}>
                        Productos
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className={classes.navItem}>
                    <Link to="/contact" 
                        className={classes.navLinks}
                        onClick={handlerClick}>
                        Contacto
                    </Link>
                </li>                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    </>
}


