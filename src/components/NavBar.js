import React from 'react';
import '../components/NavBar.css';
import logo from '../imgs/logo.png';
/* import { RiShoppingCartLine } from 'react-icons/fa'; */
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

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
                {/* <RiShoppingCartLine /> */}
                <ShoppingCartTwoToneIcon sx={{ fontSize: 40 }} />
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar