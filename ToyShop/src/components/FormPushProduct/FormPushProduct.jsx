import React, { useEffect, useState } from 'react'
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getProds } from '../../gFetch';

//formulario que permite pusear todos los elementos a firebase
const FormPushProduct = () => {
    const [productos, setProductos] = useState([]) //estado inicial array vacío

    const elementsBanner = [
        { "nombre": "the mandalorian","imgDescribe":"the mandalorian logo", "descripcion": "Figuras de la colección de Star Wars The Black Series, Toy Figura de la serie The Mandalorian de 6 pulgadas.", "palabraClave": "the mandalorian", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364416/imgs/slider/mandalorian3_deualz.jpg", "color": "#000000", "gradiente": "" },

        { "nombre": "pokemon","imgDescribe":"pockemon logo background", "descripcion": "Funkos de la colección pokemon, pokemon inicial. serie rojo y otras, marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "pokemonl", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677365775/imgs/slider/pokemonLogo1_ioxzjh.jpg", "color": "#0B48A5", "gradiente": "" },

        { "nombre": "one punch man","imgDescribe":"one punch man logo background", "descripcion": "FunKo POP! de la colección One Punch Man- Figura de vinilo de 3.75 pulgadas de serie especial marca pop.", "palabraClave": "one punch man", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364420/imgs/slider/one_punch_man2_qvxqfk.jpg", "color": "#000000", "gradiente": "" },

        { "nombre": "dragon ball","imgDescribe":"dragon Ball logo background", "descripcion": "Funko pop de la colección Dragon ball y Dragon Ball Z, Figuras coleccionables marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "dragon ball", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364406/imgs/slider/dragon_ball2_uwr8x6.jpg", "color": "#EA6E14", "gradiente": "linear-gradient(0deg, rgba(235,68,15,1) 0%, rgba(233,154,27,1) 100%)" },

        { "nombre": "one piece", "imgDescribe":"one piece logo background", "descripcion": "Figuras de la colección Bandai Spirits Ichibansho Ichiban - One Piece - figuras (película roja).", "palabraClave": "one piece", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677366289/imgs/slider/onePieceLogo1_cspj2h.jpg", "color": "#1C1924", "gradiente": "" },

        { "nombre": "bad batch", "imgDescribe":"bad batch logo background", "descripcion": "Figuras Star Wars The Black Series Toy - Figura de acción coleccionable de 6 pulgadas a escala de The Bad Batch y accesorio, juguetes", "palabraClave": "bad batch", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364428/imgs/slider/bad_bach_guzdot.jpg", "color": "#cc5454", "gradiente": "linear-gradient(to right, #471E0C 0%, 49.070098996162415%, #D18261 100%)" },
    ]

    useEffect(() => { //hook

        getProds()
            .then((response) => {
                const respuestaSinId = response.map(({id,...element}) => {
                    const nuevoElemento = {claves:[element.clave1, element.clave2, element.clave3,element.nombre,element.tipo, element.genero],fechaSubida:Date(),...element }
                    return nuevoElemento
                })
                console.log(respuestaSinId)
                setProductos(respuestaSinId)  //actualiza el estado de los productos
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => console.log(false)) //se ejecuta siempre al final, actualiza el state de loading
    }, [])

    const cargaDeDatos = () => {
        const db = getFirestore()
        const coleccion = collection(db, 'productos')

        productos.forEach(element => {
            addDoc(coleccion, element)
                .then(response => console.log(`prod Subido numero ${element.id}`, response))
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => console.log(`Fin subida prod: #${element.id} ${element.nombre}`))
        });

    }
    
    const handleSlider = () => {
        const db = getFirestore()
        const coleccion = collection(db, 'ProductosSlider')
        elementsBanner.forEach(element => {
            addDoc(coleccion, element)
            .then(response => console.log(`se subió: ${response}`))
            .catch((error) => {
                console.log(error)
            })
            .finally(() => console.log("Fin"))
        });
    }

   
    // await productosRef.doc().set({
    //     nombre: objeto.nombre, descripcion: objeto.descripcion, stock: objeto.stock, precio: objeto.precio, descuento: objeto.precio, genero: objeto.genero, tipo: objeto.tipo, imagenA: objeto.imagenA, imagenB: objeto.imagenB, imagenC: objeto.imagenC, imagenD: objeto.imagenD, clave1: objeto.clave1, clave2: objeto.clave2, clave3: objeto.clave3
    // })
    const dato123 = new Date()
    console.log("Estos son todos los productos: ", productos)
    // localStorage.setItem('productosStorage', JSON.stringify(productos))
    // const recuperoProdsStorage = JSON.parse(localStorage.getItem('productosStorage'))

    console.log(`Esta es la fecha creacion: ${dato123.getDate()}`)


    return (
        <div className='containFormPush'>
            <h1>Subir Producto</h1>
            <button className='subirProds' onClick={cargaDeDatos}><ion-icon name="card-outline"></ion-icon> Subir productos </button>
            
            <br></br>
            <button className='subirProds' onClick={handleSlider}><ion-icon name="card-outline"></ion-icon> Subir slider </button>


            <form action="">
                <label className='titulo' htmlFor="nombre"><p>Nombre</p>
                    <input type="text" name='nombre' id='nombre' placeholder='nombre' />
                </label>
                <label className='textarea' htmlFor="descripcion"><p>Descripción</p>
                    <textarea name="descripcion" id="descripcion" placeholder='descripcion'></textarea>
                </label>
                <label className='tipoNumber' htmlFor="stock"><p>Stock</p>
                    <input type="number" name='stock' id='stock' placeholder='stock' min={0} />
                </label>
                <label className='tipoNumber' htmlFor="precio"><p>Precio</p>
                    <input type="number" name='precio' id='precio' placeholder='precio' min={0} />
                </label>
                <label className='tipoNumber' htmlFor="descuento"><p>Descuento</p>
                    <input type="number" name='descuento' id='descuento' placeholder='descuento' min={0} />
                </label>
                <label className='inputClave' htmlFor="genero"><p>Género</p>
                    <input type="text" name='genero' id='genero' placeholder='género' />
                </label>
                <label className='inputClave' htmlFor="tipo"><p>Tipo</p>
                    <input type="text" name='tipo' id='tipo' placeholder='tipo' />
                </label>
                <label className='imagenInput' htmlFor="imagenA"><p>ImagenA</p>
                    <input type="text" name='imagenA' id='imagenA' placeholder='imagenA' />
                </label>
                <label className='imagenInput' htmlFor="imagenB"><p>ImagenB</p>
                    <input type="text" name='imagenB' id='' placeholder='imagenB' />
                </label>
                <label className='imagenInput' htmlFor="imagenC"><p>imagenC</p>
                    <input type="text" name='imagenC' id='imagenC' placeholder='imagenC' />
                </label>
                <label className='imagenInput' htmlFor="imagenD"><p>ImagenD</p>
                    <input type="text" name='imagenD' id='imagenD' placeholder='imagenD' />
                </label>
                <label className='inputClave' htmlFor="clave1"><p>clave1</p>
                    <input type="text" name='clave1' id='clave1' placeholder='clave1' />
                </label>
                <label className='inputClave' htmlFor="clave2"><p>Clave2</p>
                    <input type="text" name='clave2' id='clave2' placeholder='clave2' />
                </label>
                <label className='inputClave' htmlFor="clave3"><p>Clave3</p>
                    <input type="text" name='clave3' id='clave3' placeholder='clave3' />
                </label>
                <button className='subirProducto'>Subir</button>
            </form>
        </div>
    )
}
/*
nombre, descripcion, stock, precio, descuento, genero, tipo, imagenA, imagenB, imagenC, imagenD, clave1, clave2, clave3
*/

export default FormPushProduct