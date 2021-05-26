import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { addOffer, deleteOffer } from '../../actions'

function Input({offer, addOffer, deleteOffer}){
  const [ checked, setChecked ] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    if(checked){
      addOffer({...offer, amount: 1})
    }else{
      deleteOffer(offer.id)
    }
  }, [checked, setChecked])

  return(
    <input type="checkbox" id={`${offer.tipo}-${offer.id}`} onChange={handleChecked}/>
  )
}

const mapDispatchToProps = {
  addOffer,
  deleteOffer
}

export default connect(null, mapDispatchToProps)(Input)