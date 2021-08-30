export const HomeStyle = theme => {

    return ({
        home: {
            minHeight: '100vh',
            textAlign: 'center',
            backgroundColor: 'white',
            backgroundImage: 'url("./img/home.svg")',
            webkitBackgroundSize: 'cover',
            mozBackgroundSize: 'cover',
            oBackgroundSize: 'cover',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            wrap: 'no-wrap',
            alignItems: 'center',
            color: '#083748',

            '& h1': {
                padding: '1rem',
                textAlign: 'center',
                fontSize: '3em',
                fontWeight: '900',
            },
            '& h2': {
                textAlign: 'center',
                color: ''
            },
        },


    })
};