import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductSelection from './components/ProductSelection';
import Confirmation from './components/Confirmation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: true,
      confirmation: false,
      addedProducts: [],
    };
  }

  componentWillMount() {
    document.cookie = 'customerId=12345';
  }

  onChangeRoute(addedProducts) {
    if (addedProducts) {
      this.state.confirmation = true;
      this.state.product = false;
      this.state.addedProducts = addedProducts;
    } else {
      this.state.confirmation = false;
      this.state.product = true;
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My E-Shop</h2>
        </div>
        {this.state.product && <ProductSelection onChangeRoute={this.onChangeRoute.bind(this)} />}
        {this.state.confirmation && <Confirmation addedProducts={this.state.addedProducts} onChangeRoute={this.onChangeRoute.bind(this)} />}
      </div>
    );
  }
}

export default App;
