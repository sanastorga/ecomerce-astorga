import React from 'react'
import { NavLink, useNavigate, } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'



const ItemDetail = ({productDetail}) => {
    const {id, title, price, pictureURL, descripcion, stock} = productDetail;
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(-1)
    }

    const [count, setCount] = useState(0);
    const { addItem, isInCart } = useContext(CartContext);

    const agregarAlCarrito = () => {
      const itemToAdd = {
        id,
        title,
        price,
        pictureURL,
        count,
      }
      count > 0 && addItem(itemToAdd)
    }
  
    return (
      <div style={{width: 18+'rem'}}>
          <h1 className="card-title" style={{margin:40+'px'}}>{title}</h1>
          <div className='d-flex detailCard'> 
            <img src={pictureURL} style={{minWidth:300+'px'}} className="card-img-top" alt="..."/>
            <div className="d-flex flex-column infoContainer" >
                <p className="card-text" style={{backgroundColor:'#212529', color:'white', borderRadius:5+'px'}}>{price}</p>
                <p>{descripcion}</p>
                <br/>
                {
                  !isInCart(id)
                  ? <ItemCount
                      stock={stock} 
                      initial={0} 
                      onAdd={agregarAlCarrito}
                      setCount={setCount}
                      count={count}
                    />
                  : <NavLink to='/cart' className="btn btn-success my-3">Terminar mi compra</NavLink>
                }
                <hr/>
                <button  className="getBack-btn" onClick={handleNavigate} type="button">Volver</button>
            </div>
          </div>
      </div>
    )
  }
  

export default ItemDetail