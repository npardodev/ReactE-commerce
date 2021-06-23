import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import {Link } from 'react-router-dom';
import { makeStyles, Typography, } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import {FooterStyle} from './FooterStyle.js';

const useStyles = makeStyles((theme) => FooterStyle(theme));


export const Footer = () => {

    const classes = useStyles();

    return (<>
            <footer>
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
                            <InstagramIcon color="primary" />
                            <FacebookIcon color="primary" />  
                            <MailOutlinedIcon color="primary" />                          
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        balutech.com &reg; Todos los derechos reservados 
                    </Box>
                </Container>
            </footer>
            </>)
}
