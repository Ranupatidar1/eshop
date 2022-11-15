import React from "react";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider"


const Header =()=>{
  const [{basket},dispatch] = useStateValue();
    return(
       
            <div className="header">
              <Link to = "/home" style={{textDecoration: "none"}}>
              <div className="header-logo">
                <StorefrontIcon  className="header-logoImg" fontSize ="large"/>
                   <h3 className =" header-logoTitle">eShop</h3>
                </div>
              </Link>
                
                
                
                 
                <div className="header-search">
                    <input type="text" className= "header-searchInput" placeholder="Search" />
                   < SearchIcon className=" header-searchIcon"/>
                    
                </div>


                     <div className="header-nav">
                      <Link to = "/" style={{textDecoration: "none" ,color:"white"}}><div className="nav-item">
                        <span className="nav-itemLineone">hello guest</span>
                       <span className="nav-itemLinetwo">Login</span>

                     </div></Link>
                      <Link to = "/signup" style={{textDecoration: "none" ,color:"white"}}><div className="nav-item">
                        <span className="nav-itemLineone">hello guest</span>
                       <span className="nav-itemLinetwo">Signup</span>

                     </div></Link>
                     

                     <div className="nav-item">
                     <span className="nav-itemLineone">your</span>
                       <span className="nav-itemLinetwo">Shop</span>

                     </div>
                     <Link to = "/Checkout" style={{textDecoration: "none"}}>
                     <div  className=" nav-itemLineone nav-itemBasket">
                    <ShoppingBasketIcon />
                       <span className="nav-itemLinetwo nav-basketCount">{basket.length}</span>

                   </div>
                     </Link>
                    
                  
                    
                    </div>
                
                
        </div>
       
    )

}
export default Header;