import React, { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar,CircularProgress } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { dataBase } from './../../Firebase/Firebase.js';
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'
import {CustomNotification} from './../CustomComponents/CustomNotification.js'

const COLLECTION_NAME = "productos";

export const ItemDetailContainer = () => {

    const { idCat, idItem } = useParams();
    const [productData, setProductData] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getItems = () => {
             
        setLoading(true);
        const productsCollections = dataBase.collection(COLLECTION_NAME);
    
        const filterProducts = (
            idCat&&idItem? productsCollections.where('category', '==', idCat).where('id', '==',  Number(idItem))
            : 
            productsCollections);
        
     
        filterProducts.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setError('No hay productos');
                setShowError(true);
            }
            const result = (querySnapshot.docs.map(doc => doc.data()));
            result.length!==0? setProductData(result[0]) : setLoading(true);

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
    }, [idItem]); // eslint-disable-line react-hooks/exhaustive-deps

    return  <>
    { showError?
        <CustomNotification message = { error } type = "error" /> : 
        <div>
            {(loading? (<CustomLoadingComponent  iconLoad={CircularProgress} messageLoad="Cargando..." color="primary"/> ) 
            :
            (<ItemDetail item={productData}/>))}
        </div>
        } 
    </>
}