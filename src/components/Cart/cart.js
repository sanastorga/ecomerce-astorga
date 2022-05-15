import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import './cart.css'


const Cart = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1)
  }
  const { cart, clearCart, removeItem, cartTotal} = useContext(CartContext);

  if(cart.length === 0) {
    return  <div className="container my-5 d-flex justify-content-center flex-column align-items-center">
              <h2>Tu carrito está vacío</h2>
              <hr/>
              <h5>Vuelve al shop para comprar</h5>
              <Link to={"/"} className="text-button my-4" style={{fontWeight: "bold",color:'#ad08c0'}}><FontAwesomeIcon icon={faArrowLeft}/> VOLVER</Link>
            </div>
  }
  return (
    <div className='container my-5 contenedor'>
      <button  className="getBack-btn" onClick={handleNavigate} type="button"><span className="text-button"><FontAwesomeIcon icon={faArrowLeft}/> VOLVER ATRAS</span></button>
      <br/>
      <hr/>
      <h2>Tu Compra</h2>
      <hr/>
      {
        cart.map((item) => (
          <div key={item.id} className='divProducto' >
            <table className='table'>
              <tr className='tableTr'>
                <td className='tableTd'>
                  <img src={item.pictureURL !== undefined? item.pictureURL : console.log('error')} className="imageCart" alt="{item.title}"/>
                </td>
                <td className='tableTd'>
                  <h4>{item.title}</h4>
                  <p>Cantidad: {item.count}</p>
                  <h5>Precio unitario: U$S {item.price}</h5>  
                  <h5>Precio total: U$S {item.price * item.count}</h5>
                  <button className="btnRemove" onClick={() => removeItem(item.id)}>
                    Eliminar producto
                  </button>
                </td>
              </tr>
            </table>
            <hr/>  
          </div>
      ))      
    }
    <h3>TOTAL: U$S {cartTotal()} </h3>
    <hr/>
    <button className="btnVaciar" onClick={clearCart} disabled={cart.length === 0}>Vaciar carrito</button>
    <Link to="/checkout" className="btnTerminarCompra">Terminar mi compra</Link>
    </div>
  )
}

export default Cart