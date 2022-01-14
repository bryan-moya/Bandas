import React from 'react';

export const Concertitem = ({ pais, ubicacion, fecha }) =>
{
    return (
        <div className='concert-item'>
            <p>País: { pais }</p>
            <p>Ubicación: { ubicacion }</p>
            <p>Fecha: { fecha }</p>
        </div>
    )
}
