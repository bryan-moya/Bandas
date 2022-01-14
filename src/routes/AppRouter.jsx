import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Navbar, Grupo, Historia, Discografia, Conciertos, FormConcierto } from '../components';

export const AppRouter = () =>
{
    return (
        <BrowserRouter>
            <div className='container'>
                <span className='primary-box'>
                    <h1><Link to="/">Grupo</Link></h1>
                </span>
                <Navbar />
                <div className='main-content'>
                    <Routes>
                        <Route path="/" element={ <Grupo /> } />
                        <Route path="/historia" element={ <Historia /> } />
                        <Route path="/discografia" element={ <Discografia /> } />
                        <Route path="/conciertos" element={ <Conciertos /> } />
                        <Route path="/formConcierto" element={ <FormConcierto /> } />

                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}