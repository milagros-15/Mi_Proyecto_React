import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartFormCompra = ({ purchaseHandler, handleChange, handleBlur, error,errorFormEnvio}) => {

  const { user } = useCartContext()

  return (
    <>
      <form className='containPaymentMethod' onSubmit={purchaseHandler}>
        <h2>Formulario de compra</h2>
        <label htmlFor="name">
          Nombre
          <input type="text" name='name' placeholder='nombre' onChange={handleChange} onBlur={handleBlur} required />
          {error.name && <p className='errorForm'>{error.name}</p>}
        </label>
        <label htmlFor="email">
          email
          {/* <input type="email" name="email" id="email" placeholder='email@gmail.com' onChange={handleChange} onBlur={handleBlur} required />
          {error.email && <p className='errorForm'>{error.email}</p>} */}
          <p name='email' className='emailUs'>{user.email}</p>
        </label>
        <label htmlFor="tel">
          Teléfono
          <input type="tel" name="teléfono" placeholder='2944-123123' onChange={handleChange} onBlur={handleBlur} required />
          {error.telephone && <p className='errorForm'>{error.telephone}</p>}
        </label>
        <label htmlFor="card">
          Número de tarjeta
          <input type='number' name="card" id="card" placeholder='XXXX XXXX XXXX 1234' pattern="^\d{4}([- ])?\d{4}\1\d{4}\1\d{4}$" onChange={handleChange} onBlur={handleBlur} required />
          {error.card && <p className='errorForm'>{error.card}</p>}
        </label>
        <div className='expired'>
          <label className='labelExpired'>
            Vencimiento
            <div className='datosCardC'>
              <div className='monthExpiration'>
                <input type="number" name="month" id="month" min={0} max={12} placeholder="MM" onChange={handleChange} onBlur={handleBlur} required />
                {error.month && <p className='errorForm'>{error.month}</p>}
              </div>
              <div className='yearExpiration'>
                <input type="number" name="year" id="year" min={22} max={30} placeholder="YY" onChange={handleChange} onBlur={handleBlur} required />
                {error.year && <p className='errorForm'>{error.year}</p>}
              </div>
            </div>
          </label>
          <label htmlFor="">
            CVV
            <input type="number" name='cvv' placeholder={123} onChange={handleChange} onBlur={handleBlur} required />
            {error.cvv && <p className='errorForm'>{error.cvv}</p>}
          </label>
        </div>
        <button className='entrar' type='submit'>Finalizar Compra</button>
        {errorFormEnvio ? <p className='error'>❌❌❌ Aún quedan errores</p> : <p className='verificado'>✔✔✔ Puede comprar</p>}
      </form>

    </>
  )
}

export default CartFormCompra