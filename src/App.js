import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {Home} from './components/Home/Home';
import {Products} from './components/Products/Products';

// Componente padre que recibe algo.
const App = props => {

  return <React.Fragment>
      
      <NavBar/> 
      <body>
      <Home/>
      <Products/>
      </body>

    </React.Fragment>
}

export default App;