import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

 const CheckoutProduct =({ id, image, title, price, rating }) =>{
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return(
        <div className="checkoutProduct">

        <img src={image} alt="" className="checkoutProduct-image" />
        
        <div className="checkoutProduct-info">
        
        <p className="checkoutProduct-title">
        {title}
        </p>
        <p className="checkoutProduct-price">
         <small>$</small>
        <strong>{price}</strong>
        </p>
         <div className="checkoutProduct-rating">
         {rating}
         </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
        
        
        </div>
        
        </div>
    )
 }
 export default CheckoutProduct;