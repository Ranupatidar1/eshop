import React from "react";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {NavLink} from "react-router-dom";
import { useStateValue } from "./StateProvider"

const Header =()=>{
  const [{basket}, dispatch]= useStateValue();
    return(
       
            <div className="header">
              <NavLink to = "/" style={{textDecoration: "none"}}>
              <div className="header-logo">
                <StorefrontIcon  className="header-logoImg" fontSize ="large"/>
                   <h3 className =" header-logoTitle">eShop</h3>
                </div>
              </NavLink>
                
                
                
                 
                <div className="header-search">
                    <input type="text" className= "header-searchInput" placeholder="Search" />
                   < SearchIcon className=" header-searchIcon"/>
                    
                </div>


                     <div className="header-nav">
                     <div className="nav-item">
                        <span className="nav-itemLineone">hello guest</span>
                       <span className="nav-itemLinetwo">Login</span>

                     </div>

                     <div className="nav-item">
                     <span className="nav-itemLineone">your</span>
                       <span className="nav-itemLinetwo">Shop</span>

                     </div>
                     <NavLink to = "/Checkout" style={{textDecoration: "none"}}>
                     <div  className="nav-itemBasket">
                    <ShoppingBasketIcon />
                       <span className="nav-itemLinetwo nav-basketCount">{basket.length}</span>

                   </div>
                     </NavLink>
                    
                  
                    
                    </div>
                
                
        </div>
       
    )

}
export default Header;