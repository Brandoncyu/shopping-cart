import React, { Component } from 'react';
import Header from './components/Header'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import Total from './components/Total'

const copyright = 2016

// const cartItemsList = [
//   { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
//   { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
//   { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
// ]
//
// const addToCart = ({quantity, product}) => {
//   const index = cartItemsList.length
//   cartItemsList.push({ id: index, product, quantity })
//   console.log(cartItemsList)
// }

const product = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
]

class App extends Component {
  constructor (){
    super()
    this.state = {
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  addToCart = ({quantity, product}) => {
    let id = this.state.cartItemsList.length + 1
    let newArray = [ ...this.state.cartItemsList, { id, product, quantity } ]
    this.setState( {product: this.state.product, cartItemsList: newArray })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <Total cartItemsList={this.state.cartItemsList} />
        <AddItem productItems={product} addToCart={this.addToCart} />
        <CartFooter copyright={copyright}/>
      </div>
    );
  }
}

export default App;
