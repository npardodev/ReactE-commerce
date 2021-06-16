import React, { useEffect, useState } from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle'
import { Alert, AlertTitle } from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';

const useStyle = makeStyles((theme) => ItemDetailContainerStyle(theme));

//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            myProducts
        ), 3000)
    })
}

export const ItemDetailContainer = () => {

    const classes = useStyle();

    const [productData, setProductData] = useState('');
    const [filter, setFilter] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const filterItems = data => {
        return filter === '' ? data : data.filter(item => item.type === filter);
    }

    const getItems = () => {
        myPromise().then(data => {
            setProductData(data[1]); // Elegir luego por ID
        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
    }

    useEffect(() => {
        getItems()
    }, []);

    return <>
       
        <ItemDetail item={productData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </>
}