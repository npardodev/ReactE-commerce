import React from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StoreIcon from '@material-ui/icons/Store';

export const methodTypes = [{
        method: 'delivery',
        title: 'Envio a domicilio',
        color: 'secondary',
        icon: < LocalShippingIcon /> ,
        label: "LocalShippingIcon",
        style: { cursor: 'default' },
    },
    {
        method: 'inStore',
        title: 'Retiro en tienda',
        color: 'primary',
        icon: < StoreIcon /> ,
        label: "StoreIcon",
        style: { cursor: 'default' },
    },
];