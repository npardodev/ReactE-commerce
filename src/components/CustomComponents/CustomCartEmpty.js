import React from 'react';
import { useHistory } from 'react-router-dom';
import { CommonComponent } from './../CommonComponents/CommonComponent.js'
import imgEmptyCart from '../../assets/img/emptyCart.svg';

export const CustomCartEmpty = (props) => {

    const history = useHistory();
    const BackToHome = () => {
        history.push(`/`);
    }

    return <CommonComponent
        title = 'A comprar!'
        subtitle = 'Parece que tu carrito está vacio...'
        image = { imgEmptyCart }
        alt = 'Eror - carrito vacio'
        buttonLabel = 'Volver'
        action = { BackToHome }
        />
}