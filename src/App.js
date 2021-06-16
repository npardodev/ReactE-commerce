import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar'; 
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {Home} from './components/Home/Home';
import {Counter} from './components/Counter/Counter';
import {ContactForm} from './components/ContactForm/ContactForm';
import {Carrousel} from './components/Carrousel/Carrousel';
import {DolarService} from './services/cotizacion/DolarService';

import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';


// Componente padre que recibe algo.
const App = props => {

  return <React.Fragment>
      
      <NavBar/>
      <body>
      <Home 
          title="Nombre Tienda" 
          subtitle="Todo lo que buscas en tecnologia"
          slogan="en un solo lugar..." 
          buttonLabel="Conocenos"
          action = { () => console.log('test')}
      />
      <ItemListContainer/>
      <ItemDetailContainer/>
      </body>

    {/* En Test

    <ItemDetailContainer/>
     <DolarService/>
    */}      
    </React.Fragment>
}

export default App;