import React from 'react';


export const ProductDetailStyle = theme => {

    return ({
        productItem: {
            position: 'relative',
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

            ' & actualPrice': {
                fontSize: '1rem'
            },

            ' & select': {
                width: '20%',
                textAlign: 'start',
                padding: '0.5rem',
                marginLeft: ' 1rem',
                fontSize: '0.7rem',
                border: 'none',
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
            }

        },
        offerPrice: {
            fontSize: '1rem',
            textDecoration: 'line-through',
        }

    })
};



/* ----------------------------------
---------- Product Details ----------
------------------------------------*/
/*
.container .productItem {
    position: relative;
    width: 100%;
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    background-color: var(--primary);
    margin: 1rem;
    padding: 3rem;
}

.productItem img {
    width: 100%;
    height: auto;
}

.productDetails {
    display: flex;
    flex-direction: column;
}

.productDetails h3 {
    text-align: start;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
}

.productDetails h4 {
    text-align: start;
    padding-left: 1rem;
    padding-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 100;
}

.productDetails .actualPrice {
    font-size: 1rem;
}

.productDetails .offerPrice {
    font-size: 1rem;
    text-decoration: line-through;
}

.productDetails p {
    text-align: start;
    text-align: justify;
    text-justify: inter-word;
    padding: 1rem;
    margin-right: 20%;
    font-size: 1rem;
    font-weight: 100;
    color: #CBCBCB;
}

.productDetails select {
    width: 20%;
    text-align: start;
    padding: 0.5rem;
    margin-left: 1rem;
    font-size: 0.7rem;
    border: none;
}

.productDetails button {
    background-color: var(--tercery);
    width: 25%;
    font-size: 1rem;
    color: var(--primary);
    text-align: start;
    text-align: center;
    margin: 2rem;
    border: #a89283;
    padding: 0.3rem;
}

.productDetails>div {
    display: flex;
}

.productDetails>div h4 {
    font-size: 1rem;
}
*/