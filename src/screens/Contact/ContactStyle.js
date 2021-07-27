export const ContactStyle = theme => {

    return ({
        section: {
            witdh: '100%',
            heigth: '100vh',
        },
        contactContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
            margin: '2em',
            padding: '3em',

        },
        map: {
            textAling: 'center',
            alignItems: 'center',
            display: 'block',
            margin: '0',

            '& img': {
                display: 'block',
                margin: 'auto',
                textAling: 'center',
                alignItems: 'center',
            }
        },
        follow: {
            backgroundColor: 'white',
            borderRadius: '20px',
            color: '#083748',
            textAlign: 'center',
            alignItems: 'center',
            padding: '1em',

            '& h2': {
                padding: '1em',
                fontSize: '1.8em',
                fontWeight: '900',
            },
        },
        icons: {
            padding: '1em',
            color: '#464EB8',
            display: 'flex',
            flexWrap: 'no-wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3em',

            '& h4': {
                color: '#083748',
                fontWidth: '1.9em',
                fontWeight: '300',
            },

        },
        info: {
            padding: '1em',
            color: 'white',
            display: 'flex',
            flexWrap: 'no-wrap',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '2em',

            '& div': {
                textAlign: 'center',
                alignItems: 'center',
            },

            '& h4, h5': {
                padding: '0.5em',
                fontWidth: '1.8em',
                fontWeight: '100',
            },

            '& .MuiSvgIcon-root': {
                color: 'white',
            },
        },

        '@media (max-width: 992px)': {

            contactContainer: {
                gridTemplateColumns: 'repeat(1, 1fr)',
                '& img': {

                }
            },

        }
    })
};