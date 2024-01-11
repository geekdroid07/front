import React from 'react';
import Card from './Card';

export default function Cards({characters, onClose = null}) {
  return (
    <div className='container-cards'>
      {characters && characters.map((character, i) => <Card key={i} character={character} onClose={onClose} />)}
    </div>
  )
}
