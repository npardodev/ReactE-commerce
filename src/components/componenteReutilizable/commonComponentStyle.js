import React from 'react';

const commonStyles = {
    color: 'blue',
    fontFamily: 'Arial',
    fontWeight: '300',

}

export const commonComponentStyle = theme => {

    return ({
        container: {
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '50vh',
            justifyItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            ' & > h1': {
                position: 'absolute',
                top: '5%',
                fontFamily: 'Zillaa slab',
                fontWeight: '100',
                color: '#4b4b4b',
                ...commonStyles
            },
            ' & > img': {
                width: 'clamp(20em, 25em, 30em)'
            },
            ' & button': {
                alignSelf: 'center',
                marginRight: '1em',
                backgroundColor: 'aquamarine'
            }
        }
    })
};