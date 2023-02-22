import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVillager } from '../../store/villagerSlice';

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
                <div className='villager-card'>
                    <img className='villager-image' src={villager.image} />
                    <div className='villager-info'>
                        <div className='villager-name'>{villager.name}</div>
                        <div className='desc'>
                            Birthday: {villager.birthday}<br />
                            Personality: {villager.personality}<br />
                            Gender: {villager.gender}<br />
                            Species: {villager.species}<br />
                            Hobby: {villager.hobby}<br />
                        </div>
                    </div>
                </div>
            ) : <></>}
        </>
    )
}