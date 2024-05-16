import React from 'react'
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ element, dropProduct }) => {

    const { agregaAlCarrito } = useCartContext()

    
    const { nombre: nombre,  stock: stock, descripcion: describe, imagenA: img1, precioTotal: precioTotal } = element;

    // console.log("ELEMENT PARAM: ", element)


    const sumaProd = (e) => {
        (stock <= element.comprado) ? e.preventDefault() : agregaAlCarrito(
            {
                ...element,
                comprado:1,
                precioTotal:element.precio*1
            }
        );   
    }

    const restaProd = (e) => {
        // console.log("*********** *********", element);
        (element.comprado <= 0) ? dropProduct(element.id) :
        //     operaSobreCart(identificador, "resta")
        agregaAlCarrito(
            {
                ...element,
                comprado:-1,
                precioTotal:element.precio*1
            }
        )
    }

    const handleDropProducto = (e, identificador) => {
        e.preventDefault()
        dropProduct(identificador)
    }


    return (
        <>
            <section className='conteinProd'>
                <div className='contImagen'>
                    <img src={img1} alt={describe} />
                </div>
                <div className='containDescripcion'>
                <section className='descripcion'>
                    <h2>🥰 {nombre}</h2>
                    <p>{describe}</p>
                    <button className='remove' onClick={(e) => handleDropProducto(e, element.id)}>Eliminar</button>
                </section>
                <section className='formProds'>
                    <div className='sumaResta'>
                        <button className='restaProd' onClick={(e) => restaProd(e)} ><ion-icon name="remove-sharp"></ion-icon></button>
                        <p>{element.comprado}</p>
                        <button className='sumaProd' onClick={(e) => sumaProd(e)} ><ion-icon name="add-sharp"></ion-icon></button>
                    </div>
                </section>
                <section className='precio'><p>${precioTotal}</p></section>
                </div>
                
            </section>
        </>
    )
}

export default ItemCart

//rafce

