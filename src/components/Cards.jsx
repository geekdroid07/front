import React from 'react';
import Card from './Card';

export default function Cards({characters, onClose = null, handleFavorite = null}) {
  return (
    <div className='container-cards'>
      {Array.isArray(characters) && characters.map((character, i) => <Card key={i} character={character} onClose={onClose} handleFavorite={handleFavorite} />)}
    </div>
  )
}
