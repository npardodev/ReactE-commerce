export const AboutUsContainerStyle = theme => {

    return ({

        section: {
            witdh: '100%',
            heigth: '100vh',
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1em',
            backgroundColor: '#FFFFF',
            margin: '2em',
            padding: '3em',

            ' & hover': {
                width: '100%',
                height: 'auto',
            },

            ' & img': {
                width: 'clamp(14em, 16em, 18em)',
                height: 'clamp(14em, 16em, 18em)',
                display: 'block',
                margin: 'auto',
            },
        },
        aboutInfo: {

            '& p': {
                textAlign: 'start',
                textjustify: 'inter-word',
                paddingTop: '1em',
                fontSize: '1.3rem',
                fontWeight: '100',
                color: '#706f6f',
                bottom: '10%',
            },

        },

        '@media (max-width: 992px)': {

            container: {
                gridTemplateColumns: 'repeat(1, 1fr)',
                ' & img': {
                    width: 'clamp(14em, 16em, 18em)',
                    height: 'clamp(14em, 16em, 18em)',
                }
            },
            aboutInfo: {
                '& h2': {
                    paddingTop: '1em',
                    textAlign: 'center',
                    align: 'center',
                    fontWeight: '600',
                    color: '#083748',
                },
                '& p': {
                    textAlign: 'start',
                    textjustify: 'inter-word',
                    padding: '1em',
                    fontSize: '1.2rem',
                    fontWeight: '100',
                    color: '#706f6f',
                    bottom: '10%',
                },
            },
        }
    })
};