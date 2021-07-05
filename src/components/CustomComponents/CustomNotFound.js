import React from 'react';
import {useHistory} from 'react-router-dom';
import {CommonComponent} from './../CommonComponents/CommonComponent.js'
import imgNotFound from '../../assets/img/not_found.svg';

export const CustomNotFound = (props) => {
    
    const history = useHistory();

    const BackToHome = () =>{
        history.push(`/`);
    }

    return (
        <>
            <CommonComponent 
                title='Ups!'
                subtitle='Página no Encontrada ...'
                image={imgNotFound}
                alt='Eror 404 - Página no encontrada'
                buttonLabel='Volver' 
                action= {BackToHome}
            />
        </>

    )
}


