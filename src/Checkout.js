import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Sabtotal from "./Sabtotal";
import "./Checkout.css";
const Checkout =()=>{
    return(
<div>
    <div className="checkout">

        <div className="checkot-left">
           <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt=""  className="checkout-add"/>
             <div className="checkout-title">
             <h2>Your Shopping Basket </h2>
                <CheckoutProduct/>
                <CheckoutProduct/>
             </div>
       
        </div>

        <div className="checkout-right">
         <Sabtotal/>
        </div>
    </div>
</div>
    )
}
export default Checkout;