import React from 'react'
import '../../style/offers.css'

import useGetOffers from '../../hooks/useGetOffers'
import Input from '../Input'

const Offers = (props) => {
  const { offers } = useGetOffers()

  return(
    <section className="offers">
      <h4>Ofertas</h4>
      <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
      <div className="offers-products">
        {offers.map(item => {
          return (
            <label htmlFor={`${item.tipo}-${item.id}`} key={item.id}>
              <article className="offer-product">
                <div className="offer-image-container">
                  <img src={item.imagen} alt={item.tipo}/>
                  <Input offer={{...item}} key={`${item.tipo}-${item.id}`}/>
                </div>
                <p>{item.tipo}</p>
                <span>+ ${item.precio} MXN</span>
              </article>
            </label>
          )
        })}
      </div>
    </section>
  )
}

export default Offers