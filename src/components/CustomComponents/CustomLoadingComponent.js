import React from 'react';
import Box from "@material-ui/core/Box";

export const CustomLoadingComponent = (props) => {
    
    const {iconLoad, color, messageLoad} = props;

    return (
        <Box justifyContent="center" display="flex" flexDirection="row">
            <props.iconLoad color={color} />
            <h3>{messageLoad}</h3>
        </Box>
    )
}


