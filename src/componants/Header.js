import React from "react";

import {useState} from "react";
import { NavLink, Route, Router } from "react-router-dom";
function Header(props){

    const [name,setName]=useState("wale"); // use state it use to can change the valrible


    return (

  <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="./assets/img/logo.png" alt=""/>
        <span>FlexStart</span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
     
          <li><a className="nav-link scrollto active" href="#hero">@{props.username}</a></li>
          <li><a className="nav-link scrollto" href="#" onClick={()=>setName("yazan")}>{name} </a></li>
      <li></li>
     
          {/* <li> <Link  to="/">About</Link></li> */}
          {/* <li><a className="nav-link scrollto" to="/">About</a></li> */}
        {/* <li> <Link  to="/api">API</Link> </li> */}
         
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
    </header>
  
    
  );
}
export default Header;
