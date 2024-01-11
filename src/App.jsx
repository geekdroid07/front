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
const URI = 'https://rym2.up.railway.app/api/'

function App() {
  const [characters, setCharacters] = useState([])
  const location = useLocation();

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
    setCharacters((oldChars) => oldChars.filter((c) => c.id != id));
  }

  const onSearch = async (id) => {
    if (characters.some(x => x.id == id)) return window.alert('¡Este personaje ya está en la lista!');

    const {data} = await axios(`${URI}character/${id}?key=henrystaff`);
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      window.alert('¡No hay personajes con este ID!');
    }
  }

  return (
    <div style={{ background: `url(${Background}) no-repeat`, backgroundSize: 'cover', minHeight: window.innerHeight }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/"  element={<Login login={login} />} />
        <Route path="/home"  element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about"  element={<About />} />
        <Route path="/detail/:id"  element={<Detail />} />
        <Route path="/favorites"  element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
