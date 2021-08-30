import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ defaultValue = [], children }) => {

    const [cartItems, setCartItems] = useState(defaultValue);
    const [cartTotal, setCartTotal] = useState(0);


    const updateItem = (itemId, newQuantity) => {
    
        const cartItemsUpdated = cartItems.map((item) => {
            if (item.item.id === itemId) {
                return {...item, quantity: newQuantity};
            } else {
                return null;
            }
        });
        setCartItems(cartItemsUpdated);
    };

    const addItem = (newItem, newQuantity) => {

        if (isInCart(newItem) == true) {
            updateItem(newItem.id, newQuantity);
        } else{
            setCartItems([...cartItems, { item: newItem, quantity: newQuantity }]);
        }
    }

    const removeItem = (itemId) => {
        const cartItemsUpdated = cartItems.filter((item) => item.id !== itemId);
        setCartItems(cartItemsUpdated);
    }


    const clear = () => {
        setCartItems([]);
    }

    const isInCart = (item) => {
        return cartItems.find(cartItem => cartItem.item === item)? true : false;
    }

    const getTotalQuantity = () => {
        
        return cartItems.reduce((sum, i) => {
            return sum + i.quantity;
          }, 0);
    }

    useEffect(() => {
        const total = getTotalQuantity();
        setCartTotal(total);
	}, [cartItems]);// eslint-disable-line react-hooks/exhaustive-deps


    return <CartContext.Provider value = {
        {cartItems, cartTotal, addItem, removeItem, clear, isInCart, getTotalQuantity, updateItem }
    } > { children } </CartContext.Provider>
}