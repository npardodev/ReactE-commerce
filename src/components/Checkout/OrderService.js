import React, {useState, useEffect, useContext} from 'react';
import { CircularProgress,Typography } from '@material-ui/core';
import { OrderContext } from './../../Context/OrderContext/OrderContext.js'
import {CustomLoadingComponent} from './../CustomComponents/CustomLoadingComponent.js'
import { CustomNotification } from './../CustomComponents/CustomNotification.js';
import { dataBase } from './../../Firebase/Firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

//{ buyer: { name, lastname, phone, email }, delivery:{method} items: [{id, title, price}], date, total  }

//{ buyer: { name, phone, email }, items: [{id, title, price}], date, total  }
const ORDERS_COLLECTION_NAME = "orders";

/// CREAR
const orders = dataBase.collection(ORDERS_COLLECTION_NAME);

const userInfo = { name: 'pepe', phone: '123123', email: 'asdas@gmail.com' };
const cartItems = [{ id: 10, title: 'asdas', price: 123 }];
const cartTotal = 124;

export const OrderService = () => {

    const [orderNumber, setOrderNumber] = useState('');
    const  {order, saveOrderId} = useContext(OrderContext);
    const  [error, setError] = useState('');
    const  [showError, setShowError] = useState(false);
    const  [loading, setLoading] = useState(true);

    const newOrder = {
        buyer: userInfo,
        items: cartItems,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cartTotal
    };
    
    const createOrder = () => {
        
        orders.add(newOrder).then(({ id }) => {
            saveOrderId(id); 
            console.log(`Orden creada con id:" ${id}`);
            setOrderNumber(id);
        }).catch(err => {
            setShowError(true);
            setError(err); 
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(
        () => {
        let timer = setTimeout(() => createOrder(), 1500);
        return () => {
            clearTimeout(timer);
        };
    });

    return <> 
    {(loading? (<CustomLoadingComponent iconLoad={CircularProgress} color="primary" messageLoad={'Cargando...'} />) : (
    <div>
        <Typography  variant="h5" align="center" color="secondary">
        Orden creada! 
        </Typography>
        <Typography variant="subtitle1">
        Tu número de órden es: {`#${orderNumber}`}.
        </Typography>
        {showError ? <CustomNotification message = { error } type = "error" /> : null }
    </div>))}
    </>
}