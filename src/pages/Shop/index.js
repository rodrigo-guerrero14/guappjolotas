import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import Counter from '../../components/Counter'
import Flavors from '../../components/Flavors'
import Offers from '../../components/Offers'
import Button from '../../components/Button'

import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useGetTotalPrice from '../../hooks/useGetTotalPrice'
import { connect } from 'react-redux'

import { updateShopping } from '../../actions'
// import useGetProduct from '../../hooks/useGetProduct'

function Shop(props){
  const { id } = useParams()
  const { categoryProduct } = useParams()

  const history = useHistory()
  const [ counter, setCounter ] = useState(1)

  const handleClickSuma = ()=>{
    setCounter(counter + 1)
  }

  const handleClickMenos = () => {
    setCounter(counter - 1)
  }

  const handleButton = () => {
    history.push(`/cart`)
  }

  useEffect(()=>{
    props.updateShopping({...props.shop, amount: counter})
  },[ counter, setCounter ])

  const total = useGetTotalPrice()

  return(
    <>
      <Header isShop={true} prevUrl={`/products/${categoryProduct}/${id}`}/>
      <Carousel totalPrice={total}/>
      <Counter handleClickSuma={handleClickSuma} handleClickMenos={handleClickMenos} counter={counter}/>
      <Flavors categoryProduct={categoryProduct} idProduct={id} />
      <Offers />
      <Button type='addToShop' handleButton={handleButton} totalPrice={total}/>
    </>
  )
}

const mapDispatchToProps = {
  updateShopping
}

const mapStateToProps = state => {
  const {shop} = state
  return {shop}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)