import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {Footer} from './components/Footer/Footer'; 
import {DolarService} from './services/cotizacion/DolarService';
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';
import { CartComponentContext} from './components/CartContext/CartContext.js';
import {ItemDetail} from './components/ItemDetail/ItemDetail.js'


// Componente padre que recibe algo.
const App = props => {

  return (
    <CartComponentContext>
        <BrowserRouter>
            <NavBar/>
            <RouterApp/>
            <Footer/>
        </BrowserRouter>
    </CartComponentContext>
      );
    /* En Test
     <DolarService/>
    */      
}

export default App;