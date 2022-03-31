import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
  
  return (
    <> 
      <ItemList />     
    </> 
  );
};

export default ItemListContainer;