import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'
import {CartContainer} from '../components/CartContainer/CartContainer.js'
import {ContactContainer} from '../../src/screens/Contact/ContactContainer/ContactContainer.js'

import {SocialIconButtons} from '../../src/components/test.js'
import Checkout from '../../src/components/Checkout/Checkout.js'


export const appPaths = {
    PRODUCTS_PATH: '/products',
    ITEM_DETAIL_PATH: '/products/:idCat/:idItem',
    ABOUT_US_PATH: '/aboutus',
    ITEM_PATH: '/item',
    ITEMS_CATEGORYS_PATH: '/products/:idCat',
    CART_PATH: '/cart',
    CONTACT_PATH: '/contact',
    CHECKOUT_PATH: '/checkout',
    TEST_PATH: '/test',
}
   
export const RouterApp= () => {
    return (
    <Switch>
        <Route exact path="/">
            <Home 
            title="BaluTech" 
            subtitle="Todo lo que buscas en tecnologia"
            slogan="en un solo lugar..." 
            buttonLabel="Conocenos"
        />
        </Route>
        
        <Route exact path={appPaths.PRODUCTS_PATH}>
            <ItemListContainer />
        </Route>

        <Route exact path={appPaths.ITEMS_CATEGORYS_PATH}>
            <ItemListContainer />
        </Route>

        <Route exact path={appPaths.ITEM_DETAIL_PATH}>
            <ItemDetailContainer/>
        </Route>

        <Route exact path={appPaths.CART_PATH}>
            <CartContainer/>
        </Route>

        <Route exact path={appPaths.CONTACT_PATH}>
            <ContactContainer/>
        </Route>

        <Route exact path={appPaths.CHECKOUT_PATH}>
            <Checkout/>
        </Route>

        <Route component={CustomNotFound}/>
    </Switch>)
}

