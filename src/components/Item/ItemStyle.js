import React from 'react';
import { Grid } from '@material-ui/core';

export const ItemStyle = theme => {

    return ({
        card: {
            background: '#ffff',
            width: '90%',
            height: '100%',
            borderRadius: '20px',
            transition: '0.5s',
            boxShadow: 'rgb(70 79 184 / 80%) 0px 10px 36px -25px',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',

            ' & h4': {
                fontSize: '1em',
                fontWeight: '500',
            },

            ' & img': {
                width: 'clamp(7em, 8em, 10em)',
                height: ' clamp(7em, 9em, 10em)',
                cursor: 'pointer',

            },

            ' & p': {
                padding: '0em',
                fontSize: '0.8em',
                margin: '0',

            }
        }
    })
};