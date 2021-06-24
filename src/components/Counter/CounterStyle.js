import React from 'react';
import { flexbox } from '@material-ui/system';


export const CounterStyle = theme => {

    return ({
        counter: {
            display: 'flex',
            flexDirection: 'row',
            padding: '0 4px',
            color: 'red',
            backgroundColor: 'white',
            padding: '1em',
            textAlign: 'center',
            justifyContent: 'space-around',
            '& Input': {
                textAlign: 'center',
            },
            ' & h5': {
                color: '#6E65FF'

            }
        },

        counterWidget: {
            '& h4': {
                padding: '0.2em',
                fontSize: '0.4em',
                fontWeight: '600',
                marginBottom: '0.2em',
                color: '#083748'
            },

        }


    })
};