import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';


function Navbar(){
    
    return(
      <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img id='logo' src="./assets/pulaCon.jpg" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span ></span>
          <span ></span>
          <span ></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 position-sticky">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/"} id="txt">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/about"} id="txt">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/services"} id="txt">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/projects"} id="txt">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/blog"} id="txt">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/reviews"} id="txt">Reviews</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/contact"} id="txt">Contact</Link>
                </li>
          </ul>
          <ul className ="navbar-nav ml-auto">
            <button className="btn" type="submit" id='textBtn'>Get a Quote</button>
          </ul>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;
