import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Sabtotal from "./Sabtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";


const Checkout =()=>{
    const [{basket},dispatch] = useStateValue();
     return(
<div>
    <div className="checkout">

        <div className="checkot-left">
           <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt=""  className="checkout-add"/>
             <div className="checkout-title">
             <h2>Your Shopping Basket </h2>
             {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                
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