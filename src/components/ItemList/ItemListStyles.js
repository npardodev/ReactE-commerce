export const ItemListStyles = theme => {

    return ({

      conten:{
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor:'#ffff',
        },
        products: {
                postion:'relative',
                padding: '2em',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridGap: '1em',
                backgroundColor:'#ffff',
                margin: '0',
                '@media (max-width: 1200px)' : {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                  '@media (max-width: 992px)' : {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  },
                  '@media (max-width: 560px)' : {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                  
        }

    })
};

