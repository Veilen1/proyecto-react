import React from "react";
import Item from "./Item/Item";
import "../ItemList/itemList.css"
import ItemDetail from "../../ItemDetailContainer/ItemDetail/ItemDetail";

export const ItemList = ({data = []}) => {

    return ( 
        data.map(product => <Item key={product.id} info={product}/>)
    )
    
}

export const ItemListDetail =({data = []}) => {
    return ( 
        data.map(product => <ItemDetail key={product.id} info={product}/>)
    )
}

