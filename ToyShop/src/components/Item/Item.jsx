import { memo, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const Item = memo(({ element }) => {

    const { agregaAlCarrito, agregaAMeGusta, meGusta, cartList, notify, errToast } = useCartContext()

    const [activaHeart, setActivaHeart] = useState(false)
    const [activaCart, setActivaCart] = useState('')
    const [valorHeart, setValorHeart] = useState('')
    const [valorActiveCart, setValorActivoCart] = useState('')


    if (cartList.some(elem => (elem.id === element.id && elem.nombre === element.nombre))) {
        const objeto2 = cartList.find(elem => elem.id === element.id)
        element = objeto2
    }

    useEffect(() => {
        if (activaHeart === true) {
            setTimeout(() => {
                setValorActivoCart('like')
            }, 3000)
        } else {
            setTimeout(() => {
                setValorActivoCart('')
            }, 3000)
        }
    }, [])

    useEffect(() => {
        if (meGusta.length !== 0 && meGusta.some(el => (el.id === element.id))) {
            if (activaHeart === false) {
                setActivaHeart(true);
                setValorHeart('activado');
                setTimeout(() => {
                    setValorHeart('like')
                }, 3000);
            }

        } else {
            setActivaHeart(false);
            setValorHeart('');
        }
    }, [meGusta])


    const handleActiveCart = (val) => {
        (val === true) ?
            (setActivaCart('activado'),
                setTimeout(() => {
                    setActivaCart('')
                }, 3000)
            )
            : setActivaCart('sinStock')
    }

    // const botoneraClassChecked = activaHeart ? 'activado' : '' ;
    const onAdd = (e) => {
        e.preventDefault();
        if (element.stock <= element.comprado) {
            handleActiveCart(false)
            errToast('No hay stock`')
        }
        else {
            handleActiveCart(true)
            agregaAlCarrito(
                {
                    ...element,
                    comprado: 1,
                    precioTotal: element.precio * 1
                })
            notify(`🥰 Compraste 1 ${element.nombre}`)
        }

    }

    const onAddMeGusta = () => {
        agregaAMeGusta(element);
    }

    const { id: id, nombre: nombre, precio: precio, descripcion: desc, imagenA: img1 } = element;

    return (
        <>
            <article className='card'>
                <div className="containerContenido">
                    <Link to={`/detalle/${element.id} `} className="cardImg">
                        <img className="imgCard" src={img1} alt={nombre} />
                        <p className="precioCard">${precio}</p>
                    </Link>
                    <section className="cardDescripcion">
                        <h2 className="cardHeader">{nombre}
                        </h2>
                        <p><span>{desc}</span></p>
                    </section>
                    <section className="botoneraCard">
                        <div>
                            <a className={`heart ${valorHeart}`} onClick={onAddMeGusta}><ion-icon name="heart"></ion-icon></a>
                            <a className={`cart ${activaCart} ${valorActiveCart}`} onClick={onAdd}><ion-icon name="cart"></ion-icon></a>
                        </div>
                    </section>
                </div>
            </article>
        </>


        // </article>
    )
}
)


export default Item