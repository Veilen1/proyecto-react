import React from "react";
import Item from "./Item/Item";
import "../ItemList/itemList.css"

const ItemList = () => {
    return ( 
        <div className="itemList">
        <Item name="Alpargata" price={200} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Donatello" price={150} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Alvaro" price={300} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Fernando" price={500} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        <Item name="Diego" price={450} imgURL={"http://placekitten.com/200"}></Item> 
        </div>
    )
    
}

export default ItemList