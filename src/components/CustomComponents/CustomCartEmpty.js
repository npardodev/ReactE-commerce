import React from 'react';
import {useHistory} from 'react-router-dom';
import {CommonComponent} from './../CommonComponents/CommonComponent.js'

export const CustomCartEmpty = (props) => {
    
    const history = useHistory();

    const BackToHome = () =>{
        history.push(`/`);
    }

    return (
        <>
            <CommonComponent 
                title='A comprar!'
                subtitle='Parece que tu carrito está vacio...'
                image='./img/emptyCart.svg'
                alt='Eror - carrito vacio'
                buttonLabel='Volver' 
                action= {BackToHome}
            />
        </>

    )
}


