import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {Footer} from './components/Footer/Footer'; 
import {DolarService} from './services/cotizacion/DolarService';
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';
import { CartComponentContext} from './Context/CartContext/CartContext.js';


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