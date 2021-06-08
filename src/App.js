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
      <Home 
          title="Nombre Tienda" 
          subtitle="Todo lo que buscas en tecnologia"
          slogan="en un solo lugar..." 
          buttonLabel="Conocenos"
          action = { () => console.log('test')}
      />
      <ItemListContainer/>
      
      {/*
      --- PARA TEST ----
         <CommonComponent 
          title="Ups!" 
          subtitle="Parece que nos perdimos"
          image="./img/not_found.svg" 
          alt="Imagen página no encontrada" 
          buttonLabel="Volver"
          action = { () => console.log('Ejecutado')}
      />
      <ContactForm/>
      -----------------
      */}
      </body>

    </React.Fragment>
}

export default App;