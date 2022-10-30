import React from "react";
import "./Header.css";
import Product from "./Product";
import "./Home.css"
const Home =()=>{
    return(
        <div>
      <div className="home">
        <div className="home-container">
            <img src="https://www.x-cart.com/img/16591/ecommerce-p1500.jpg" alt="" className="home-image" />
            <div className="home-row">


            <Product
            id="123456"
            title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Bag Water pellent Fabric for Men and Women (Blue)"
                   
                
            price={11.96}
            rating={5}
            image="https://tamil.samayam.com/photo/90005744.cms"
            
            />
          <Product
            id="123457"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black,With Starter Kit)"
            price={239}
            rating={5}
            image="https://img.etimg.com/photo/msid-93633054,quality-100/ifb-20l-grill-microwave-oven.jpg"
            />
            
            </div>
            <div className="home-row">
             <Product
             id="123458"
             title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
             price={199.99}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/71ZX-2C+9lL.jpg"
             />
             <Product
             id="123459"
             title="Amazon Echo (3rd generation) | . Smart speaker with Alexa, Charcoal Fabric"
             price={98.99}
             rating={5}
             image="https://png.pngitem.com/pimgs/s/298-2985231_transparent-amazon-alexa-png-amazon-echo-plus-2019.png"
             />
             <Product
             id="123460"
             title="New Apple iPad Pro (12.9-inch, Wi Fi, 128GB) - Silver (4th Generation)"
             price={598.99}
             rating={5}
             image="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2020.jpg"
             />
            </div>
            <div className="home-row">
             <Product
             id="123461"
             title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor-Super Ultra Wide Dual WQHD 5120 x 1440"
             price={1094.98}
             rating={5}
             image="https://www.picclickimg.com/d/l400/pict/203275054078_/Samsung-C49RG90-49-QLED-Curved-Ultra-Wide-Dual.jpg"
             />
            </div>

        </div>
      </div>
      </div>
      


    )
}
export default Home;