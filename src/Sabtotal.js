import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Sabtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";



const Sabtotal =()=>{
   const[{basket},dispatch] = useStateValue();
    return(
 <div className="subtotal">

   <CurrencyFormat
        
        renderText={(getBasketTotal) => (
           <>
                <p>
                 Subtotal ({basket.length} items): <strong>${getBasketTotal}</strong>
               </p>
                <small className="subtotal-gift">
                   <input type="checkbox" />  this order contain a gif
               </small>
        </>
        )}
              decimalScale={2}
              value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
        
    />
    <button> proceed to checkout</button>
 </div>

    )
}
export default Sabtotal;