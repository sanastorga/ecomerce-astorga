
import React  from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';


let styles={
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    margin: '5px'
}

function CartWidget (){
    const { cartQuantity } = useContext(CartContext)


    return(< Link to='/cart'>
                <div style={styles}>
                    <ShoppingCartTwoToneIcon/>
                    <span className="cartInfo"> {cartQuantity()} </span>
                </div>
            </Link>
    )
            
}
export default CartWidget;