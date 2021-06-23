import React from 'react';



export const commonComponentStyle = theme => {

    return ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '100vh',
            justifyItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            ' & h2': {
                position: 'absolute',
                top: '2rem',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.2em',
                color: '#464EB8'
            },
            ' & h3': {
                position: 'absolute',
                top: '12%',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1.3em',
                color: '#6E65FF'
            },
            ' & img': {
                width: 'clamp(18em, 20em, 22em)',
                heigth: 'clamp(18em, 20em, 22em)',

            },

        }

    })
};