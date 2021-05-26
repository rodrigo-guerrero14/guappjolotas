import '../../style/header.css'
import logo from '../../assets/images/logo.png'
import shopCart from '../../assets/images/shopping-cart.png'
import arrow from '../../assets/images/arrow-left.svg'

import { useHistory, Link } from 'react-router-dom'

function Header({ isShop, isCart}){

  const history = useHistory()
  const handleBack = () => {
    history.push('/products')
  }

  if(isShop){
    return (
      <section className="header">
        <img src={arrow} alt="arrow to back" className="header__arrow" onClick={handleBack}/>
        <img src={shopCart} alt="shop cart" className="header__shop-cart" />
      </section>
      )
  }

  if(isCart){
    return (
      <section className="header">
        <img src={arrow} alt="arrow to back" className="header__arrow" onClick={handleBack} />
        <h2>Carrito</h2>
      </section>
    )
  }

  return (
   <section className="header">
     <img src={logo} alt ="Logo" className="header__logo"/>
     <Link to={`/cart`}>
      <img src={shopCart} alt="shop cart" className="header__shop-cart"/>
     </Link>
   </section>
 )
}

export default Header