import { autocompleteClasses } from "@mui/material";
import React from "react";

const ItemListContainer = ({saludo}) => {
    console.log(saludo);
    return(
        <h1 style={{color: "red", backgroundColor: "blue", fontSize: 50, letterSpacing: 3}}>{saludo} </h1>
    )
}

export default ItemListContainer