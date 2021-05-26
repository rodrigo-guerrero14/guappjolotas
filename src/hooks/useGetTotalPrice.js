import { useSelector } from 'react-redux'

const useGetTotalPrice = () => {
  const shop = useSelector(state => state.shop)
  const offers = useSelector(state => state.offers)
  let totalShop = 0
  let totalOffer = 0

  if(shop){
    totalShop = shop.product.precio * shop.amount
  }

  if(offers){
    offers.forEach(element => {
      totalOffer += element.precio * element.amount
    });
  }

  return totalShop + totalOffer
}

export default useGetTotalPrice