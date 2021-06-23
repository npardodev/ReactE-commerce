import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { ItemListContainerStyle } from './ItemListContainerStyle.js'
import { makeStyles } from '@material-ui/core';
import { myProducts } from './../../data/myProducts.js';
import {Snackbar} from '@material-ui/core';
import {IconButton, Container} from '@material-ui/core';
import {CloseIcon} from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useParams, useHistory} from 'react-router-dom';

const useStyle = makeStyles ((theme) => ItemListContainerStyle(theme));

const TIME_DURATION_ERROR_MSG = 3000;

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
           myProducts
        ), 3000)
    })
}

export const ItemListContainer = () => {
     
      const {id} = useParams();
      console.log(id);
      
      const classes = useStyle ();
      const [productData, setProductsData] = useState([]);
      const [error,setError] = useState('');
      const [showError,setShowError] = useState(false);
     
      const getItems = () => {
          myPromise().then(data => {
            setProductsData(data)
          });
          myPromise().catch(error => {
              setError(error);
              setShowError(true);
          });
      }
      
      useEffect(() => {
          getItems()
      }, [])

    return <>
            <ItemList items={productData} />
            <Snackbar open={showError} autoHideDuration={3000} >
                <Alert onClose={() => setShowError(false)} severity="error">
                    {error}
                </Alert>
            </Snackbar>
    </>
}



