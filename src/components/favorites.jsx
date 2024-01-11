import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Cards from './Cards';
import { removeFav } from '../redux/actions/actions';
import {useForceUpdate} from '../hooks/useForceUpdate';
export default function favorites() {

  const {allCharacters} = useSelector((state) => state.characters);
  const [characters, setCharacters] = useState(allCharacters);
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const onClose = (id) => {
    dispatch(removeFav(id));
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
      <Cards characters={characters} onClose={onClose} />
    </>
  )
}
