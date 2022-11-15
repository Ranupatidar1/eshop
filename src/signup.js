import "./signup.css";
import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {auth} from "./firebase";
const Signup =()=>{
    const navigate= useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
     const [password, setPassword]= useState("");
     
     const register=e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                navigate("/")
            }
           
        })
        .catch(error=>alert(error.message))
     }
    return(
        <div >

      <div className="main">
      
        <div className="login-container">
        <h3>sign in</h3>
        
          <h4>Name</h4>
          <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
          <h4>E-mail</h4>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
          <h4>password</h4>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
          
          <p> By signing-up you agree to the eShop Website of Use & Sale. Please see our Privacy Notice,our Cookies Notice and our Interest-BasedAds Notice.
       </p>
        <button className="login-signupButton" onClick={register}>Signup</button>   
        
      </div>
      </div>
      </div> 
    )
}
export default Signup;