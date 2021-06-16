import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useParams, useHistory} from 'react-router-dom';
import {Primero, Segundo, Tercero, Cuarto } from './componentes.js';

const data = [1,2,3,4,5]


/* Opcion 1 con Switch .. */
export const RuteoExample = () => {
    return <BrowserRouter>
    <Link to="/tercero">Ir al tercero</Link>
    <Switch>
        <Route exact path="/primero">
            <Primero/>
        </Route>
        <Route exact path="/segundo">
            <Segundo/>
        </Route>
        <Route exact path="/tercero:id">
            <Tercero/>
        </Route>
        <Route exact path="/cuarto">
            <Cuarto/>
        </Route>
    </Switch>

    </BrowserRouter>
}



/* Opcion 2, sin Switch ..

}