export const commonComponentStyle = theme => {

    return ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            heigth: '100vh',
            width: '100%',
            ' & h2': {
                top: '1rem',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '2.2em',
                color: '#464EB8'
            },
            ' & h3': {
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.3em',
                color: '#6E65FF'
            },
            ' & img': {
                width: 'clamp(16em, 18em, 20em)',
                heigth: 'clamp(16em, 18em, 20em)',

            },

            ' & button': {
                marginBottom: '3em',
            },
        }

    })
};