import React, { Component, useState } from "react";

class Body extends  React.Component {
    render() {
  
      return (
   <section id="hero" className="hero d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      {/* <h1 data-aos="fade-up"> {this.props.thename}</h1> */}
      <h2 >This project to connect front end (reacr js) wih back end spring boot</h2>
      <div >
        <div className="text-center text-lg-start">
          <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Get Started</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src="assets/img/hero-img.png" className="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>

      )    }
  }
  export default Body