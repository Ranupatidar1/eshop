import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";


const Product =( {id, image, title, price, rating})=>{
    const [state,dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                rating: rating,
            },
        });
    };


    return(

       <div className="product">
        <div className="product-info">
             <p >{title} </p>
           <p className="product-price">
           <small>$</small>
           <strong>{price}</strong>
           </p> 
            <div className="product-rate">
            {Array(rating)
            .fill()
            .map((_, i) =>(
                <p>⭐</p>
            ))}

            </div>
            
        </div>
        
        <img src={image}  />
        <button onClick={addToBasket}>Add to Basket</button>
        </div>
     

    );
}
export default Product;