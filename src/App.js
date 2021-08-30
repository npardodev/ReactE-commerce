import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {Footer} from './components/Footer/Footer'; 
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';
import { CartComponentContext} from './Context/CartContext/CartContext.js';
import { OrderComponentContext} from './Context/OrderContext/OrderContext.js';
import { ThemeProvider } from '@material-ui/styles';
import { CustomTheme } from './../src/styles/CustomTheme.js';
import {SocialIcon} from '../src/components/SocialIcons/SocialIcon.js'

const App = props => {

  return (
    <CartComponentContext>
        <OrderComponentContext>
                <ThemeProvider theme={CustomTheme}>
                    <BrowserRouter>
                        <NavBar/>
                        <RouterApp/>
                        <SocialIcon/>
                        <Footer/> 
                    </BrowserRouter>
                </ThemeProvider>
        </OrderComponentContext>
    </CartComponentContext>
    );  
}

export default App;