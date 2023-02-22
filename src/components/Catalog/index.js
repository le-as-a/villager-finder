import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog } from '../../store/catalogSlice';
import { clearVillager } from '../../store/villagerSlice';

export default function () {
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalog);

    useEffect(() => {
        (async () => {
            dispatch(getCatalog());
            dispatch(clearVillager());
        })();
    }, [dispatch]);

    return (
        <>
            <div className='catalog'>
                <div className='cat-sections'>
                    <div className='cat-title name'>
                        Name
                    </div>
                    <div className='cat-title species'>
                        Species
                    </div>
                    <div className='cat-title gender'>
                        Gender
                    </div>
                    <div className='cat-title personality'>
                        Personality
                    </div>
                </div>
                {catalog ? catalog.map(item => (
                    <>
                        <Link key={item.fn} to={`/catalog/${item.fn}`}>
                            <div className='cat name'><img alt={`${item.name}`} src={item.icon} /> {item.name}</div>
                            <div className='cat species'>{item.species}</div>
                            <div className='cat gender'>{item.gender}</div>
                            <div className='cat personality'>{item.personality}</div>
                        </Link>
                    </>
                )) : 0}
            </div>
        </>
    )
}