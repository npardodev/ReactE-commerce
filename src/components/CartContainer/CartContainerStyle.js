export const CartContainerStyle = theme => {

    return ({

        cartTitle: {
            display: 'flex',
            flexDirection: 'column',
            wrap: 'no-wrap',
            alignItems: 'center',
            color: '#083748',

            '& h1': {
                padding: '1rem',
                textAlign: 'center',
                fontSize: '2.2rem',
                fontWeight: '900',
            },
            '& h2': {
                textAlign: 'center',
                color: ''
            }
        },

        cartContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            padding: '1em',

            '& button': {
                marginTop: '2em',

            }
        }

    })
}