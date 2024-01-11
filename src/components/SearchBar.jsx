import React, { useState } from 'react'

export default function SearchBar({onSearch}) {

  const [id, setId] = useState(-1);

  const handleClick = () => {
      onSearch(id)
  }

  return (
    <div className='searchbar'>
      <input type="number" placeholder="Search..." onChange={(event) => setId(event.target.value)} />
      <button className='button' onClick={handleClick}>Agregar</button>
    </div>
  )
}
