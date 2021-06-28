import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'

export const appPaths = {
    PRODUCTS_PATH: '/products',
    ITEM_DETAIL_PATH: '/products/:idCat/:idItem',
    ABOUT_US_PATH: '/aboutus',
    ITEM_PATH: '/item',
    ITEMS_CATEGORYS_PATH: '/products/:idCat',
    CART_PATH: '/cart',
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
            <CustomNotFound/>
        </Route>

        <Route exact path={appPaths.TEST_PATH}>
            <CustomNotFound/>
        </Route>
        <Route component={CustomNotFound}/>
    </Switch>)
}

