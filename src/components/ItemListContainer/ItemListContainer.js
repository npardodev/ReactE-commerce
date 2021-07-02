import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { myProducts } from './../../data/myProducts.js';
import { useParams, } from 'react-router-dom';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';
import { dataBase } from './../../Firebase/Firebase.js';
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'

const COLLECTION_NAME = "productos";

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myProducts
        ), 3000);
    })
}

export const ItemListContainer = () => {
     
      const {idCat, id } = useParams();
      const initialErrorState = '';

      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState(initialErrorState);
      const [loading, setLoading] = useState(false);
      const [showError, setShowError] = useState(false);

      const getItems = () => {
          /* myPromise().then(data => {            
            const filterData = data.filter(item => item.category.id === idCat);
            setProductsData(filterData !=0 ? filterData:data);
          });
          myPromise().catch(error => {
              setError(error);
          }); */


            
        setLoading(true);
        const productsCollections = dataBase.collection(COLLECTION_NAME);
        
        //const myProducts = productsCollections.where('price', '>', 500).where('category', '==', 'products').limits(20);
        
        productsCollections.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
                setError('No results');
                setShowError(true);
            }
            //setProductData(querySnapshot.docs.map(doc => doc.data()));
            
            //filtrar con where
            const datos = querySnapshot.docs.map(doc => doc.data());
            const filterData = datos.filter(item => item.category === idCat);
            setProductsData(filterData !=0 ? filterData:datos);

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
      }, [{idCat, id }])
      

    return <>
            {error!==initialErrorState ? 
                <CustomNotification message={error} type="error"/>:
                <ItemList items={productData} />}   
           
    </>
}



