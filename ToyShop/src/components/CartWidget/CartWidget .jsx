//render de un icono cart, e incluirlo dentro de navBar

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {

    const { cartList, contador, contadorComprados } = useCartContext()
    
    useEffect(()=>{
        contador(cartList)
    }, [cartList])


    return (
        <>
        <section className="carrito">
            <Link to='/cart'>
                <ion-icon name="cart"></ion-icon>
                <p>{contadorComprados}</p>
            </Link>
        </section> 
        </>
    )
}

export default CartWidget