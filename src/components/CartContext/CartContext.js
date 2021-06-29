import React, {useState, createContext} from 'react';
import {CustomNotification} from './../CustomComponents/CustomNotification.js';

export const CartContext = createContext(); // Lo creo

//Creo el componente que lo usa.
export const CartComponentContext = ({ defaultValue=[], children}) => {

	const [cartItems, setCartItems] = useState(defaultValue);
   
    const addItem = (item, quantity) => {

        if (!isInCart(item)){
            setCartItems([...cartItems,{item:item, quantity:quantity}]);          
            console.log(`Se agregaron ${quantity} del item ${item.title} al carrito`);
        }
        else
            console.log(`Elemento${item} existente en el carrito`);
    }

    const removeItem = (itemId) => {
        console.log(`Se eliminó un item del elemento con id:${itemId}.`);
    }

    const getItem = (itemId) => {
        return cartItems.item.find(item => item.id === itemId);
    }

    const clear = () => {
        setCartItems([]);
        console.log('Se eliminaron todos los elementos del carrito.');
    }

    const isInCart = (item) => {
        return cartItems.find(cartItem => cartItem.item === item)? true : false;
    }


	//Lo disponibilizo y defino que comparto
	return <CartContext.Provider value={{cartItems,addItem, removeItem, clear, isInCart}} >
	{children}
	</CartContext.Provider>
}
