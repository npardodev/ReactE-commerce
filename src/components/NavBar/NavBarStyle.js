import React from 'react';


export const NavBarStyle = theme => {

    return ({

        navbar: {
            boxShadow: '0 4px 2px -2px gray',
            background: 'white',
            width: '100%',
            textAlign: 'center',
            listStyleType: 'none',
            backgroundColor: 'white',
        },

        navbarLogo: {
            color: '#ffff',
            justifySelf: 'start',
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '1rem',
        },

        navMenu: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            listStyleType: 'none',
            backgroundColor: 'white',

        },

        navMenuActive: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            listStyleType: 'none',
            backgroundColor: 'white',
            opacity: '1',
            transition: 'all 0.5s ease',
            zIndex: '1',
        },

        navItem: {
            display: 'flex',
            alignItems: 'center',
            height: '80px',

        },

        navLinks: {
            color: '#083748',
            textDecoration: 'none',
            padding: '0.5 rem 1 rem',
            '&:hover': {
                backgroundColor: '#083748',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#6E65FF',
                borderRadius: '4px',
                transition: 'all 0.2s ease-out',
                color: '#ffff',
                transition: '0.9s',
                padding: '0.5rem',
                fontWeight: 'bold'
            }
        },

        menuIcon: {
            display: 'none',
        },



        dropdownMenuClicked: {
            display: 'none',
        },

        dropdownMenu: {
            position: 'absolute',
            top: '75px',
            listStyle: 'none',
            textAlign: 'start',
            border: '1 px solid black',
            boxShadow: ' 0 0 10 px #719ECE',

            ' & li': {
                background: 'white',
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: '#083748',
                    borderRadius: '4px',
                    color: '#ffff',
                    transition: '0.9s',
                }
            },
        },
        dropdownLink: {
            display: 'block',
            height: '100%',
            width: '100%',
            textDecoration: 'none',
            color: 'black',
            padding: '0.7rem',
            borderLeft: '2px solid #6E65FF',

            '&:hover': {
                color: '#ffff',
            }
        }

    })
};

/* MIOOOOOOOO

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

*/