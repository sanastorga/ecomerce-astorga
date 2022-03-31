import React, { useState, useEffect } from "react";
import Item from './Item';
import productos from '../api/Productos';
import { Container,Row,Col } from "react-bootstrap";

const ItemList = () => {

    const [ResultProductos, setResultProductos] = useState([]);

    const getProductos = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productos.length > 0) {
                    resolve(productos);
                } else {
                    reject('No se encontraron productos');
                }
            }, 2000);
        });

    useEffect(() => {
        getProductos().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );
    }, []);

    return (
        <>
                    {ResultProductos.map((producto) =>
                        <Item item={producto}/>
                    )}          
        </>
    );

}

export default ItemList;