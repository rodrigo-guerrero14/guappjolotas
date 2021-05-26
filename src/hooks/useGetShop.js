import { useSelector } from 'react-redux'

const useGetShop= () => {
  let shop = useSelector(state => state.shop)
  console.log(shop)
}

export default useGetShop