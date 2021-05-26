import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'

function CartProduct({ product, amount, categoriaActiva, offer }){
  const [ isOpen, setModal ] = useState(false)
  const [ counter, setCounter ] = useState(amount)

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () =>{
    setModal(false)
  }

  const handleClickSuma = () => {
    setCounter(counter + 1)
  }

  const handleClickMenos = () => {
    setCounter(counter - 1)
  }

  if(product){
    return (
      <>
        <article className="cart-product" onClick={handleOpenModal}>
          <img src={product.imagen} alt={`${categoriaActiva} de ${product.tipo}`}/>
          <h3 className="title">{`${categoriaActiva} de ${product.tipo}`}</h3>
          <span className="amount">{`x${amount}`}</span>
          <span className="price">{`$${product.precio*amount} MXN`}</span>
        </article>

        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} product={{ ...product }} amount={counter} offer={offer} handleClickSuma={handleClickSuma} handleClickMenos={handleClickMenos}/>
      </>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  const { categoriaActiva } = state
  return {
    categoriaActiva
  }
}

export default connect(mapStateToProps, null)(CartProduct)