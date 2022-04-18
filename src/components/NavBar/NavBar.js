
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';


function NavBar (){
    return(
    <nav>
    <div>
      <NavLink to = '/'>
        <img src="https://es.logodownload.org/wp-content/uploads/2019/08/funko-logo-81.png"/>
      </NavLink>      
      <button >
        <span ><CartWidget/></span>
      </button>
      <div >
        <div className>
          <Link className="nav-link" aria-current="page" to = '/'>INICIO</Link>
          <Link className="nav-link" to = '/category/marvel'>MARVEL</Link>
          <Link className="nav-link" to = '/category/movie'>MOVIE</Link>
          <Link className="nav-link" to = '/category/dc'>DC COMICS</Link>
          <Link className="nav-link" to = '/category/dragonball'>DBZ</Link>
          <Link className="nav-link" to = '/category/starwars'>STAR WARS</Link>
          
        </div>
      </div>
    </div>

  </nav>
  )
}

export default NavBar; 