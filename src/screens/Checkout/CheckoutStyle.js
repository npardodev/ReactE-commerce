export const CheckoutStyle = theme => {

    return ({

        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
            borderRadius: 20,
            borderColor: "#0000",

        },
        stepper: {
            padding: theme.spacing(3, 0, 5),
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },


        //Order View
        listItem: {
            padding: theme.spacing(1, 0),
        },
        total: {
            fontWeight: 700,
        },
        title: {
            marginTop: theme.spacing(2),
        },

    })
}