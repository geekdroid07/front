import React, { useEffect, useState } from 'react'
import {
  faClose,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faClose, faHeart);

export default function Card({character, onClose, handleFavorite}) {
  return (
    <div>
      <div className='character-card' style={{ background: `url(${character.image}) no-repeat` }}>
        <div className='actions'>
          <div>
            {character.isFav ? (
                  <button className='button-fav' onClick={() => handleFavorite(character)}>❤️</button>
              ) : (
                  <button className='button-fav' onClick={() => handleFavorite(character)}>🤍</button>
              )
            }
          </div>
          <div className='on-close' onClick={() => onClose(character.id)}>
            <FontAwesomeIcon icon={['fas', 'close']} onClick={() => onClose(character.id)} />
          </div>
        </div>
        <div className='character-card-name'>
          <Link to={`/detail/${character.id}`} style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>{character.name}</p>
            <p>{character.id}</p>
          </Link>
        </div>
      </div>
      <div className='character-card-bottom'>
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  )
}
