import '../components/NavBar.css';
import React from 'react';
import logo from '../imgs/logo.png';
import CardWidget from './CardWidget';



const NavBar = () => {
  return (
    <header className='navBar'>
        <img src={logo} alt="logo-tienda" />
        <h1>Nombre tienda</h1>
        <nav>
            <ul className='navLinks'>
                <a href="#">Ofertas</a>
                <a href="#">Categorias</a>
                <a href="#">Marcas</a>
            </ul>
            <div>
                CardWidget {/* cuando lo pongo entre etiquetas me da un error y no encuento por que */}
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar