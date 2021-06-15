import React, {useEffect, useState} from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle'
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myData } from './../../data/data.js';

const useStyle = makeStyles ((theme) => ItemDetailContainerStyle(theme));


//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myData
        ), 1000)
    })
}

export const ItemDetailContainer = () => {
   
    const classes = useStyle ();

    const [data, setData] = useState('')
	const [filter, setFilter] = useState('')
    const [error,setError] = useState('');
    const [showError,setShowError] = useState(false);

	const filterItems = data => {
		return filter === '' ? data : data.filter(item => item.type ===filter);
	}

    const getItems = () => {
        myPromise().then(productData => {
            setData(productData);
        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
    }
    
	useEffect(() => {
        getItems()
	},[]);

    return <>
        <ItemDetail items={data} />
    </>
}
