import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const Logout = () => {
  const { user, logOut} = useCartContext();

  const navigate = useNavigate()
  
  const handleLogOut = async (e) => {
    e.preventDefault()
    await logOut()
    navigate('/')
  }

  useEffect(() => {
    // console.log(user)
  }, [user])

  return (
    <>
      <section className='logout'>
        <Link to={''} onClick={handleLogOut}><ion-icon name="exit"></ion-icon></Link>
      </section>
    </>
  )
}

export default Logout