import React from "react";
import Navbar from "./Compunent/Navbar/Navbar";
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from "./Compunent/Home";
import About from "./Compunent/About";
import Skill from "./Compunent/Skill";
import Contatc from "./Compunent/Contatc";
import Signup from "./Compunent/Signup";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes >
      <Route path="/" element={<Home/>}/> 
     
     <Route path="/Signup" element={<Signup/>}/> 
    
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
