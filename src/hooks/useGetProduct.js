import { useSelector } from 'react-redux'

const useGetProduct = (idProduct) => {
  let state = useSelector(state => state)

  switch (state.categoriaActiva) {
    case 'bebidas':
      return { product: state.bebidas.find(item => item.id === idProduct) }
    case 'guajolotas':
      return { product: state.guajolotas.find(item => item.id === idProduct) }
    case 'tamales':
      return { product: state.tamales.find(item => item.id === idProduct) }
    default:
      return null
  }
}

export default useGetProduct