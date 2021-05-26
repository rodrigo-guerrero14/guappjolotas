import React from 'react'
import { connect } from 'react-redux'

const CarouselItem = ( props) => {

  switch(props.categoriaActiva){
    case "guajolotas":
      return (
        props.guajolotas.map((item) => {
          return (
            <div className="slider-slide" key={item.id}>
              <img src={item.imagen} alt={item.nombre} id={`image-${item.id}`}/>
            </div>
              )
            })
      )
    case 'tamales':
      return (
        props.tamales.map((item) => {
          return (
            <div className="slider-slide" key={item.id}>
              <img src={item.imagen} alt={item.nombre} id={`image-${item.id}`}/>
            </div>
          )
        })
      )
    case 'bebidas':
      return (
        props.bebidas.map((item) => {
          return (
            <div className="slider-slide" key={item.id}>
              <img src={item.imagen} alt={item.nombre} id={`image-${item.id}`}/>
            </div>
          )
        })
      )
    default:
      return null
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(CarouselItem)