import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import ImgDetail from "../ImgDetail/ImgDetail";
import DetailCategory from "../DetailCategory/DetailCategory";
import DetailDescription from "../DetaiDescription/DetailDescription";

const ItemDetail = ({ objeto }) => {
    const { agregaAlCarrito, cartList ,notify, errToast} = useCartContext()

    if (cartList.some(elem => elem.id === objeto.id && elem.nombre === objeto.nombre)) {
        //este id se repite 
        const objeto2 = cartList.find(elem => elem.id === objeto.id)
        objeto = objeto2
    }

    const onAdd = (objeto, cant, precioTotal) => {

        if (objeto.stock <= objeto.comprado) {
            errToast('No hay stock')
        } else {
            agregaAlCarrito(
                {
                    ...objeto,
                    comprado: cant,
                    precioTotal: precioTotal * cant
                })
            notify(`🥰 compraste ${cant} ${objeto.nombre}`);
        }

        // agregarCarrito( {...objeto, cantidad:cant} );

    }

    return (
        <>
            <section className="itemDetailContain">
                <ImgDetail objeto={objeto} describe={objeto.descripcion} />

                <section className="detalle">
                    
                    <DetailDescription object={objeto}/>
                    <DetailCategory objeto={objeto} />
                    <ItemCount producto={objeto} inicial={1} stock={objeto.comprado ? (objeto.stock - objeto.comprado) : objeto.stock} onAdd={onAdd} />


                </section>

            </section>
        </>
    )
}
export default ItemDetail