import React from 'react';
import {CartWidget} from '../../components/CartWidget/CartWidget';
import {Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import { NavBarStyle } from '../../styles/NavBar/NavBarStyle.js'

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles2 = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const useStyle = makeStyles ((theme) => NavBarStyle(theme));


export default function SwipeableTemporaryDrawer() {
    const classes = useStyles2();
    const [state, setState] = React.useState({
        detalles: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
    
    const data =  ['Elemento1 ', 'Elemento2', 'Elemento3', 'Elemento4'];

    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {data.map((text, index) => (
            <ListItem button key={index}>
               <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button key={'Pay'}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
              <ListItemText primary={"Total"} />
            </ListItem>
        </List>
      </div>
    );
  
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{"Detalles"}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
  

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
                <li><SwipeableTemporaryDrawer/></li>
            </ul>
        </div>
    </>
}


