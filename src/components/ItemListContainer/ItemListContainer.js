import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams, } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'
import { CustomNotification } from './../CustomComponents/CustomNotification.js';
import { dataBase } from './../../Firebase/Firebase.js';
import { COLLECTION_NAME, MAX_GET_ITEM_COLLECTION } from '../../Firebase/constants.js';


export const ItemListContainer = () => {

    const { idCat, id } = useParams();
    const initialErrorState = 'Error cargando productos!';
    const [productData, setProductsData] = useState([]);
    const  [error, setError] = useState(initialErrorState);
    const  [showError, setShowError] = useState(false);
    const  [loading, setLoading] = useState(false);

    const getItems = () => {
        
        setLoading(true);
        const productsCollections = dataBase.collection(COLLECTION_NAME);
        const filterProducts = (
            idCat ? productsCollections.where('category', '==', idCat).limit(MAX_GET_ITEM_COLLECTION) :
            productsCollections);
        filterProducts.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setError('Ups! No hay productos');
                setShowError(true);
            }
            const results = querySnapshot.docs.map(doc => doc.data());
            setProductsData(results);

        }).catch((error) => {
            setShowError(true);
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        getItems();
    }, [idCat]) // eslint-disable-line react-hooks/exhaustive-deps


    return <> { showError?
        <CustomNotification message = { error } type = "error" /> : 
        <div>
            {(loading? (<CustomLoadingComponent  iconLoad={CircularProgress} messageLoad="Cargando..." color="primary"/> ) 
            :
            (<ItemList items = { productData }/>))}
        </div>
        } 
        </>
}
