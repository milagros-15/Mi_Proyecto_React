import { useState } from "react"

const ImgDetail = ({ objeto, describe }) => {
    const { imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, imagenE: img5 } = objeto

    const [imagen1, setImg1] = useState(img1)
    const [imagen2, setImg2] = useState(img2)
    const [imagen3, setImg3] = useState(img3)
    const [imagen4, setImg4] = useState(img4)
    const [imagen5, setImg5] = useState(img5)


    const handleStateImg = (e, val) => {

        e.preventDefault();
        e.stopPropagation();
        if (imagen1 !== img1) {
            (setImg1(img1), setImg2(img2), setImg3(img3), setImg4(img4), setImg5(img5))
        } else {
            switch (val) {
                case 2:
                    setImg1(img2), setImg2(img1)
                    break;
                case 3:
                    setImg1(img3), setImg2(img1)

                    break;
                case 4:
                    setImg1(img4), setImg2(img1)

                    break;
                case 5:
                    setImg1(img5), setImg2(img1)
                    break;
                default:
                    break;
            }
        }


    }

    return (
        <>
            <section className="containerImgs">
                <div className="img1" onClick={(e) => handleStateImg(e, 1)}>
                    <img src={imagen1} alt={describe} />
                </div>
                <div className="imgSecundary">
                    <div className="img2" onClick={(e) => handleStateImg(e, 2)}>
                        <img src={imagen2} alt={describe} />
                    </div>
                    {
                        (img3.length !== 0) && (<div className="img3" onClick={(e) => handleStateImg(e, 3)}><img className="img3" src={imagen3} alt={describe} /></div>)}
                    {
                        (img4.length !== 0) && (<div className="img4" onClick={(e) => handleStateImg(e, 4)}><img className="img4" src={imagen4} alt={describe} /></div>)}
                    {
                        (img5.length !== 0) && (<div className="img5" onClick={(e) => handleStateImg(e, 5)}><img className="img5" src={imagen5} alt={describe} /></div>)

                    }
                </div>

            </section>
        </>

    )
}
export default ImgDetail