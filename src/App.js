import React, { Component } from 'react';
import Header from './components/Header'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import Total from './components/Total'
import axios from 'axios'

const copyright = 2016

class App extends Component {
  constructor (){
    super()
    this.state = {
      cartItemsList: [],
      products: []
    }
  }

  async componentDidMount(){
    const itemsPull = await axios.get('http://localhost:8082/api/items')
    const products = await axios.get('http://localhost:8082/api/products')

    let items = itemsPull.data.map(element => {
      let product = products.data.find(e => e.id === element.product_id)
      element.product = product
      return element
    })


    this.setState({
      cartItemsList: items,
      products: products.data
    })
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
        <AddItem productItems={this.state.products} addToCart={this.addToCart} />
        <CartFooter copyright={copyright}/>
      </div>
    );
  }
}

export default App;
