import React from 'react'
import '../../style/products.css'
import { Link } from 'react-router-dom'
import Product from '../Product'

const ProductList = ({List}) => {
  const { products, category } = List
  if(products.length === 0){
    return null
  }
  return (
    <section className="products">
      <h2>{category}</h2>
      {products.map(item => {
        return (
          <Link to={`/products/${category}/${item.id}`}>
            <Product product={item} />
          </Link>
        )}
      )}
    </section>
  )
}

export default ProductList