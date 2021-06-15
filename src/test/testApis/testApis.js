import React, { useEffect } from 'react';

import axios from 'axios' /** Hay que instalarlo eh */

import { makeStyles } from '@material-ui/core';

import { NavBarStyle } from '../../styles/NavBar/NavBarStyle.js'

const useStyle = makeStyles((theme) => NavBarStyle(theme));



/*
    Ejemplo con poke Api

    Nos retorna una lista paginada de elementos (20 por default),
     y solo queremos 10 por ejemplo


     eJEMPLO DE OTRAS APIS:
     https://github.com/public-apis/public-apis
*/


const URL = 'URL POKE API CON LIMIT EN 100';

const PokeApiExample = () => {

        const [pokemons, setPokemons] = useState([]);

        const getPokemons = () => {
            fetch(URL) //Interpreta por defecto que es get en este caso
                .then(response => response.json())
                .then(data => console.log(data.results))
        }

        const getPokemonsConAxios = () => {
                axios.get('/getMensajes') /*Axios devuelve una promise */
                axios.then(response => {
                        console.log(response);

                    })
                    .catch(error => console.log(error);
                    }

                useEffect(() => {
                    //getPokemons()
                }, [])

                return ( <
                    >
                    <
                    h1 > Hola soy poke Api < /h1> {
                    pokemons.map((pokemon, index) => < li key = { index } > { pokemon.name } < /li> )} < / > )
                }

                export default testApis

                99979
                /*
                 {}
                 */