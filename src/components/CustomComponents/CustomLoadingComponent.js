import React from 'react';

export const CustomLoadingComponent = (props) => {
    
    const {iconLoad, color, messageLoad} = props;

    return (
        <>
            <props.iconLoad color={color} />
            <h3>{messageLoad}</h3>
        </>

    )
}


