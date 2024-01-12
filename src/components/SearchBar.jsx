import { useState } from 'react'

export default function SearchBar({onSearch}) {


  const [id, setId] = useState('');

  const handleClick = () => {
    if (id?.length < 1) {
      alert('El id no puede estar vacio');
      return;
    }
    onSearch(id)?.then(() => setId(''));
  }

  return (
    <div className='searchbar'>
      <input type="number" placeholder="Search..." value={id} onChange={(event) => setId(event.target.value)} />
      <button className='button' onClick={handleClick}>Agregar</button>
    </div>
  )
}