import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearVillager } from '../../store/villagerSlice';
import { getCatalog } from '../../store/catalogSlice';
import './catalog.css';

export default function () {
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalog);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            dispatch(clearVillager());
            dispatch(getCatalog());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) return;

    return (
        <>
            <div className='catalog'>
                <div className='cat-sections'>
                    <div className='cat-title'>
                        Name
                    </div>
                    <div className='cat-title'>
                        Species
                    </div>
                    <div className='cat-title'>
                        Gender
                    </div>
                    <div className='cat-title'>
                        Personality
                    </div>
                </div>
                {catalog ? catalog.map(item => (
                    <>
                        <Link className='cat-link' key={item.fn} to={`/catalog/${item.fn}`}>
                            <div className='cat name'><img className='cat-icon' alt={`${item.name}`} src={item.icon} /> {item.name}</div>
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