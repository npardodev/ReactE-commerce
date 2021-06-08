import React from 'react';
import { Grid } from '@material-ui/core';

export const CardStyle = theme => {

    return ({
        card: {
            position: 'relative',
            background: '#ffff',
            width: '100%',
            padding: '1em',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            borderRadius: '20px',
            transition: '0.5s',
            boxShadow: 'rgb(70 79 184 / 80%) 0px 10px 36px -25px',
            alignItems: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
            marginRight: '1rem',
            marginLeft: '2rem',

            ' & number': {
                position: 'relative',
                fontSize: '2em',
                fontWeight: '500',
            },

            ' & img': {
                width: 'clamp(5em, 7em, 10em)',
                height: ' clamp(10em, 12em, 15em)',
            },

            ' & p': {
                padding: '0.7em',
                backgroundColor: 'rgba(132, 201, 156,0.1)'
            }
        }
    })
};

/*



.container .products .card {
    position: relative;
    background: #ffff;
    padding: 1em;
    justify-content: space-between;
    display: flex;
    cursor: pointer;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: rgb(70 79 184 / 80%) 0px 10px 36px -25px;
}

.container .products .card .number {
    position: relative;
    font-size: 2em;
    font-weight: 500;
}

.container .products .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    background-color: rgb(255, 255, 255);
    margin-right: 1rem;
    margin-left: 2rem;
}

.container .products .card img {
    width: clamp(5em, 7em, 10em);
    height: clamp(10em, 12em, 15em);
}

.container .portfolio .card p {
    padding: 1rem;
    background-color: rgb(132, 201, 156);
}

*/