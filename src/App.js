import React from 'react';
import Checkout from './Checkout';
import CustomCheckout from './CustomCheckout';
import './App.css';

function App() {
  return (
    <div className="App col-md-12">
    <div className="col-md-6">
      <h4>Default Stripe-Style:</h4>
      <Checkout />
    </div>
    <div className="col-md-6">
      <h4>Custom Stripe-Style: </h4>
      <CustomCheckout />
    </div>
    </div>
  );
}

export default App;
