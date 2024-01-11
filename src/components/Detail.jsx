import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`)
            .then(({data}) => {
                if (data?.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
    }, [id]);
    
    return (
        <div className='detail-container'>
            <div className='detail-texts'>
                <h1>{character?.name}</h1>

                <p>STATUS | {character?.status}</p>
                <p>GENDER | {character?.gender}</p>
                <p>SPECIE | {character?.species}</p>
                <p>ORIGIN | {character?.origin?.name}</p>
            </div>
            <div className='detail-image'> 
                <img src={character?.image} className='' alt={character?.name} />
            </div>
        </div>
    )
}
