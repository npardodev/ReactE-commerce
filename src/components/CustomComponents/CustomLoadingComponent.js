import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';


export const CustomLoadingComponent = (props) => {
    
    const {iconLoad, color, messageLoad} = props;

    return (
        <>
            <h3>{messageLoad}</h3>
            <props.iconLoad color={color} />
        </>

    )
}


