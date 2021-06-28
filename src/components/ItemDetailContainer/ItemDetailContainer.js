import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams } from 'react-router-dom';

//Creamos la promise emulando la llamada al backend
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(myProducts), 3000)
    })
}

export const ItemDetailContainer = () => {

    const { idCat, idItem } = useParams();
    const [productData, setProductData] = useState('');
    const  [error, setError] = useState('');
    const  [showError, setShowError] = useState(false);

    const getItems = () => {


        myPromise().then(data => {

            const filterData = data.filter(function(item) {
                return item.category.id === idCat && item.id === parseInt(item.id);
            });

            setProductData(filterData[0] !== 0 ? filterData[0]:data);
         
        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
    }

    useEffect(() => {
        getItems()
    }, [idItem]);

    return  <>
    <ItemDetail item={productData}/>
    <Snackbar open={showError} autoHideDuration={3000} >
        <Alert onClose={() => setShowError(false)} severity="error">
            {error}
        </Alert>
    </Snackbar>
</>
}