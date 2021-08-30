import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import {CustomNotFound} from '../components/CustomComponents/CustomNotFound.js'
import './../styles/animations.css';
import { CSSTransition} from 'react-transition-group';
import {routes} from './routeConstants.js';

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


