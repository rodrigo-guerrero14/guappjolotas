import { useSelector } from 'react-redux'

const useSearch = (keyword) => {
  const state = useSelector(state => state)
  const { guajolotas, bebidas, tamales } = state

  if(keyword !== ''){
    const guajolotasFinded = guajolotas.filter(item => item.descripcion.includes(keyword))
    const bebidasFinded = bebidas.filter(item => item.descripcion.includes(keyword))
    const tamalesFinded = tamales.filter(item => item.descripcion.includes(keyword))
    return [guajolotasFinded, bebidasFinded, tamalesFinded]
  } else{
    return []
  }
}

export default useSearch
