import React from 'react';
import { Grid } from '@material-ui/core';

export const ItemListStyles = theme => {

    return ({
        products: {
                width: '100%',
                padding: '2em',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridGap: '1em',
                backgroundColor: 'rgb(212, 215, 222)',
                margin: '0',
                '@media (max-width: 1200px)' : {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                  '@media (max-width: 992px)' : {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  },
                  '@media (max-width: 560px)' : {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                  
        }

    })
};

