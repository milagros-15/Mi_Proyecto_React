import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PanelSettings = () => {
  const [clase, setClase] = useState('')
  setTimeout(() => {
    setClase('visible')
  }, 100);

  return (
    <>
      <section className={`panelSetting ${clase}`}>
          <h2>🛠 Setting</h2>
          <div className='panels'>
            <Link to={'settings'}><ion-icon name="reader"></ion-icon> admin users</Link>
            <Link to={'settings'}><ion-icon name="add-circle"></ion-icon> add product</Link>
            <Link to={'settings'}> <ion-icon name="remove-circle"></ion-icon> remove product</Link>
            <Link to={'settings'}> <ion-icon name="browsers"></ion-icon> edit Slider</Link>
          </div>
      </section>
    </>
  )
}

export default PanelSettings