import React from 'react'

const DetailDescription = ({object}) => {
  return (
    <>
      <h2 className="nombre"># {object.nombre}</h2>
      <p className="descripcion">{object.descripcion}</p>
      <h2 className="precio">${object.precio}</h2>
      {
        object.precioTotal ? <h3 className="precioTotal">${object.precioTotal}</h3> : null
      }
      <p className="categoria"><strong>Disponibles: </strong>{object.comprado ? (object.stock - object.comprado) : object.stock}</p>
    </>
  )
}

export default DetailDescription