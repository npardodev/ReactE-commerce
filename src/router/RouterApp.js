import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { HomeView } from '../screens/Home/HomeView.js';
import {ContactView} from '../../src/screens/Contact/ContactView.js'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'
import {CartContainer} from '../components/CartContainer/CartContainer.js'
import {AboutUsContainer} from '../../src/screens/AboutUs/AboutUsContainer.js'
import Checkout from '../../src/components/Checkout/Checkout.js'
import './../styles/animations.css';
import { CSSTransition} from 'react-transition-group'

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
  }

const routes = [
    { path: appPaths.HOME_PATH, name: 'products', Component: HomeView },
    { path: appPaths.ABOUT_US_PATH, name: 'aboutus', Component: AboutUsContainer },
    { path: appPaths.PRODUCTS_PATH, name: 'products', Component: ItemListContainer },
    { path: appPaths.ITEMS_CATEGORYS_PATH, name: 'Items Category', Component: ItemListContainer },
    { path: appPaths.ITEM_DETAIL_PATH, name: 'Items Detail', Component: ItemDetailContainer },
    { path: appPaths.CART_PATH, name: 'Cart', Component: CartContainer },
    { path: appPaths.CONTACT_PATH, name: 'Contact', Component: ContactView },
    { path: appPaths.CHECKOUT_PATH, name: 'Checkout', Component: Checkout },
];

export const RouterApp= () => {

    let location = useLocation();

    return (
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
        </Switch>)
};



