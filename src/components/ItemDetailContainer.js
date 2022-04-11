import React, { useEffect, useState} from 'react'
import productosDetalle from '../api/ProductosDetalle';
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {

  const [ProductDetail, setProductDetail] = useState([]);

  const getProductos = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productosDetalle.length > 0) {
                resolve(productosDetalle);
            } else {
                reject('No se encontraron productos');
            }
        }, 2000);
    });

  useEffect(() => {
    getProductos().then(
      (result)=> {setProductDetail(result);},
      (err) => { setProductDetail([])}
    );
  }, []);

  return (
    <>
      {ProductDetail.map((productosDetalle) =>
        <ItemDetail productosDetail={productosDetalle}/>
      )}
    </>
  );
}

export default ItemDetailContainer