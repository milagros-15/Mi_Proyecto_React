import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const UserWidgetActive = () => {
  const { user } = useCartContext();
  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')
  const [imgPred, setImgPred] = useState('https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino10_w1tbcm.gif')

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
    setClaseAct(valor ? 'activo' : '')
  }

  useEffect(() => {
    user != null && setValor(false)
    // console.log("USUARIO :  ",user.photoURL )
    user.photoURL !== null ? setImgPred(user.photoURL) : setImgPred('https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino10_w1tbcm.gif')

  }, [user])

  return (
    <>
      <section className='userLogin'>
        <Link to='' className={`userCountLog ${claseAct}`} onClick={handleActive}>
          {
            <img src={imgPred} alt='imagen perfil predeterminada'/>
          }
        </Link>
      </section>
    </>
  )
}

export default UserWidgetActive