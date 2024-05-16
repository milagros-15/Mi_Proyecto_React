import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const ItemCartList = () => {
  const { cartList, eliminarProducto} = useCartContext()

  const dropProduct = (identificador) => {
    eliminarProducto(identificador)
}

  return (
    <>
      <section className='carrito'>
        {
          cartList.map(elemento => {
            return (<section key={elemento.id} className="cartProducto">
              <ItemCart element={elemento} dropProduct={dropProduct} />
            </section>)
          })
        }
      </section>
    </>
  )
}

export default ItemCartList