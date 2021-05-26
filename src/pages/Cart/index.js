import React from 'react'
import Header from '../../components/Header'
import ShoppingCart from '../../components/ShoppingCart'
import Button from '../../components/Button'

const Cart = () => {

  const handleButton = ()=>{
    
  }

  return(
    <>
      <Header isCart={true}/>
      <ShoppingCart />
      <Button type='payment' handleButton={handleButton}/>
    </>
  )
}

export default Cart