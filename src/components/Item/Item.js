
import React from "react";
import { Link } from 'react-router-dom'
import './Item.css'

const itemStyle = {
    listStyleType:'none',
    margin:'0 25px',
    marginBottom: '20px',
}

function Item({id, title, price, pictureURL}){
return(<li className="listItem" key={id}>
            <div className="card cardItem">
                <img src={pictureURL} className="card-img-top imagenItem" alt="..."/>
                <div className="card-body bodyItem">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text textItem">U$S {price}</p>
                    <Link className="containerBoton" to={`/item/${id}`}><button type="button" className="btn btn-primary botonItem">VER MAS</button></Link>
                </div>
            </div>
        </li>)
}




export default Item 