import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import SliderItem from '../SliderItem/SliderItem';

// import "./slick.scss";
// import "./slick-theme.scss";

const SimpleSlider = memo(({ objeto }) => {
    const [ elementsBanner, setElementsBanner ] = useState([]) 
    const [loading, setLoading] = useState(true) //"" "" true

    useEffect(()=>{
        const db = getFirestore()
        const queryColection = collection(db, 'ProductosSlider')
        const queryFiltrado = query(queryColection, orderBy("nombre", "asc"))
        getDocs(queryFiltrado)
        .then(response => setElementsBanner(response.docs.map(element => ({...element.data() }))))
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => setLoading(false))
    },[])
    
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: "linear",
            autoplaySpeed: 55000,
        }
    
        return (
            <div className='containSlider'>
                <Slider {...settings}>
                    {
                        loading ? <Loading /> :
                        elementsBanner.map(element => {
                            return (
                                <SliderItem key={element.id+element.nombre} allProds={objeto} banner={element} />
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
)

export default SimpleSlider