import React from 'react';

export const FooterStyle = theme => {

    return ({


        footer: {
            padding: '1rem',
            backgroundColor: 'white',

            '& h4': {
                fontWeight: '300',
                fontSize: '1rem',
                color: '#464FB8',
            },
            '& h5': {
                fontWeight: '100',
                fontSize: '1rem',
                color: 'black',

            }
        },
        footerColumns: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        },



    })
};