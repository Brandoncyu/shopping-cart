import React, { Component } from 'react'

class AddItem extends Component{
  constructor (props){
    super(props)
    this.state = {
      product: {
        id: 0,
      },
      quantity: ''
    }
  }

  onChange = (event) =>{
    if (event.target.name === 'products'){
      this.setState({
        product: this.props.productItems.find(element => element.id ==  event.target.value),
        quantity: this.state.quantity
      })

    } else if (event.target.name === 'quantity'){
      this.setState({
        product: this.state.product,
        quantity: parseInt(event.target.value)
      })
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addToCart({product: this.state.product,
    quantity: this.state.quantity})
    event.target.quantity.value = 0
  }

  render(){
    return (<div className="container">
      <form onSubmit={ this.onSubmit }>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={this.onChange} type="number" className="form-control" name="quantity" id="quantity"  value={this.state.quantity} />
        </div>
        <div className="form-group">
          <label htmlFor="products">Product</label>
          <select name="products" onChange={this.onChange} className="form-control" id="products">
            { this.props.productItems.map((productItem, index) => <option key={index} value={ productItem.id }> {productItem.name} </option>) }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>)
  }
}

export default AddItem
