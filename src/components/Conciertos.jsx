import React from 'react';
import { Link } from 'react-router-dom';
import { Concertitem } from './ConcertItem';

export const Conciertos = () =>
{
    const conciertos = JSON.parse( localStorage.getItem('conciertos') );

    return (
        <div className='content'>
            <h2>Conciertos</h2>

            <Link to="/formConcierto">Nuevo Concierto</Link>

            {
                conciertos && conciertos.map(( concierto, index ) =>
                (
                    <div key={ index } >
                        <Concertitem { ...concierto } />
                    </div>
                ))
            }
        </div>
    )
}
