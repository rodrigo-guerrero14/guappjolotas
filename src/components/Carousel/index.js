import '../../style/carousel.css'
import { connect } from 'react-redux'
import CarouselItem from '../CarouselItem'
import SliderBullet from '../SliderBullet'
// import { useParams } from 'react-router-dom'

function Carousel(props){
  const { shop, categoriaActiva, totalPrice } = props

  return (
    <section className="carousel">
      <div className="slider">

        <div className="slider-container">
          <CarouselItem />
        </div>

        <div className="slider-bullet-list">
          <SliderBullet />
        </div>
      </div>

      <div className="carousel__description">
        <h3>{categoriaActiva} {shop.tipo}</h3>
        {/* <p><span>${shop.product.precio * shop.amount} MXN</span></p> */}
        <p><span>${totalPrice} MXN</span></p>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Carousel)