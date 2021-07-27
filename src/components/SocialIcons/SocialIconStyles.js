export const SocialIconStyle = theme => {

    return ({
        margin: {
            margin: theme.spacing(3),
            padding: theme.spacing(1),
        },

        float: {
            position: 'fixed',
            width: '60px',
            height: '60px',
            bottom: '40px',
            right: '40px',
            borderRadius: '50px',
            textAlign: 'center',
            fontSize: '30px',
            boxShadow: '2px 2px 3px #999',
            zIndex: '100',

            '& img': {
                height: '2em',
                width: '2em',
            }
        },
        myfloat: {
            marginTop: '16px',
        }
    });
}