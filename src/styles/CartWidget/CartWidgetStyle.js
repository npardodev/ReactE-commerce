import React from 'react';

const commonStyles = {}

export const CartWidgetStyle = theme => {

    return ({

    })
};


export const CartWidgetBadgeStyle = theme => {

    return ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px'
        }
    })
};