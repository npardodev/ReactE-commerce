import React from 'react';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {FooterStyle} from './FooterStyle.js';
import {FooterColumns} from './FooterColumns.js';
import {Copyright} from './Copyrigth.js';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {

    const classes = useStyles();

    return (
            <footer>
                <Divider variant="middle" />
                <Container className={classes.footer} >
                    <FooterColumns/>
                    <Copyright webName="BaluTech"/>
                </Container>
            </footer>)
}


