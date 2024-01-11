import React from 'react';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
    <div className='header'>

      <div className='links'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>
  )
}
