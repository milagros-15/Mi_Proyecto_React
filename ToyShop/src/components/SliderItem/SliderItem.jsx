import React, { useState, useEffect, memo } from 'react'
import { Link } from 'react-router-dom';
// import Vibrant from 'node-vibrant';
// import axios from 'axios';

const SliderItem = memo( ({ allProds, banner }) => {
        const [predominantColor, setPredominantColor] = useState('#3E4098');
    
        useEffect(() => {
            setPredominantColor(banner.color);
    
            if (banner.gradiente !== "") {
                setPredominantColor(banner.gradiente);
            }
        }, [])
    
        const prodsBanner = allProds.filter((element) => banner.nombre === element.clave2 && element.clave3 === "coleccion").slice(0, 5);
        // console.log(prodsBanner)
    
        return (
            <>
                <Link to={`/categoria/${banner.nombre}`} className='sliderCaja dragonBall' style={{ background: predominantColor }}>
                    <img src={banner.imagen} alt={banner.imgDescribe} />
                    <section className='contenidoSlider'>
                        <div className='titulos'>
                            <h2>funkos {banner.nombre}</h2>
                            <p>{banner.descripcion}</p>
                        </div>
    
                        <section className='minisCard'>
                            {
                                prodsBanner.map((el) => {
                                    return (
                                        <div key={el.id} className='cardBanner'>
                                            <img src={el.imagenA} alt={el.descripcion} />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </section>
                </Link>
            </>
        )
    }
) 

export default SliderItem
