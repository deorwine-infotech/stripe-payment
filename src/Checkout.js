import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

 
export default class Checkout extends Component {

  onToken = token => {
    // console.log(token, 'token')
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("http://localhost:8000/", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
 
  // ...
 
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
      />
    )
  }
}