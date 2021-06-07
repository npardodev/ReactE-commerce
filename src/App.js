import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {Home} from './components/Home/Home';
import {Counter} from './components/Counter/Counter';
import {ContactForm} from './components/ContactForm/ContactForm';


import {CommonComponent} from './components/componenteReutilizable/CommonComponent';

// Componente padre que recibe algo.
const App = props => {

  return <React.Fragment>
      
      <NavBar/>
      <body>
      <CommonComponent title="Test" img="./img/logo.svg" alt="Descrip" buttonLabel="Volver"/>
      <Home/>
      <ItemListContainer/>
      <Counter/>
      {/*  
      <ContactForm/>
      */}
      </body>

    </React.Fragment>
}

export default App;