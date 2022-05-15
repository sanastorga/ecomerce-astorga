
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext'
import Cart from './components/Cart/cart'
import Checkout from './components/CheckOut/CheckOut'
import Footer from './components/Footer/Footer'

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
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>        
      </BrowserRouter>
      <Footer/>      
    </CartProvider>
  );
}

export default App;