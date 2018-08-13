import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;
