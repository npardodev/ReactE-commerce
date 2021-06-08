import React from 'react';

import { makeStyles } from '@material-ui/core';
import { HomeStyle } from '../../styles/Home/HomeStyle.js'

const useStyle = makeStyles ((theme) => HomeStyle(theme));

export const Home = ({ title, subtitle, slogan, buttonLabel,action }) => {

    const classes = useStyle();

    return (
        <div className={classes.home}>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
            <h3>  {slogan} </h3>
            <button onClick= {action()}>  {buttonLabel}</button>
        </div>

    )
}
