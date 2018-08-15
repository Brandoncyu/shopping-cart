import React from 'react'

const Total = ({ cartItemsList }) => {
  let totalPriceArray = cartItemsList.map(element => element.product.priceInCents * element.quantity)
  let totalPrice = totalPriceArray.reduce((acc, cur)=>{
    return acc + cur
  }, 0)
  return (<div className="container">Total Price: ${totalPrice/100}</div>)
}

export default Total
