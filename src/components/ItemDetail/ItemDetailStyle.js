export const ItemDetailStyle = theme => {

    return ({

        StockContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        productItem: {

            padding: '0.4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '2em',
            backgroundColor: '#FFFFF',
            margin: '1rem',

            ' & hover': {
                width: '100%',
                height: 'auto',
            },

            ' & img': {
                width: '80%',
                height: 'auto',

            },

            '&productDetails': {
                display: 'flex',
                flexDirection: 'column',
                flewWrap: 'wrap',
            }
        },

        productDetails: {
            '& h3': {
                textAlign: 'start',
                padding: '0.4rem',
                fontSize: '1.9rem',
                fontWeight: '600',
                color: '#464EB8',
                marign: '0',

            },

            '& h4': {
                textAlign: 'start',
                paddingLeft: '1em',
                fontSize: '1em',
                fontWeight: '100',
                marign: '0',
            },

            '& h6': {
                fontWeight: '300',
            },

            '& p': {
                textAlign: 'start',
                textjustify: 'inter-word',
                padding: '0.4rem',
                marginRight: '20%',
                fontSize: '1rem',
                fontWeight: '100',
                color: '#706f6f',
            },

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
        },

        stockDetails: {
            display: 'flex',
            flexDirection: 'row',
            flewWrap: 'nowrap',
            justifyContent: 'start',
            textAlign: 'start',
            gap: '2rem',

        },

        '@media (max-width: 992px)': {

            productItem: {

                gridTemplateColumns: 'repeat(1, 1fr)',
                ' & img': {
                    width: '50%',
                    height: 'auto',
                    display: 'block',
                    margin: 'auto',
                }
            },
            productDetails: {
                '& h3': {
                    textAlign: 'center',
                    padding: '0.2em',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#464EB8',
                },

                '& h4': {
                    textAlign: 'start',
                    paddingLeft: '1rem',
                    padding: '0.2em',
                    fontSize: '1.2rem',
                    fontWeight: '100',
                },

                '& h6': {
                    fontWeight: '300',
                },

                '& p': {
                    textAlign: 'center',
                    textjustify: 'inter-word',
                    padding: '0.4rem',
                    marginRight: '20%',
                    fontSize: '1rem',
                    fontWeight: '100',
                    color: '#706f6f',
                },

            },
        }


    })
};