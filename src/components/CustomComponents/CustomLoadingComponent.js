import React from 'react';

export const CustomLoadingComponent = (props) => {
    
    const {iconLoad, color, messageLoad} = props;

    return (
        <>
            <h3>{messageLoad}</h3>
            <props.iconLoad color={color} />
        </>

    )
}


