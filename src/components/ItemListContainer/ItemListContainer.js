
import React, { useEffect , useState} from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

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

        const productosRef = collection(db, 'ItemCollection')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef

        getDocs(q)
            .then(resp => {
                const items = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                //console.log(items)
                setProductos(items)
            })
    }, [categoryId])
    

    return (<div style={catalogoStyle}>
            <ItemList Items={productos}/>
        </div>
    )
}


export default ItemListContainer;