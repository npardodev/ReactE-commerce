import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {Footer} from './components/Footer/Footer'; 
import {DolarService} from './services/cotizacion/DolarService';
import {RouterApp} from './router/RouterApp.js';
import { BrowserRouter} from 'react-router-dom';


// Componente padre que recibe algo.
const App = props => {

  return <BrowserRouter>
            <NavBar/>
            <RouterApp/>
            <Footer/>
        </BrowserRouter>

    /* En Test
     <DolarService/>
    */      
}

export default App;