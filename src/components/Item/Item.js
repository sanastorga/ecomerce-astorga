
import React from "react";
import { Link } from 'react-router-dom'

const itemStyle = {
    listStyleType:'none',
    margin:'0 25px',
    marginBottom: '20px',
}

function Item({id, title, price, pictureURL}){
return(<li key={id} style={itemStyle}>
            <div className="card" style={{width: 18+'rem'}}>
                <img src={pictureURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">U$S {price}</p>
                    <Link to={`/item/${id}`}><button type="button" className="btn btn-primary">VER MAS</button></Link>
                </div>
            </div>
        </li>)
}




export default Item 