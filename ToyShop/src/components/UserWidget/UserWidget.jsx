import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const UserWidget = () => {
  const { user, login, handleLoginarse } = useCartContext();
  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')

  const handleActive = (e) => {
    e.preventDefault()
    user == null ? setValor(!valor) : setValor(false)
  }

  useEffect(() => {
    setClaseAct(valor ? 'active' : '')

    !valor ? handleLoginarse(false) : handleLoginarse(true)


  }, [valor, login])

  useEffect(() => {
    user != null && setValor(false)
  }, [user])

  return (
    <>
      <section className='userLogin'>
        <Link to='/' className={`userCountLog ${claseAct}`} onClick={handleActive}>
          <ion-icon name="log-in"></ion-icon>
        </Link>
      </section>
    </>
  )
}

export default UserWidget