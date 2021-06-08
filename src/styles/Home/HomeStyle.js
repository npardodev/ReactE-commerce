import React from 'react';

const commonStyles = {}


export const HomeStyle = theme => {

    return ({
        home: {
            minHeight: '100vh',
            textAlign: 'center',
            backgroundColor: 'white',
            backgroundImage: 'url("./img/home.svg")',
            webkitBackgroundSize: 'cover',
            mozBackgroundSize: 'cover',
            oBackgroundSize: 'cover',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            wrap: 'no-wrap',
            alignItems: 'center',
            textAlign: 'center',

            '& h1': {
                padding: '10%',
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: '900'
            },
            '& h2': {
                paddingRight: '20%',
                textAlign: 'center'
            },
            '& button': {
                marginTop: '7%',
                width: '14%',
                heigth: '10em',
                padding: '0.5em',
                color: '#00000',
                fontSize: '1em',
                border: 'none',
                backgroundColor: '#6E65FF',
                boxShadow: '0 4px 2px -2px gray',
                color: 'white',
                fontWeight: '600',
            }
        }
    })
};