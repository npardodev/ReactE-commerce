import React, {useState, useEffect, useContext} from 'react';
import { CircularProgress,Typography } from '@material-ui/core';
import { OrderContext } from './../../../Context/OrderContext/OrderContext.js';
import { CartContext } from './../../../Context/CartContext/CartContext.js';
import {CustomLoadingComponent} from './../../../components/CustomComponents/CustomLoadingComponent.js'
import { CustomNotification } from './../../../components/CustomComponents/CustomNotification.js';
import { dataBase } from './../../../Firebase/Firebase.js';
import { ORDERS_COLLECTION_NAME } from './../../../Firebase/constants';
import firebase from 'firebase/app';
import 'firebase/firestore';



export const OrderService = () => {

    const [orderNumber, setOrderNumber] = useState('');
    const  {order, saveOrderId} = useContext(OrderContext);
    const  {cartItems, cartTotal} = useContext(CartContext);
    const  [error, setError] = useState('');
    const  [showError, setShowError] = useState(false);
    const  [loading, setLoading] = useState(true);

    const newOrder = {
        buyer: order.buyer,
        delivery: order.delivery,
        payment: order.payment,
        items: cartItems,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cartTotal,
    };
    
    const createOrder = () => {
        
        const orders = dataBase.collection(ORDERS_COLLECTION_NAME);

        orders.add(newOrder).then(({ id }) => {
            saveOrderId(id); 
            setOrderNumber(id);
        }).catch(err => {
            setShowError(true);
            setError(err); 
        }).finally(() => {
            setLoading(false);
            console.log(newOrder    );
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            createOrder();
         }, 1500);
     
        return () => clearTimeout(timeout);
       },[]);  // eslint-disable-line react-hooks/exhaustive-deps

    return <> 
    {(loading? (<CustomLoadingComponent iconLoad={CircularProgress} color="primary" messageLoad={'Cargando...'} />) : (
    <div>
        <Typography  variant="h5" align="center" color="secondary">
        Orden creada! 
        </Typography>
        <Typography variant="subtitle1" >
        Tu número de órden es: {`#${orderNumber}`}.
        </Typography>
        {showError ? <CustomNotification message = { error } type = "error" /> : null }
    </div>))}
    </>
}