
import React, {useState , useEffect} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ListsData from "./ListsData";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
  
function Home(){

    return(
<div>
       

        <BrowserRouter>
      <Routes>

        <Route  path="/" exact element={<Body />}>
    
        </Route>


        <Route  path="/api" exact element={<ListsData />}>

        </Route>

      </Routes>
    </BrowserRouter>
 
      
   
    <Header username="wael"/>
    <ListsData />
    
 
    
     
        </div>
    );
}
export default Home;
