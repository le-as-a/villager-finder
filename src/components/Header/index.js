import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function () {
    return (
        <>
            <div className='navtitle'>
                ACNH: Villager Finder
            </div>
            <div className='nav'>
                <Link className='navlink' to='/'>Home</Link>
                <Link className='navlink' to='/catalog'>Catalog</Link>
                <Link className='navlink' to='/about'>About</Link>
                <Link className='navlink' to='/demo'>Demo</Link>
            </div>
        </>
    )
}