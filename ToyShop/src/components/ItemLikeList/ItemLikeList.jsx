import React from 'react'
import ItemLike from '../ItemLike/ItemLike'

const ItemLikeList = ({listLike}) => {
  return (
    <>
      <section className='containLikes'>
        <h1>Me Gustan</h1>
        <section className='like'>
          {
            listLike.map(elemento => {
              return (<section key={elemento.id} className="elementLike">
                <ItemLike objeto={elemento} />
              </section>)
            })
          }
        </section>
      </section>
    </>
  )
}

export default ItemLikeList