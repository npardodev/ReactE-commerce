import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams, } from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';
import { dataBase } from './../../Firebase/Firebase.js';

const COLLECTION_NAME = "productos";
const MAX_GET_ITEM_COLLECTION = 50;


export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';
      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);
      const [loading, setLoading] = useState(false);
      const [showError, setShowError] = useState(false);

    
      const getItems = () => {
         
        setLoading(true);
        const productsCollections = dataBase.collection(COLLECTION_NAME);
        const filterProducts = (
            idCat? productsCollections.where('category', '==', idCat).limit(MAX_GET_ITEM_COLLECTION)
            : 
            productsCollections);
        filterProducts.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setError('No hay productos');
                setShowError(true);
            }

            const results = querySnapshot.docs.map(doc => doc.data());
            setProductsData(results);

        }).catch((error) => {
            setError(error);
            setShowError(true);
            console.log('Error en respuesta del servidor', error);
        }).finally(() => {
            setLoading(false);
           
        })
      }
      
      useEffect(() => {
          getItems();
      }, [idCat])
      

    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={productData} />}   
        </>
}






