
import './App.css';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/cart' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;