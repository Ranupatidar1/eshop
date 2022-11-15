import "./login.css";
import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {auth} from "./firebase";
const Login =()=>{
    const navigate= useNavigate()
    const [email, setEmail] = useState("");
     const [password, setPassword]= useState("");
     const signin =e=>{
        e.preventDefault();
        auth
       .signInWithEmailAndPassword(email,password)
       .then(auth=>{
        navigate("/home");
       })
       .catch(error=>alert(error.message))
     }
    
    return(
        <div >

      <div className="main">
      
        <div className="login-container">
        <h3>sign in</h3>
        
          <h4>E-mail</h4>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
          <h4>password</h4>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
          <button  className="login-button" onClick={signin}>signin</button>
          <p> By signing-in you agree to the eShop Website of Use & Sale. Please see our Privacy Notice,our Cookies Notice and our Interest-BasedAds Notice.
       </p>
       <Link to = "/signup" style={{textDecoration: "none", color:"darkgray"}}><button className="login-signup">Create your eShop account</button></Link>
           
        
      </div>
      </div>
      </div> 
    )
}
export default Login;