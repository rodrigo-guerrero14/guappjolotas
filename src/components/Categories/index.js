import '../../style/categories.css'

import { setCategories } from '../../actions'
import { connect } from 'react-redux'

function Categories(props){

  let categoriaCss = ""

  switch (props.categoriaActiva){
    case "tamales":
      categoriaCss = "tamalesIsActive"
      break
    case "bebidas":
      categoriaCss = "bebidasIsActive"
      break
    default:
      categoriaCss = "guajolotasIsActive"
      break
  }

  return(
    <section className={`main__categories ${categoriaCss}`}>
      <button onClick={() => props.setCategories("guajolotas")}>Guajolotas</button>
      <button onClick={() => props.setCategories("bebidas")}>Bebidas</button>
      <button onClick={() => props.setCategories("tamales")}>Tamales</button>
    </section>
  )
}

const mapDispatchToProps = {
  setCategories
}

const mapStateToProps = state => {
  const {categoriaActiva} = state
  return {categoriaActiva}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)