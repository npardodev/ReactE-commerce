import React from 'react'

export const Primero = () => {
    return (
        <div>
            <h1>Soy el 1!</h1>
        </div>
    )
}

export const Segundo = () => {
    return (
        <div>
            <h1>Soy el 2!</h1>
        </div>
    )
}

export const Tercero = props => {

    const history = useHistory();
    const { id } = useParams();
    return (
        <div>
            <h1>Soy el 3 con id ${id} !</h1>
        </div>
    )
}

export const Cuarto = () => {
    return (
        <div>
            <h1>Soy el 4!</h1>
        </div>
    )
}
