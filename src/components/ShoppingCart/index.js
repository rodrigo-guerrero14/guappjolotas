import React from 'react'
import shoppingCart from '../../assets/images/shopping-cart-xl.png'
import '../../style/shopping-cart.css'

import { connect } from 'react-redux'
import CartProduct from '../CartProduct'
import ShoppingTotal from '../ShoppingTotal'

function ShoppingCart(props){
  const { product, amount } = props.shop

  if (Object.keys(props.shop).length === 0) {
    return(
      <section className="shopping-cart">
        <div className="no-products">
          <img src={shoppingCart} alt="Shopping cart" className="cart-image" />
          <h3 className="none-products">No hay productos</h3>
        </div>
      </section>
    )
  }else {
    return (
      <section className="shopping-cart">
        <CartProduct product={product} amount={amount} offer={false} key={'product'}/>
        {props.offers.map(item => <CartProduct product={item} amount={item.amount} offer={true} key={`${item.tipo}-${item.id}`}/>)}
        <ShoppingTotal />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  const {shop, offers} = state
  return {
    shop,
    offers
  }
}

export default connect(mapStateToProps, null)(ShoppingCart)