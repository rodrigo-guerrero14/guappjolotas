import '../../style/search.css'
import { Link } from 'react-router-dom'

function Search({ isSearcher, searching}){

  if(isSearcher){
    return(
      <section className="search-container">
        <input type="text" placeholder="Sabor de guajolota, bebida..." className="search" onChange={searching}/>
        <Link to='/products'>
          <button>Cancelar</button>
        </Link>
      </section>
    )
  } else {
  return (
    <Link to ='/searcher'>
      <input type="text" placeholder="Sabor de guajolota, bebida..." className="search"/>
    </Link>
  )}
}

export default Search