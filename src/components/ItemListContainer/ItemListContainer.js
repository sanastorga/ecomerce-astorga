
import React, { useEffect , useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../FakeApi'
import { useParams } from 'react-router-dom'

let catalogoStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}




function ItemListContainer (){
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
      getProductos
      
        .then(datos => {
        if (categoryId){
            setProductos(datos.filter((prod)=> prod.category === categoryId))
        } else{
            
            setProductos(datos)
        }
    })


    }, [categoryId])
    

    return (<div style={catalogoStyle}>
            <ItemList Items={productos}/>
        </div>
    )
}


export default ItemListContainer;