export const CartContainerStyle = theme => {

    return ({

        cartTitle: {
            display: 'flex',
            flexDirection: 'column',
            wrap: 'no-wrap',
            alignItems: 'center',

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
        }
     
    })
}