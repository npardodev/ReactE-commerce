export const ContactStyles = theme => {

    return ({
        paper: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
            padding: '0',

        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            wrap: 'no-wrap',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    })
};