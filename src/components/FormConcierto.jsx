import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormConcierto = () =>
{
    const getData = JSON.parse( localStorage.getItem('conciertos') );

    const [form, setForm] = useState({ pais: '', ubicacion: '', fecha: '' });
    const [conciertos, setConciertos] = useState( getData || [] );
    const navigate = useNavigate()

    const handleChange = ({ target }) =>
    {
        setForm(
        {
            ...form,
            [ target.name ]: target.value
        });
    }

    const handleSubmit = ( evt ) =>
    {
        evt.preventDefault();

        setConciertos([ ...conciertos, form ]);
        localStorage.setItem('conciertos', JSON.stringify([ ...conciertos, form ]));

        navigate('/conciertos');
    }

    return (
        <div>
            <h2>Nuevo Concierto</h2>
            <form onSubmit={ handleSubmit }>
                <div className='input-form'>
                    <label>Pais</label>
                    <input
                        type="text"
                        name="pais"
                        onChange={ handleChange }
                    />
                </div>

                <div className='input-form'>
                    <label>Ubicacion</label>
                    <input
                        type="text"
                        name="ubicacion"
                        onChange={ handleChange }
                    />
                </div>

                <div className='input-form'>
                    <label>Fecha</label>
                    <input
                        type="text"
                        name="fecha"
                        onChange={ handleChange }
                    />
                </div>

                <button>Guardar</button>
            </form>
        </div>
    )
}
