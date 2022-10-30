import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const App=()=> {
  return (
    <div className="App">
  
    
      <Routes>
      <Route path="/Checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path='/' element={<><Header/><Home/></>}></Route>
      </Routes>
   
    </div>

    
  );
  }

export default App;
