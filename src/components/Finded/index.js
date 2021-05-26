import React from 'react'
import { Link } from 'react-router-dom'
import iconSearch from '../../assets/images/feather_search.png'
import '../../style/findedList.css'

import ProductsList from '../ProductsList'

const Finded = ({productsFinded}) => {

  if (productsFinded.length === 0){
    return (
      <section className="finded-list initial">
        <img src={iconSearch} alt="search icon" />
        <h1>Realiza una búsqueda</h1>
      </section>
    )
  }else{
  return (
    <section className="finded-list">
      {productsFinded.map((productList, index) => {
        let category = ""
        if(index === 0){
          category = 'guajalotas'
        }
        if (index === 1) {
          category = 'bebidas'
        }
        if(index === 2){
          category = 'tamales'
        }
        return <ProductsList List={{products: productList, category: `${category}`}}/>
        }
      )}
    </section>
  )}
}

export default Finded