import React, { useState } from 'react';
import {DropdownItem} from './DropdownItem.js';
import {NavBarStyle} from './NavBarStyle.js';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles ((theme) => NavBarStyle(theme));

//ToDo: acerlo dinámico a partir de la lista de categorias
export const proudctItemsList = [
    {
      title: 'Notebooks',
      path: '/products/1',
    },
    {
      title: 'Discos',
      path: '/products/2',
    },
    {
      title: 'Monitores',
      path: '/products/3',
    },
    {
        title: 'Combos de Pc',
        path: '/products/4',
    },
    {
        title: 'Placas de video',
        path: '/products/5',
    },
  ];

export const Dropdown = () => {

  const [click, setClick] = useState(false);
  const classes = useStyle ();
  const handleClick = () => setClick(!click);


  return (
    <>
      <ul
        onClick={handleClick}
        className={click? classes.dropdownMenuClicked : classes.dropdownMenu}
      >
        {proudctItemsList.map((item, index) => {
          return (
            <li key={index}>
              <DropdownItem item={item}/>
            </li>
          );
        })}
      </ul>
    </>
  );
}

