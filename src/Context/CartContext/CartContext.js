import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ defaultValue = [], children }) => {

    const [cartItems, setCartItems] = useState(defaultValue);

    const addItem = (item, quantity) => {

        if (!isInCart(item)) {
            setCartItems([...cartItems, { item: item, quantity: quantity }]);
            console.log(`Se agregaron ${quantity} del item ${item.title} al carrito`);
        } else
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
        return cartItems.find(cartItem => cartItem.item === item) ? true : false;
    }

    const getTotalQuantity = () => {
        let total = 0;
        cartItems.map((item) => {
            total += item.quantity;
        });
        return total;
    }


    return <CartContext.Provider value = {{ cartItems, addItem, removeItem, clear, isInCart, getTotalQuantity }} > { children } </CartContext.Provider>
}