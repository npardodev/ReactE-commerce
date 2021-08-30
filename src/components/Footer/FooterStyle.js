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
            textAlign: "center",
            flexDirection: "row",

            '& div': {
                padding: '0',
                margin: '1.3em',

            },
            '@media (max-width: 560px)': {

                flexDirection: "column-reverse",
            },

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
        '@media (max-width: 560px)': {

            footer: {
                '& h4': {
                    fontSize: '0.8rem',
                },
                '& h5': {
                    fontSize: '0.8rem',
                }
            },
        },

    })
};