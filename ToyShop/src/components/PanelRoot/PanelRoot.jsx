import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const PanelRoot = () => {
  const { panelRoot, handlePanelRooot } = useCartContext();
  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
    
    // ${(valor) ? 'active' : '' }
  }

  useEffect(() => {
    setClaseAct(valor === true ? 'active' : '')

    !valor ? handlePanelRooot(false) : handlePanelRooot(true)
    
  }, [valor, panelRoot])
  
  return (
    <>
      <section className='panelRoot'>
        <Link to={''} className={`panelConfig ${claseAct}`} onClick={handleActive}>
          <ion-icon name="construct-sharp"></ion-icon>
        </Link>
      </section>
    </>
  )
}

export default PanelRoot