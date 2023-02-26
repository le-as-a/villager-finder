import React from 'react';
import { login } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function () {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    if (user?.username) return (<Navigate to='/inventory' />);

    const handleDemoLogin = async e => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'));
    }
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <div className='signup-msg'>
                    The ability to create an account is currently disabled. Test out the features in our demo mode!
                </div>
                <button
                    className='demo-btn'
                    onClick={handleDemoLogin}
                >
                    Demo Login
                </button>
            </div>
        </div>
    )
}