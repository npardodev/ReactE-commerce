import React from 'react';

const commonStyles = {
    fontFamily: 'Arial',
    color: '#6C63FF'
}

export const commonComponentStyle = theme => {

    return ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100%',
            height: '100vh',
            justifyItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            ' & h2': {
                position: 'absolute',
                top: '5%',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.2em',
                ...commonStyles
            },
            ' & h3': {
                position: 'absolute',
                top: '12%',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1em',
                ...commonStyles

            },
            ' & img': {
                width: 'clamp(20em, 5em, 30em)',
            },
            ' & button': {
                alignSelf: 'center',
                padding: '1em',
                backgroundColor: 'aquamarine'
            }
        }

    })
};