import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StoreIcon from '@material-ui/icons/Store';

const methodTypes = [
    {
        method: 'delivery',
        title: 'Envio a domicilio',
        color: 'secondary',
        icon: <LocalShippingIcon/>,
        label: "LocalShippingIcon"
    },
    {
        method: 'inStore',
        title: 'Retiro en tienda',
        color: 'primary',
        icon: <StoreIcon/>,
        label: "StoreIcon"
    },
];

export const ShippingMethod = ({delivery=false, inStore=false}) => {

    return (
        <div display="flex" justifyContent="space-around">

        { methodTypes.map((element) => {
            const state = element.method ==='delivery'? delivery:inStore;

            return <Tooltip title={element.title}>
                <IconButton color={element.color} disabled={!state} aria-label={element.label}>
                    {element.icon}
                </IconButton>
            </Tooltip>
        }) }        
        </div>
    )
}




