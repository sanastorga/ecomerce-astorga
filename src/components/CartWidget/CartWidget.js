
import React  from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


let styles={
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    margin: '5px'
}
let iconStyle={
    color: 'black',
    margin:'7px',
    fontSize:'20px'
}

function CartWidget (){
    return(<div style={styles}>
        <ShoppingCartTwoToneIcon style={iconStyle} />
    </div>)
}
export default CartWidget;