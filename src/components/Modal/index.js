import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import '../../style/modal.css'

import Counter from '../Counter'
import { updateShopping, updateOffer } from '../../actions'

function Modal({ handleCloseModal, isOpen, product, offer, updateShopping, updateOffer, amount, handleClickMenos, handleClickSuma }){

  const handleUpdate = () => {
    if(!offer){
      updateShopping({product, amount: amount})
      handleCloseModal()
    }else{
      updateOffer({id: product.id, amount: amount})
      handleCloseModal()
    }
  }

  if (isOpen === false) {
    return null
  }

  return ReactDOM.createPortal(
    <section className="modal">
      <div className="content-modal">

        <div className="product-description">
          <img src={product.imagen} alt={`${product.tipo}`} />
          <h3>{` ${product.tipo}`}</h3>
          <span>{`$${product.precio * amount} MXN`}</span>
          <Counter handleClickSuma={handleClickSuma} handleClickMenos={handleClickMenos} counter={amount} ></Counter>
        </div>

        <div className="buttons">
          <button className="update" onClick={handleUpdate}>Actualizar</button>
          <button className="close" onClick={handleCloseModal}>cerrar</button>
        </div>

      </div>
    </section>,
    document.getElementById('modal-root')
  );
}

const mapDispatchToProps = {
  updateShopping,
  updateOffer
}

export default connect(null, mapDispatchToProps)(Modal)