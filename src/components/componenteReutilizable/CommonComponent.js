import React from 'react';
import '../../styles/styles.css';
import { makeStyles } from '@material-ui/core';

import { commonComponentStyle } from './commonComponentStyle.js'

const useStyle = makeStyles ((theme) => commonComponentStyle(theme));

const commonStyles = {
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bold',
}

export const CommonComponent = ({title, image, alt, buttonLabel}) => {

	/* Ejecuta estos estilos y guardalos aca */
    const classes = useStyle ();

    return (
        <>
        <section>
            <div className={classes.container}>
                <h1> {title} </h1>
                <img src={image} alt={alt} />
            </div>
            <button> {buttonLabel} </button>
        </section>

    </>
    )
};