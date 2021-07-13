import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {Footer} from './components/Footer/Footer'; 
import {DolarService} from './services/cotizacion/DolarService';
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';
import { CartComponentContext} from './Context/CartContext/CartContext.js';
import { OrderComponentContext} from './Context/OrderContext/OrderContext.js';
import { ThemeProvider } from '@material-ui/styles';
import { CustomTheme } from './../src/styles/CustomTheme.js';
import {SocialIconButtons} from '../src/components/test.js'



const App = props => {

  return (
    <CartComponentContext>
        <OrderComponentContext>
                <ThemeProvider theme={CustomTheme}>
                    <BrowserRouter>
                        <NavBar/>
                        <RouterApp/>
                        <SocialIconButtons/>
                        <Footer/> 
                    </BrowserRouter>
                </ThemeProvider>
        </OrderComponentContext>
    </CartComponentContext>

    );
    /* En Test
     <DolarService/>
    */      
}

export default App;