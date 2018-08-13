import React, { Component } from 'react';
import Header from './components/Header'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

const copyright = 2016

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CartItems />
        <CartFooter copyright={copyright}/>
      </div>
    );
  }
}

export default App;
