import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle.js';
import {Dropdown} from './DropDown.js';
import {CartWidget} from './CartWidget/CartWidget';
import {NavBrand} from './NavBrand.js';


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
      setDropdown(false);
  };

    return <nav className={classes.navbar}>
            
                <NavBrand/>
                
                <div className={classes.navLinksList}>

                    <ul className={click ? classes.navMenuActive : classes.navMenu}>
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
                        </li>         
                    </ul>  
                </div>

                <CartWidget />
        </nav>
}
/*
const navLinkItems = [
    {
        path: "/aboutus",
        title: "Nosotros",

    },

]

/*

  <li className={classes.navItem}>
                    <Link to="/aboutus" 
                        className={classes.navLinks}
                        onClick={handlerClick}>
                        Nosotros
                    </Link>
                </li>
                
export const NavLinksItems = () => {

    const classes = useStyle();

    return  <div className={classes.navItems}>
        {navLinkItems.map((index,element) =>  
            <li className={classes.navItem}>
                <Link to="/aboutus" 
                    className={classes.navLinks}
                    >
                    Nosotros
                </Link>
            </li>
        )}
    </div>
}
*/