import React from 'react';
import {Box, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import {FooterStyle} from './FooterStyle.js';
import Divider from '@material-ui/core/Divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Copyright} from './Copyrigth.js';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {

    const classes = useStyles();

    return (
            <footer>
            <Divider variant="middle" />

                <Container className={classes.footer} >
                    <Box className={classes.footerColumns} >
                        <Box p={1} >
                            <h4>Horarios de Atencion</h4>
                            <h5>Martes a Viernes de 10:00 a 20:00</h5>
                            <h5>Sabados de 09:00 a 20:00</h5>
                            <h5>Domingos de 09:00 a 13:00</h5>
                        </Box>
                        <Box p={1} >
                        <h4>Horarios de Atencion</h4>
                            <h5>Pedidos y Envios</h5>
                            <h5>11332255</h5>
                            <h5>contacto@e-commerce.com</h5>
                        </Box>
                        <Box p={1} >
                            <h4 >Seguinos</h4>
                            <InstagramIcon color="primary" fontSize="large" />
                            <FacebookIcon color="primary" fontSize="large" />
                            <LinkedInIcon color="primary" fontSize="large" />  
                        </Box>
                    </Box>
                    <Copyright/>
                </Container>
            </footer>)
}
