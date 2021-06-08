import React from 'react';
import { makeStyles } from '@material-ui/core';

import { commonComponentStyle } from './commonComponentStyle.js'

const useStyle = makeStyles ((theme) => commonComponentStyle(theme));

const commonStyles = {
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bold',
}

export const CommonComponent = ({title, substitle, image, alt, buttonLabel, action}) => {

    const classes = useStyle ();

    const commonAction = () => {
        action();
        console.log('Ejecucion de boton comun')
    }

    return (
        <>
        <section className={classes.container}>
            <div>
                <h2> {title} </h2>
                <h3> {substitle} </h3>
                <img src={image} alt={alt} />
            </div>
            <button onClick={commonAction}> {buttonLabel} </button>
        </section>

    </>
    )
};