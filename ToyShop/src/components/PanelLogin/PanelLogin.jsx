import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import FormLogin from '../FormLogin/FormLogin';
import FormRegister from '../FormRegister/FormRegister';

const PanelLogin = () => {
  const {user,handleLoginarse} = useCartContext()
  const [valor, setValor] = useState(false)
  const [textForm, setTextForm] = useState('Registrarse')
  const [clase, setClase] = useState('')

  const [activaLog, setActivaLog] = useState(false)

  const refElementLog = useRef()

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
  }

  useEffect(() => {
    setTextForm(valor ? 'ir a login' : 'Registrarse')

  }, [valor])

  useEffect(()=>{
    setTimeout(() => {
      setClase('visible')
    }, 100);
  },[valor])


  useEffect(() => {
    //evento click al documento
    document.addEventListener("click", handleClick)

    //eliminamos el evento del documento cuando el componente se desmonta
    return () => { 
      document.removeEventListener("click", handleClick)
    }

  }, [])

  const handleClick = (e) => {
    if (refElementLog.current && !refElementLog.current.contains(e.target)){
      setActivaLog(false)
    }else {
      setActivaLog(true)
    }
    //desactiva el componente si se cliqueó fuera
    // setActivaLog(false)
  }

  return (
    <> 
    { user == null 
      ? (
        <section ref={refElementLog} className={`login ${clase}`}>
        {
          valor == false ? <FormLogin /> : <FormRegister />
        }
        <Link to={''} onClick={handleActive}>{textForm}</Link>
      </section>
      ) 
    : null  }
      
    </>
  )
}

export default PanelLogin