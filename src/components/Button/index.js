import React from 'react'
import '../../style/button.css'

const Button = ({type, handleButton, totalPrice}) => {

  switch(type){
    case 'addToShop':
      return(
        <div className="button-container">
          <button className="button" onClick={handleButton}>
            Agregar 1 al carrito <span>${totalPrice}</span>
          </button>
        </div>
      )
    case 'payment':
      return(
        <div className="button-container">
          <button className="button btnPayment" onClick={handleButton}> Pagar</button>
        </div>
      )
    default: return null
  }
}

export default Button