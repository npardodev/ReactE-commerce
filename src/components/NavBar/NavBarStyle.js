import React from 'react';

const commonStyles = {
    fontFamily: 'Arial',
}

export const NavBarStyle = theme => {

    return ({
        nav: {

            boxShadow: '0 4px 2px -2px gray',
            '& ul': {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                textAlign: 'center',
                listStyleType: 'none',
                backgroundColor: 'white',
                ...commonStyles,

            },
            '& ul & li': {
                listStyle: 'none',
                color: 'rgb(0, 0, 0)',
                backgroundColor: 'yellow',
            },
            ' & ul > li > a': {
                fontSize: '1rem',
                fontWeight: '300',
                textDecoration: 'none',
                width: '100%',
                color: 'black',


            },
            ' & ul > li > a:hover': {
                color: 'rgb(48, 48, 48)',
                transition: '0.9s',
                fontSize: '1.09em',
                textDecoration: 'underline',
            }
        },
        logo: {
            ' & img': {
                width: 'clamp(2em, 3em, 5em)',
                height: 'clamp(2em, 3em, 5em)',
                padding: '0.2em',
                margin: '0.8em'
            }
        },

        dropdown: {
            overflow: 'hidden',
        },
        dropdownContent: {
            display: 'none',
            position: 'absolute',
            zIndex: '1',
        }

    })
};