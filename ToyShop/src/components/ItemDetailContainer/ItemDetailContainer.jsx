import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { doc, getDoc, getFirestore, } from 'firebase/firestore';
import { useCartContext } from "../../context/CartContext"

const ItemDetailContainer = () => {
    const { idProducto } = useParams();
    const [estadoProds, setEstadoProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {errToast} = useCartContext()

    useEffect(() => { //hook

        const db = getFirestore()
        const query = doc(db, 'productos', idProducto)
        getDoc(query)
            .then(response => setEstadoProductos({ id: response.id, ...response.data() }))
            .catch((err) => {
                // console.log(err.message)
                errToast(err.message)
            })
            .finally(() => setLoading(false))


    }, []) //permitirá que se vuelvan a renderizar los productos

    // console.log(estadoProds)

    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail objeto={estadoProds} />
            }

        </>
    )

}

export default ItemDetailContainer