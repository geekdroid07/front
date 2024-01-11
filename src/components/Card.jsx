import React, { useState } from 'react'
import {
  faClose,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { useSelector, useDispatch } from "react-redux";
import { addFav } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

library.add(faClose, faHeart);

export default function Card({character, onClose}) {

  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    dispatch(addFav(character));
    setIsFav(!isFav);
  }


  return (
    <div>
      <div className='character-card' style={{ background: `url(${character.image}) no-repeat` }}>
        <div className='actions'>
          <div>
            {(isFav || character.isFav) ? (
                  <button className='button-fav' onClick={handleFavorite}>❤️</button>
              ) : (
                  <button className='button-fav' onClick={handleFavorite}>🤍</button>
              )
            }
          </div>
          <div className='on-close' onClick={() => onClose(character.id)}>
            <FontAwesomeIcon icon={['fas', 'close']} onClick={() => onClose(character.id)} />
          </div>
        </div>
        <div className='character-card-name'>
          <Link to={`/detail/${character.id}`}>
            {character.name}
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
