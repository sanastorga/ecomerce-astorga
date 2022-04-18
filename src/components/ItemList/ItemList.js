
import React from "react";
import Item from '../Item/Item';

const ulStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: '50px',
    flexWrap: 'wrap'
}

function ItemList ({Items}) {
    return (<ul style={ulStyle}>{Items.map(j => <Item id={j.id} title={j.title} price={j.price} pictureURL={j.pictureURL}/>)}</ul>)
}




export default ItemList 