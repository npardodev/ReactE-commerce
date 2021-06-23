import React from 'react';


export const ItemDetailStyle = theme => {

    return ({
        productItem: {

            padding: '2em',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
            margin: '1rem',
            padding: '3rem',

            ' & img': {
                width: '100%',
                height: 'auto',
            },

            ' & productDetails': {
                display: 'flex',
                flexDirection: 'column',
            }
        },

        productDetails: {
            '& h3': {
                textAlign: 'start',
                padding: '1rem',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#464EB8',
            },

            '& h4': {
                textAlign: 'start',
                paddingLeft: '1rem',
                paddingTop: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: '100',
            },

            '& p': {
                textAlign: 'start',
                textAlign: 'justify',
                textjustify: 'inter-word',
                padding: '1rem',
                marginRight: '20%',
                fontSize: '1rem',
                fontWeight: '100',
                color: '#706f6f',
            },


            ' & button': {
                width: '25%',
                fontSize: '1rem',
                color: '#ffff',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2 rem',
                border: '#a89283',
                padding: '0.3 rem',
                marginLeft: '1rem',
                paddingTop: '0.5rem',
            },

            '& div': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '40%',
                paddingBottom: '0.8rem',



            }

        },

        actualPrice: {
            fontSize: '1rem'
        },

        offerPrice: {
            fontSize: '12rem',
            textDecoration: 'line-through',
        },

        CustomSelectComponent: {
            width: '20%',
            textAlign: 'start',
            padding: '0.5rem',
            marginLeft: ' 1rem',
            fontSize: '0.7rem',
            border: 'none',
        }


    })
};