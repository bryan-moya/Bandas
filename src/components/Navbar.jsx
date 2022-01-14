import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () =>
{
    return (
        <>
            <div className='navbar'>
                <li className='secondary-box'>
                    <Link to="/historia">Historia</Link>
                </li>
                <li className='secondary-box'>
                    <Link to="/discografia">Discografia</Link>
                </li>
                <li className='secondary-box'>
                    <Link to="/conciertos">Concierto</Link>
                </li>
            </div>
        </>
    )
}