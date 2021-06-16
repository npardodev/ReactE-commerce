import React, {useState, useEffect} from 'react';
import {Item} from '../../components/Item/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

//import { itemListStyles } from './ItemListStyles'
//const useStyle = makeStyles((theme) => itemListStyles(theme));

export const ItemList = ({items}) => {

    //const classes = useStyle ();

    return<>
        {
            (items.length === 0 ? (<CircularProgress color="primary" />) : (
            <div className= "container">
                <div className= "products">
                    {items.map((element, index)=><Item key={index} item={element}/>)}
                </div>
            </div>
            ))
        }
    </>
}


