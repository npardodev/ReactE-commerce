import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';


// Componente padre que recibe algo.
const App = props => {

  return <React.Fragment>
      <NavBar/> 
      <h2>Contenido</h2>
    </React.Fragment>
}

export default App;