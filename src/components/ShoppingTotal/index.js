import React from 'react'
import useGetTotalPrice from '../../hooks/useGetTotalPrice'

function ShoppingTotal(){
  const total = useGetTotalPrice()
  return (
    <div className="total">
      <h3>Total</h3>
      <span>${total} MXN</span>
    </div>
  )
}

export default ShoppingTotal