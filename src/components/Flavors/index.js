import '../../style/flavor.css'
import Flavor from '../Flavor'
import { connect } from 'react-redux'

function Flavors(props){
    return (
      <section className="sabores">
        <h3>Sabor</h3>
        {props.sabores.map((sabor) => {
          if(props.categoriaActiva === "bebidas" && sabor.tipo === "bebida"){
            return (
              <Flavor key={sabor.nombre} sabor={sabor} active={props.shop.product.tipo} categoriaActiva={props.categoriaActiva}/>
            )
          }
          if(props.categoriaActiva !== "bebidas" && sabor.tipo === "guajolota"){
            return (
              <Flavor key={sabor.nombre} sabor={sabor} active={props.shop.product.tipo} categoriaActiva={props.categoriaActiva}/>
            )
          }
          })
        }
      </section>
    )
}

const mapStateToProps = state => {
  const { sabores, categoriaActiva, shop } = state
  return { sabores, categoriaActiva, shop }
}

export default connect(mapStateToProps, null)(Flavors)