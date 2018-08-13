import React from 'react'

const CartItemComponent = (props) => {
  return (<div className="list-group-item">
  <div className="row">
    <div className="col-md-8">{props.cartItem.product.name}</div>
    <div className="col-md-2">{props.cartItem.product.priceInCents}</div>
    <div className="col-md-2">{props.cartItem.quantity}</div>
  </div>
</div>)
}

export default CartItemComponent
