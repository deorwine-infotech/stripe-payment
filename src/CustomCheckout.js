import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

 
export default class CustomCheckout extends Component {

  onToken = token => {
    console.log(token, 'token')
    const body = {
      amount: 1000,
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
 
  render() {
    return (
      // ...
      <div>

      
      <StripeCheckout
        token={this.onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
        name="Demo Site Co." // the pop-in header title
        description="This Is Demo" // the pop-in header subtitle
        image="http://www.pngall.com/wp-content/uploads/2016/04/Sunflowers-PNG-Clipart.png" // the pop-in header image (default none)
        ComponentClass="div"
        label="Pay Rs. 1000" // text inside the Stripe button
        panelLabel="Pay" // prepended to the amount in the bottom pay button
        amount={100000} // cents
        currency="INR"
        locale="auto"
        email="this_is_demo@demo.com"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay // accept Alipay (default false)
        bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        // reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        // triggerEvent="onClick"
      />
      
    </div>
    )
  }
}