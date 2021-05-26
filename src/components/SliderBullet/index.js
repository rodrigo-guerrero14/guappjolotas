import React from 'react'
import { connect } from 'react-redux'

const SliderBullet = (props) => {
  switch(props.categoriaActiva){
    case 'guajolotas':
      return (
        props.guajolotas.map(item => (
          <a href={`#image-${item.id}`} className="slider-bullet" key={item.id} ><i /></a>
        ))
      )
    case 'tamales':
      return (
        props.tamales.map(item => (
          <a href={`#image-${item.id}`} className="slider-bullet" key={item.id}><i /></a>
        ))
      )

    case 'bebidas':
      return (
        props.bebidas.map(item => (
          <a href={`#image-${item.id}`} className="slider-bullet" key={item.id}><i /></a>
        ))
      )
    default: return null
  }
}

const mapStateToProps = state => {
  return {
    categoriaActiva: state.categoriaActiva,
    guajolotas: state.guajolotas,
    bebidas: state.bebidas,
    tamales: state.tamales
  }
}

export default connect(mapStateToProps, null)(SliderBullet)