import React, {useState, createContext, useContext} from 'react';
import {CartContext} from './../../Context/CartContext/CartContext.js'

export const OrderContext = createContext();

export const OrderComponentContext = ({ defaultValue=[], children}) => {

	
    const {cartItems} = useContext(CartContext);
    const [order, setOrder] = useState([]);
	const [orderBuyer, setOrderBuyer] = useState('');
	const [orderDelivery, setOrderDelivery] = useState('');
	const [orderPayment, setOrderPayment] = useState('');

	const [orderDate, setOrderDate] = useState(0);
	const [orderTotal, setOrderTotal] = useState(0);
    const [orderItems, setOrderItems] = useState(cartItems);

	const [orderId, setOrderId] = useState(0);
    
	/*
	Funciones
	const addOrder = newOrder => setOrders([...orders,newOrder]);
	
	const ORDER = { 
		buyer:orderBuyer,
		delivery:orderDelivery,
		items: cartItems,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
		total:
	 }
	*/

	const saveOrderId = (id) =>{
		setOrderId(id);
	}

	const saveOrderPayment = (payment) =>{
		setOrderDelivery(payment);
	}

	const saveOrderDelivery = (delivery) =>{
		setOrderDelivery(delivery);
	}

	const saveOrderBuyer = (nameValue, phoneValue, emailValue) =>{
		if (nameValue != null && phoneValue != null && emailValue != null) 
			setOrderBuyer({name:nameValue,phone:phoneValue, email: phoneValue });
	}

	const saveItems = (items) =>{
		setOrderItems(items);
	}

	return <OrderContext.Provider value={{saveOrderId, saveOrderBuyer, saveOrderDelivery, saveOrderPayment, order}} >
		{children}
	</OrderContext.Provider>
}
