import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {NavBarStyle} from './NavBarStyle.js'

const useStyle = makeStyles ((theme) => NavBarStyle(theme));

export const DropdownItem = ({item}) => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const classes = useStyle ();

  return (
    <>
    <Link 
        className={classes.dropdownLink}
        to={item.path}
        onClick={() => setClick(false)}
        >
        {item.title}
    </Link>
    </>
  );
}

