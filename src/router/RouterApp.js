import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { HomeView } from '../screens/Home/HomeView.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'
import {CartContainer} from '../components/CartContainer/CartContainer.js'
import {ContactContainer} from '../../src/screens/Contact/ContactContainer/ContactContainer.js'
import Checkout from '../../src/components/Checkout/Checkout.js'
import './../styles/animations.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group'


export const appPaths = {
    HOME_PATH: '/',
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

const routes = [
    { path: appPaths.HOME_PATH, name: 'products', Component: HomeView },
    { path: appPaths.PRODUCTS_PATH, name: 'products', Component: ItemListContainer },
    { path: appPaths.ITEMS_CATEGORYS_PATH, name: 'Items Category', Component: ItemListContainer },
    { path: appPaths.ITEM_DETAIL_PATH, name: 'Items Detail', Component: ItemDetailContainer },
    { path: appPaths.CART_PATH, name: 'Cart', Component: CartContainer },
    { path: appPaths.CONTACT_PATH, name: 'Contact', Component: ContactContainer },
    { path: appPaths.CHECKOUT_PATH, name: 'Checkout', Component: Checkout },
];


export const RouterApp= () => {

    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={800}
            >
            <Switch location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                  >
                    <Component />
                  </CSSTransition>
                )}
              </Route>
            ))}   
            <Route component={CustomNotFound}/>
        </Switch>
        </CSSTransition>
    </TransitionGroup>)
};




/*
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

*/
