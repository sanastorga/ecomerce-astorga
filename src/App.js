
import './App.css';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext'
import Cart from './components/cart'

function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/cart' element={<Cart/>}/>
          <Route path= '/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;