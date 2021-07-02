import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar,CircularProgress } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { myProducts } from './../../data/myProducts.js';
import { useParams } from 'react-router-dom';
import { dataBase } from './../../Firebase/Firebase.js';
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'

const COLLECTION_NAME = "productos";

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
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getItems = () => {
             
        setLoading(true);
        const productsCollections = dataBase.collection(COLLECTION_NAME);
        
        //const higPriceProducts = productsCollections.where('price', '>', 500).where('category', '==', 'products').limits(20);
        productsCollections.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
                setError('No results');
                setShowError(true);
            }
            //setProductData(querySnapshot.docs.map(doc => doc.data()));
            
            //filtrar con where
            const datos = querySnapshot.docs.map(doc => doc.data());
            const filterData2 = datos.filter(function(item) {
                return item.category === String(idCat) && item.id === Number(idItem);
            });            
            setProductData(filterData2[0]);

        }).catch((error) => {
            setError(error);
            setShowError(true);
            console.log('Error buscando items', error);
        }).finally(() => {
            setLoading(false);
           
        })
    }

    useEffect(() => {
        getItems()
    }, [idItem]);

    return  <>
    
    {(loading? (<CustomLoadingComponent iconLoad={CircularProgress} color="primary" messageLoad={'Cargando...'} />) : (
    <div>
        <ItemDetail item={productData}/>
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </div>))}
    </>
}