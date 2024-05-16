import React from 'react'

const UpScroll = () => {
  const handleUp = () => {
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <>
      <button className="upScroll" onClick={handleUp}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </button>
    </>
  )
}

export default UpScroll