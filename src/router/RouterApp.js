import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useParams, useHistory} from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail/ItemDetail.js';

import { Home } from '../components/Home/Home.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'


export const appPaths = {
    PRODUCTS_PATH: '/products',
    ABOUT_US_PATH: '/aboutus',
    ITEM_PATH: '/item',
    ITEM_DETAIL_PATH: '/products/:idCat/:idItem',
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
        <Route exact path={appPaths.ITEM_DETAIL_PATH}>
            <ItemDetailContainer/>
        </Route>
        <Route component={CustomNotFound}/>
    </Switch>)
}

