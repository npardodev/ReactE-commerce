import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

const POSITION_OFICIAL_DOLAR = 0;

/* Componente para obtener la cotización de dolar del día */
export const DolarService = () => {

    const [dolarBuy, setDolarBuy] = useState([]);
    const [dolarSold, setDolarSold] = useState([]);

    const getInfoDolar = () => {
        axios.get(API_URL) 
            .then(response => {
                setDolarBuy(response.data[POSITION_OFICIAL_DOLAR].casa.compra);
                setDolarSold(response.data[POSITION_OFICIAL_DOLAR].casa.venta)
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        getInfoDolar()
    }, []);

    return { dolarBuy, dolarSold }
}