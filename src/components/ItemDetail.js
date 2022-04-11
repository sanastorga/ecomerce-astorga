import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import productosDetalle from '../api/ProductosDetalle';

const ItemDetail = ({productosDetail}) => {
    const [Detalle, setDetalle] = useState(productosDetail)
    return (
      <>
          <Card key={Detalle.id}>
              <Card.Body>
                  <Card.Title>{Detalle.title}</Card.Title>
                  <Card.Text>
                      <p>Precio: $ {Detalle.price}</p>                            
                      <img src={Detalle.pictureUrl} width="150" height="150" />                                                     
                  </Card.Text>
                  <Card.Text>
                      <h4> Descripción </h4>
                      <p>{Detalle.descripcion} </p>
                  </Card.Text>
              </Card.Body>
          </Card>
      </>
  );
};

export default ItemDetail