import { useSelector } from 'react-redux'

const useGetOffers = () => {
  let state = useSelector(state => state)
  switch(state.categoriaActiva){
    case 'bebidas':
      return {products: state.bebidas, categoriaActiva: state.categoriaActiva, offers: state.guajolotas}
    case 'guajolotas':
      return { products: state.guajolotas, categoriaActiva: state.categoriaActiva, offers: state.bebidas}
    case 'tamales':
      return { products: state.tamales, categoriaActiva: state.categoriaActiva, offers: state.guajolotas}
    default:
      return null
  }
}

export default useGetOffers
