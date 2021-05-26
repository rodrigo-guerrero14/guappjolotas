import React from 'react'
import { connect } from 'react-redux'
import { updateTypeFood } from '../../actions'

function Flavor({sabor, active, updateTypeFood }) {

  function isActive(){
    if(active === sabor.nombre){
      return null
    }else{
      return 'disabled'
    }
  }

  const handleClick = () => {
    updateTypeFood(sabor.nombre)
  }

  return(
      <article onClick={handleClick}>
        <img src={sabor.imagen} alt={`Sabor de ${sabor.nombre}`} className={`${isActive()}`}/>
      </article>
    )
}

const mapDispatchToProps = {
  updateTypeFood
}

export default connect(null, mapDispatchToProps)(Flavor)