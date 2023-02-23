import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVillager } from '../../store/villagerSlice';
import './info.css';

export default function () {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const villager = useSelector(state => state.villager);

    useEffect(() => {
        (async () => {
            dispatch(getVillager(id));
        })();
    }, [dispatch]);

    return (
        <>
            {villager ? (
                <div className='vill-wrap'>
                    <div className='villager-card'>
                        <img className='villager-image' src={villager.image} />
                        <div className='villager-info'>
                            <div className='villager-name'>{villager.name} <img className='villager-icon' src={villager.icon} /></div>
                            <div className='desc'>
                                <div className='info'><div className='info-type'>Birthday:</div> {villager.birthday}</div>
                                <div className='info'><div className='info-type'>Personality:</div> {villager.personality}</div>
                                <div className='info'><div className='info-type'>Gender:</div> {villager.gender}</div>
                                <div className='info'><div className='info-type'>Species:</div> {villager.species}</div>
                                <div className='info'><div className='info-type'>Hobby:</div> {villager.hobby}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <></>}
        </>
    )
}