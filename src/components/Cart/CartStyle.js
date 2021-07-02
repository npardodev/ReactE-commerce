export const CartStyle = theme => {
    return ({

        cartItem: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        itemBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        stockBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        priceBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            '&>h4': {
                color: '#00FFB4',
                '&>mark': {
                    backgroundColor: '#00FFB4',
                },
            },

            '&>h3': {
                color: '#083748',

            },
        }

    })
}