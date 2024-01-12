import React, {useState} from 'react';
import LoginImg from '../assets/login.jpg';
import { validEmail, validPassword } from './form/validation';
export default function Login({login}) {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.email || errors.password) {
      alert('Hay errores en el formulario.');
    } else
      login(userData);
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const errorEmail = validEmail(e.target.value);
      if (errorEmail === true) {
        setErrors({
          ...errors,
          email: null
        })
      } else {
        setErrors({
          ...errors,
          email: errorEmail ? errorEmail :  'El nombre de usuario tiene que ser un email.'
        })
      }
    }
    if (e.target.name === 'password') {
      const errorPassword = validPassword(e.target.value);
      if (errorPassword === true) {
        setErrors({
          ...errors,
          password: null
        })
      } else {
        setErrors({
          ...errors,
          password: errorPassword ? errorPassword : 'La contraseña no esta en el formato valido.' 
        })
      }

    }
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form-login'>
      <div className='child'>
        <div className='form-img'>
          <img src={LoginImg} alt="Login" />
        </div>

        <div className='child_form'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} id="email" />
          {errors.email && <span style={{ color: '#b80f36', marginTop: 5, fontWeight: 'bold', fontSize: 15 }}>{errors.email}</span>}
        </div>
        <div className='child_form'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} id="password" />
          {errors.password && <span style={{ color: '#b80f36', marginTop: 5, fontWeight: 'bold', fontSize: 15 }}>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}
