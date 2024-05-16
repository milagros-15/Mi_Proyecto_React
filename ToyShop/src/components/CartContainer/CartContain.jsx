import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartButtons from '../CartButtons/CartButtons'
import CartFormCompra from '../CartFormCompra/CartFormCompra'
import ItemCartList from '../ItemCartList/ItemCartList'

const CartContain = () => {

    const { cartList, vaciarCarrito, user, notify, errToast, setPurchaseOrderContext } = useCartContext()
    const [seccion, setSeccion] = useState(false)
    const [boleano, setBolano] = useState(false)
    const [activaModal, setActivaModal] = useState(false)

    const [precioTotalCart, setPrecioTotalCart] = useState({
        subTotal: '',
        iva: '',
        precioFinal: ''
    })

    const [tiket, setTiket] = useState({
        name: '',
        telephone: '',
        card: '',
        month: '',
        year: '',
        cvv: '',
    })

    const [erorBlur, setErrorBlur] = useState({})
    const [errorFormEnvio, setErrorFormEnvio] = useState(false)


    useEffect(() => {
        user == null || user == undefined ? setBolano(false) : setBolano(true)

    }, [user])

    const navigate = useNavigate()

    //escucha el blur para la comprobación del error
    useEffect(() => {

        (!Object.values(erorBlur).some(val => val !== '')) ? setErrorFormEnvio(false) : setErrorFormEnvio(true)
    
    },[erorBlur])

    const purchaseHandler = (e) => {
        e.preventDefault()

        if (!errorFormEnvio) {
            loadOfData()
            
        } else {
            console.log("errores tipeo")
        }
    }

    const loadOfData = () => {
        const ordenCmpra = {
            buyer: tiket,
            items: cartList.map((elem => ({ idProd: elem.id, titulo: elem.nombre, precio: elem.precioTotal }))),
            ...precioTotalCart
        }

        const db = getFirestore()
        const ordenColeccion = collection(db, 'tiketsCompra')

        addDoc(ordenColeccion, ordenCmpra)
            .then(resp => {
                notify(`Se cargó la orden: ${resp.id}`)
                setPurchaseOrderContext(resp)
            })
            .catch((error) => {
                errToast(error)
            })
            .finally(() => {
                // console.log("FINALY...")
                setTimeout(() => {
                    buyButtonHandler()
                    vaciarCarrito()
                    navigate('/tiket')
                }, 5000);

            })
    }

    const buyButtonHandler = () => {

        if (!boleano) {
            setSeccion(true) //si sección es true, la muestra, es el error
            setActivaModal(false)

        } else {
            setSeccion(false) //sección false, no la muestra porque hay un login
            setActivaModal(!activaModal)
        }
    }

    useEffect(() => {
        const total = cartList.reduce((acumulador, element) => acumulador + element.precioTotal, 0)
        const iva = 0.14
        setPrecioTotalCart({
            subTotal: `${Math.round(total)}`,
            iva: `${Math.round(total * iva)}`,
            precioFinal: `${Math.round(total * iva + total)}`
        })
    }, [cartList])


    const handleChange = (e) => {
        const { name, value } = e.target
        setTiket({
            mail:user.email, ...tiket, [name]: value
        })
    }

    //vamos a manejar los errores en el blur junto con el html
    const handleBlur = (e) => {
        handleChange(e)
        setErrorBlur(validateForm(tiket))
    }

    const validateForm = (campoForm) => {
        const errors = {
            name: '',
            telephone: '',
            card: '',
            month: '',
            year: '',
            cvv: '',
        }

        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
        // const regexEmail = /^(\w+[./-]?)*\w+@[a-z]+[/.]\w{2,}$/i
        const regexTelephone = /^\d{4}-\d{6}$/
        const regexCard = /^\d{4}([- ])?\d{4}\1\d{4}\1\d{4}$/
        const regexMoth = /^\d{2}$/;
        const regexYear = /^\d{2}$/;
        const regexCvv = /^\d{3}$/;


        if (!campoForm.name.trim()) {
            errors.name = "❌ El campo Nombre es requerido";
        } else if (!regexName.test(tiket.name.trim())) {
            errors.name = "❌ ⌨ Solo letras y espacios";
        }

        // else if (!campoForm.email.trim()) {
        //     errors.email = "❌ El campo Email es requerido";
        // } else if (!regexEmail.test(tiket.email.trim())) {
        //     errors.email = "❌ ⌨ email incorrecto";
        // }

        else if (!campoForm.telephone.trim()) {
            errors.telephone = "❌ El campo Teléfono es requerido";
        } else if (!regexTelephone.test(tiket.telephone.trim())) {
            errors.telephone = "❌ ⌨ Máximo 6 números \"-\" obligatorio:  XXXX-XXXXXX";
        }

        else if (!campoForm.card.trim()) {
            errors.card = "❌ El campo Número de Tarjeta es requerido";
        } else if (!regexCard.test(tiket.card.trim())) {
            errors.card = "❌ ⌨ 💳 Formato de tarjeta invalida";
        }

        else if (!campoForm.month.trim()) {
            errors.month = "❌ 💳 requiere";
        } else if (!regexMoth.test(tiket.month.trim())) {
            errors.month = "❌ 💳 mínimo 2 números";
        }

        else if (!campoForm.year.trim()) {
            errors.year = "❌ 💳 requiere";
        } else if (!regexYear.test(tiket.year.trim())) {
            errors.year = "❌ 💳 mínimo 2 números";
        }

        else if (!campoForm.cvv.trim()) {
            errors.cvv = "❌ 💳 requiere";
        } else if (!regexCvv.test(tiket.cvv.trim())) {
            errors.cvv = "❌ 💳 3 valores XXX";
        }

        return errors
    }

    // console.log(user)
    return (
        <>{
            !activaModal
                ? <section className='cartContainer'>
                    <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> Seguir comprando</Link>
                    {
                        cartList.length == 0
                            ? <section className='cartVacio'>
                                <h2>Carrito Vacío</h2>
                            </section>
                            : <section className='containCarrito'>
                                <CartButtons seccion={seccion} buyButtonHandler={buyButtonHandler} />
                                <ItemCartList />
                            </section>
                    }
                </section>

                : <section className={`modal`}>
                    <div className='container'>
                        <section className='summaryPurchase'>
                            <section className='containSummaryPurchase'>
                                <h2>Resumen de Cuenta</h2>
                                <p><strong>Subtotal:</strong> ${Math.round(precioTotalCart.subTotal)}</p>
                                <p><strong>Iva:</strong> ${Math.round(precioTotalCart.iva)}</p>
                                <p className='total'><strong>Total</strong> ${Math.round(precioTotalCart.precioFinal)}</p>
                            </section>

                        </section>
                        <section className='paymentMethod'>

                            <CartFormCompra purchaseHandler={purchaseHandler} handleChange={handleChange} handleBlur={handleBlur} error={erorBlur} errorFormEnvio={errorFormEnvio} />
                        </section>
                        <button className='closeModal' onClick={buyButtonHandler}><ion-icon name="close-outline"></ion-icon></button>
                    </div>
                </section>
        }</>
    )
}

export default CartContain