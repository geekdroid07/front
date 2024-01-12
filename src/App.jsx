import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about';
import Background from './assets/background.jpg'; 
import Favorites from './components/favorites';
import Login from './components/Login';
import Detail from './components/Detail';
import { useSelector, useDispatch } from "react-redux";
import {useForceUpdate} from './hooks/useForceUpdate';
import { removeFav, addFav, removeCharacter, addCharacter } from './redux/actions/actions';
const URI = 'https://rym2.up.railway.app/api/'

function App() {
  const {allCharacters} = useSelector((state) => state.characters);
  const location = useLocation();

  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'christianmota07@gmail.com';
  const PASSWORD = '12345678';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
    } else {
      window.alert('¡Datos incorrectos!');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onClose = (id) => {
    dispatch(removeCharacter(id));
  }

  
  const handleFavorite = (character) => {
    if (character.isFav) {
      dispatch(removeFav(character.id));
    } else {
      dispatch(addFav(character.id));
    }
    forceUpdate();
  }

  const onSearch = async (id) => {
    try {
      if (allCharacters.some(x => x.id == id)) return window.alert('¡Este personaje ya está en la lista!');

      const {data} = await axios(`${URI}character/${id}?key=henrystaff`);
      if (data.name) {
        dispatch(addCharacter(data));
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      window.alert('Ha ocurrido un error: ' + error?.message);
    }
  }

  return (
    <div style={{ background: `url(${Background}) no-repeat`, backgroundSize: 'cover', minHeight: window.innerHeight }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/"  element={<Login login={login} />} />
        <Route path="/home"  element={<Cards characters={allCharacters} onClose={onClose} handleFavorite={handleFavorite} />} />
        <Route path="/about"  element={<About />} />
        <Route path="/detail/:id"  element={<Detail />} />
        <Route path="/favorites"  element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
