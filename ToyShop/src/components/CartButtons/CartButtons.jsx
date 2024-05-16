import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartButtons = ({seccion, buyButtonHandler}) => {
  const { vaciarCarrito } = useCartContext()

  return (
    <>
      <h1>Mi Carrito</h1>
      <section className="botonraCompra">
        <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> Vaciar Carrito </button>
        <button className='vaciar' onClick={buyButtonHandler}><ion-icon name="card-outline"></ion-icon> Confirmar compra </button>

        {(seccion == true) ? <h2 className='userNoLogin'>Debe loguearse para poder comprar.</h2> : null}
      </section>
    </>
  )
}

export default CartButtons