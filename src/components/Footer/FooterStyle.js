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

        '@media (max-width: 1024px)': {

            footer: {
                '& h4': {
                    fontSize: '0.9rem',
                },
                '& h5': {
                    fontSize: '0.9rem',

                }
            },
        },
        '@media (max-width: 992px)': {

            footer: {
                '& h4': {
                    fontSize: '0.8rem',
                },
                '& h5': {
                    fontSize: '0.8rem',

                }
            },
            footerColumns: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                textAlign: 'center'
            },

        },



    })
};