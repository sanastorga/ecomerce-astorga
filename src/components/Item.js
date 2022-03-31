import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";

const Item = ({item }) => {
    const [producto, setProducto] = useState(item);
    return (
        <>
            <Card key={producto.id}>
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        <p>Precio: $ {producto.price}</p>                            
                        <img src={producto.pictureUrl} width="150" height="150" />                                                     
                    </Card.Text>
                    <Button>Agregar</Button>  
                </Card.Body>
            </Card>
        </>
    );
};

export default Item;
