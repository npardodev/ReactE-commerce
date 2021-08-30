import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const socialFooterIcons = [
    <InstagramIcon color="primary" fontSize="large" />,
    <FacebookIcon color="primary" fontSize="large" />,
    <LinkedInIcon color="primary" fontSize="large" />,
];

export const InfoColumns = [
    {
        title : 'Horarios de Atencion',
        content: [
            'Lunes a Viernes de 10:00 a 20:00',
            'Sabados de 09:00 a 22:00',
            'Domingos de 09:00 a 13:00']
    },
    {
        title : 'Pedidos y Envios',
        content: [
            '11332255',
            '011 4335-2310',
            'contacto@e-commerce.com']
    },
]
