export const CounterStyle = theme => {

    return ({
        counter: {
            display: 'flex',
            flexDirection: 'row',
            color: 'red',
            backgroundColor: 'white',
            padding: '1em',
            textAlign: 'center',
            justifyContent: 'space-around',
            '& Input': {
                textAlign: 'center',
            },
            ' & h5': {
                color: '#6E65FF'

            }
        },

        counterWidget: {
            '& h4': {
                padding: '0.2em',
                fontSize: '0.4em',
                fontWeight: '600',
                marginBottom: '0.2em',
                color: '#083748'
            },
        },
        Stock: {

            '& h4': {
                color: '#22F1A2',
                '& mark': {
                    backgroundColor: '#c4eddd',
                },
            },
            '& h5': {
                color: '#a0555d',
            }
        },

    })
};