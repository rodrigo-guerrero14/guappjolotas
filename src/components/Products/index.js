import '../../style/products.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../Product'

function Products(props){

  switch(props.categoriaActiva){
    case "guajolotas":
      return (
        <section className="products">
          {
            props.guajolotas.map(item => (
              <Link to={`/products/guajolotas/${item.id}`} key={item.id}>
                <Product product={item} />
              </Link>
            ))
          }
        </section>
      )

    case "bebidas":
      return (
        <section className="products">
          {
            props.bebidas.map(item => (
              <Link to={`/products/bebidas/${item.id}`} key={item.id}>
                <Product product={item} />
              </Link>
            ))
          }
        </section>
      )

    case "tamales":
      return (
        <section className="products">
          {
            props.tamales.map(item => (
              <Link to={`/products/tamales/${item.id}`} key={item.id}>
                <Product product={item} />
              </Link>
            ))
          }
        </section>
      )
    default: return null
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Products)