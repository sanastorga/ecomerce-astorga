import React from "react";
import ItemCount from "../components/ItemCount";

const ItemListContainer = ({saludo}) => {
    /* console.log(saludo); */

    

    const Informar = (contador) =>{
        alert( contador )
    }

    return(
        <>
        <h1 style={{color: "red", backgroundColor: "blue", fontSize: 50, letterSpacing: 3}}>{saludo} </h1>
        <ItemCount stock = {5} initial = {1} informar= {Informar} />
        </>
    )
}

export default ItemListContainer