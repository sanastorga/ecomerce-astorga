
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';


function NavBar (){
    return(
  <nav className="navBar">
    <div>
      <NavLink  to = '/'>
        <img className="funkoLogo" src="https://download.logo.wine/logo/Funko/Funko-Logo.wine.png"/>
      </NavLink>      
    </div >
    <div className="funkoNavs">
        <Link className="nav-link" aria-current="page" to = '/'>INICIO</Link>
        <Link className="nav-link" to = '/category/marvel'>MARVEL</Link>
        <Link className="nav-link" to = '/category/movie'>MOVIE</Link>
        <Link className="nav-link" to = '/category/dc'>DC COMICS</Link>
        <Link className="nav-link" to = '/category/dragonball'>DBZ</Link>
        <Link className="nav-link" to = '/category/starwars'>STAR WARS</Link>          
      </div>
      <div >
        <Link  to = '/cart'><CartWidget/></Link>
      </div>
  </nav>
  )
}

export default NavBar; 