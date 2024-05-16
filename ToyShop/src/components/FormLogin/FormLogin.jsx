import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const FormLogin = () => {
  const { loginForm, loginGoogle, login, handleLoginarse, recoverPassword, notify, errToast } = useCartContext()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  // const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await loginForm(user.email, user.password)
      navigate('/')
    }
    catch (error) {
      const errorCode = error.code;
      console.log(errorCode)


      // console.log(errorCode)
      // console.log(errorMessage)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user, [name]: value
    })
  }
  const handleGoogleLog = async () => {
    await loginGoogle()
    navigate('/')
  }

  const handleRestartPass = (e) => {
    e.preventDefault()
    if (!user.email) {
      errToast("Ingresa tu email") 
    } else {
      recoverPassword(user.email)
    }
  }

  return (
    <>
      <form className='formLogin' action="" onSubmit={handlesubmit}>
      <h2>Login</h2>
        <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder='Contraseña' onChange={handleChange} required />
        <div>
          <button className='entrar' type='submit'>Ingresar</button>
          <a className='recuperar' onClick={handleRestartPass}>Recuperar Contraseña</a>
        </div>

      </form>
      <button className='loginGooogle' onClick={handleGoogleLog}>Acceder con cuenta de Google</button>
    </>
  )
}

export default FormLogin