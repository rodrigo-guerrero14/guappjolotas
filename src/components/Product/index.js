import React from 'react'

import { connect } from 'react-redux'
import { updateShopping } from '../../actions'

function Product({ product, updateShopping}){

  const handleClick = () => {
    updateShopping({product})
  }

  return(
    <article className="product" onClick={handleClick}>
      <img src={product.imagen} alt={`Guajolota de ${product.tipo}`} />
      <div>
        <h3>{product.descripcion}</h3>
        <p><span>${product.precio} MXN</span></p>
      </div>
    </article>
  )
}

const mapDispatchToProps = {
  updateShopping
}

export default connect(null, mapDispatchToProps)(Product)