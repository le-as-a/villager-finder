import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearVillager } from '../../store/villagerSlice';

export default function ({ names }) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const villagerNames = Object.values(names);
    const villagerIds = Object.keys(names);

    useEffect(() => {
        (async () => {
            dispatch(clearVillager());
            if (search) {
                const res = [];
                villagerNames.forEach(villager => {
                    if (villager.toLowerCase().includes(search)) res.push(villager);
                });
                setResults(res);
            } else {
                setResults([]);
            }
        })();
    }, [search, dispatch]);

    return (
        <>
            <div className='main'>
                <input 
                    className='search'
                    placeholder='Name a villager...'
                    onChange={e => setSearch(e.target.value)}
                />
                {results ? (
                    <>
                        <div className='search-results'>
                            {results.map(n => {
                                let i = villagerNames.indexOf(n);
                                return (
                                    <Link key={`${villagerIds[i]}`} className='reslink' to={`/catalog/${villagerIds[i]}`}>{n}</Link>
                                )
                            })}
                        </div>
                    </>
                ) : 0}
            </div>
        </>
    )
}