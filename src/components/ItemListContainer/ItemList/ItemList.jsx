import React from "react";
import Item from "./Item/Item";
import "../ItemList/itemList.css"
import ItemDetail from "../../ItemDetailContainer/ItemDetail/ItemDetail";

export const ItemList = ({product = []}) => {

    return ( 
        product.map(product => <Item key={product.id} info={product}/>)
    )
    
}

export const ItemListDetail =({product = []}) => {
    return ( 
            product.map(product => <ItemDetail key={product.id} info={product}/>)
    )
}

