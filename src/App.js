import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './login';
import Signup from './signup';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const App=()=> {
  return (
    <div className="App">
  
    
      <Routes>
      <Route path="/Checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path='/home' element={<><Header/><Home/></>}></Route>
          <Route path='/' element={<><Header/><Login/></>}></Route>
          <Route path='/signup' element={<><Header/><Signup/></>}></Route>
      </Routes>
   
    </div>

    
  );
  }

export default App;
