import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Sabtotal.css";
const Sabtotal =()=>{
    return(
 <div className="subtotal">

   <CurrencyFormat
        
        renderText={(value) => (
           <>
                <p>
                 Subtotal (0 items): <strong>$0</strong>
               </p>
                <small className="subtotal-gift">
                   <input type="checkbox" />  this order contain a gif
               </small>
        </>
        )}
        decimalScale= {2}
         value= {0}
       displayType={"text"}
       thousandSeparator={true }
        
    />
    <button> proceed to checkout</button>
 </div>

    )
}
export default Sabtotal;