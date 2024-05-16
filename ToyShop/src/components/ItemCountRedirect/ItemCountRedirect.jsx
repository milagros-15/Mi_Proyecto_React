import React from 'react'
import { Link } from 'react-router-dom'

const ItemCountRedirect = () => {
  return (
    <>
      <div className='botonRedireccion'>
        <Link to='/'> Seguir comprando </Link>
        <Link to='/cart' >Carrito</Link>
      </div>
    </>
  )
}

export default ItemCountRedirect