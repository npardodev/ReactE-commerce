import { createMuiTheme } from '@material-ui/core/styles';

export const CustomTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#313680',
            main: '#464EB8',
            dark: '#6b71c6',
            contrastText: '#fff',
        },
        secondary: {
            light: '#00a152',
            main: '#4caf50 ',
            dark: '#00e676',
            contrastText: '#000',
        },
        tercery: {
            light: '#4d46b2',
            main: '#6E65FF',
            dark: '#8b83ff',
            contrastText: '#000',
        },
        fourty: { // azul marino
            light: '#052632',
            main: '#083748',
            dark: '#395f6c',
            contrastText: '#000',
        },
    },
});