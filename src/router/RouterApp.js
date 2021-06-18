import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useParams, useHistory} from 'react-router-dom';
import { ItemDetail } from '../components/ItemDetail/ItemDetail.js';

import { Home } from '../components/Home/Home.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';


/*
test
*/
import { ProductDetailContainer } from './../test/licoreria/ProductDetailContainer/ProductDetailContainer.js'
import { ProductDetail } from './../test/licoreria/ProductDetail/ProductDetail.js';


export const RouterApp= () => {
    return (
    <Switch>
        <Route exact path="/">
            <Home 
            title="Nombre Tienda" 
            subtitle="Todo lo que buscas en tecnologia"
            slogan="en un solo lugar..." 
            buttonLabel="Conocenos"
            action = { () => console.log('test')}
        />
        </Route>
        <Route exact path="/products">
            <ItemListContainer />
        </Route>
        <Route exact path="/category:id">
            <ItemListContainer />
        </Route>
        <Route exact path="/item/:id’">
            <ItemDetailContainer/>
        </Route>
        <Route exact path="/test">
             <ItemDetailContainer/>
        </Route>
    </Switch>)
}

