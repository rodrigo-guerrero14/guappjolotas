export default function reducers(state, action){
  switch (action.type) {

    case "CAMBIAR_CATEGORIA":
      return {
        ...state,
        categoriaActiva: action.payload
      }

    case "ACTUALIZAR_SHOPPING":
      return {
        ...state,
        shop: { ...action.payload}
      }

    case "AGREGAR_OFERTA":
      return {
        ...state,
        offers: [
          ...state.offers,
          action.payload
        ]
      }

    case "QUITAR_OFERTA":
      return {
        ...state,
        offers: state.offers.filter(item => item.id !== action.payload)
      }

    case "ACTUALIZAR_OFERTA":
      return {
        ...state,
        offers: state.offers.map( item => {
          if(item.id === action.payload.id){
            return {...item, amount: action.payload.amount}
          }
          return item
        })
      }

    case "ACTUALIZAR_TIPO_COMIDA":
      return {
        ...state,
        shop: {
          ...state.shop,
          product: {
            ...state.shop.product,
            tipo: action.payload
          }
        }
      }

    default: return { ...state }
  }
}