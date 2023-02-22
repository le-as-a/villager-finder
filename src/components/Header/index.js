import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <div className='nav'>
                <Link className='navlink' to='/'>Home</Link>
                <Link className='navlink' to='/catalog'>Catalog</Link>
                <Link className='navlink' to='/about'>About</Link>
                <Link className='navlink' to='/demo'>Demo</Link>
            </div>
        </>
    )
}