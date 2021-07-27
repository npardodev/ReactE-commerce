import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams, } from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';
import { dataBase } from './../../Firebase/Firebase.js';
import {Pagination} from '@material-ui/lab';
import Box from "@material-ui/core/Box";

const COLLECTION_NAME = "productos";
const MAX_GET_ITEM_COLLECTION = 50;


export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';
      const [page, setPage] = useState([]);
      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);
      const [loading, setLoading] = useState(false);
      const [showError, setShowError] = useState(false);
      const [postion, setPosition]= useState ({
        currentPage: 1,
        itemsPerPage: 8
      });

    const indexLast = postion.currentPage * postion.itemsPerPage;
    const indexFirst = indexLast - postion.itemsPerPage;

    
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

            const quantityResults = querySnapshot.docs.length;
            const quantityDividePage = quantityResults/postion.itemsPerPage;
    
            const results = querySnapshot.docs.map(doc => doc.data());
            const currentResult = results.slice(indexFirst, indexLast);
            setProductsData(currentResult);

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






