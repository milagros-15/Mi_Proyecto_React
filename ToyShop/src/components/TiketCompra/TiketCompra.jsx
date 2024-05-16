import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';

const TiketCompra = () => {
  const { invoicePurchase } = useCartContext()
  const [compra, setCompra] = useState([]) //estado inicial array vacío

  const identificador = invoicePurchase.id;

  useEffect(() => {
    if(invoicePurchase.id !== undefined) {
      traer()
    }
  }, [])

  const traer = async () => {
    const db = getFirestore()
    const docRef = doc(db, "tiketsCompra", identificador)

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setCompra({ id: docSnap.id, ...docSnap.data() })
    } 
  }

  return (
    <>
    {
      invoicePurchase.id !== undefined ? (
      <div className='ContainerTiketPurchase'>
        <h2>Ticket de compra</h2>
        <section className='tiketPurchase'>
          <section className='cuadriculado'>
            <h3>{compra.id}</h3>
            <p><strong>Iva:</strong> ${compra.iva}</p>
            <p><strong>Subtotal:</strong> ${compra.subTotal}</p>
            <p><strong>Total:</strong> ${compra.precioFinal}</p>

          </section>
        </section>

      </div>
      )
      : <h2> No hay ticket</h2>
    }

    </>
  )
}

export default TiketCompra