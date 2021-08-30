import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {methodTypes} from './methodTypes.js';

export const ShippingMethod = ({delivery=false, inStore=false}) => {

    return (
        <div display="flex" justifyContent="space-around">

        { methodTypes.map((element) => {

            const {method, title, color, icon, label, style} = element;
            const state = method ==='delivery'? delivery:inStore;

            return <Tooltip title={title}>
                <IconButton color={color} disabled={!state} aria-label={label} style={style} >
                    {icon}
                </IconButton>
            </Tooltip>
        }) }        
        </div>
    )
}




