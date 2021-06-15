import React from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { ItemListContainerStyle } from './ItemListContainerStyle.js'
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles ((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = () => {
   
    const classes = useStyle ();

    return <>
        <ItemList/>
    </>
}
