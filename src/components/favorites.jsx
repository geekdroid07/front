import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { useSelector, useDispatch } from "react-redux";
import { removeFav, addFav } from '../redux/actions/actions';
import {useForceUpdate} from '../hooks/useForceUpdate';
export default function favorites() {

  const {allCharacters} = useSelector((state) => state.characters);
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setCharacters(allCharacters.filter(x => x.isFav === true));
  }, [allCharacters]);

  const onClose = (id) => {
    dispatch(removeFav(id));
    setCharacters(characters.filter(x => x.id !== id));
    forceUpdate();
  }

  const handleFavorite = (character) => {
    if (character.isFav) {
      dispatch(removeFav(character.id));
      setCharacters(characters.filter(x => x.id !== character.id));
    } else {
      dispatch(addFav(character.id));
    }
    forceUpdate();
  }

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    setCharacters(allCharacters.filter(x => x.gender.toLowerCase() === value))
    forceUpdate();
  };

  const orderCards = (event) => {
    let value = event.target.value;
    if (value === 'asc') {
      setCharacters(allCharacters.sort((a, b) => a.id - b.id));
    } else {
      setCharacters(allCharacters.sort((a, b) => b.id - a.id));
    }
    forceUpdate();
  }


  return (
    <>
      <div className='filters'>
        <div>
          <select onChange={orderCards} name="Dscendiente" id="asc">
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          <select onChange={filterCards} name="Male" id="male">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      <Cards characters={characters} onClose={onClose} handleFavorite={handleFavorite} />
    </>
  )
}
