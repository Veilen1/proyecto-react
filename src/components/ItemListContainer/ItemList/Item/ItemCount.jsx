import React, { useState } from 'react'
import "../itemList.css"

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    return (
        <div className='itemCount'>
            <button onClick={() => handlerClickSubtrack()}>-</button>
            <h2>{count}</h2>
            <button onClick={() => handlerClickAdd()}>+</button>
            <button className='addCart' onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount
