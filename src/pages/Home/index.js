import logo from '../../assets/images/logo.png'
import '../../style/home.css'
import { Link } from 'react-router-dom'

function Home(){
  return(
    <section className="home">
      <Link to="/products">
        <img src={logo} alt="Logo"/>
      </Link>
    </section>
  )
}

export default Home