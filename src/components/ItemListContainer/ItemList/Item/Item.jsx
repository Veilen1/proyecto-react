import React from 'react'
import ItemCount from './ItemCount';
import "../itemList.css"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const Item = ({info, stock}) => {
    const onAdd = (count) => {
        console.log('recibi: ', count);
    }
    return (
        <div className='item'>
            <h1>{info.title}</h1>
            <h1>{`$${info.price}`}</h1>
            <img src={info.image} alt="imagenItem" />
            <ItemCount stock={getRandomInt(1,21)} initial={1} onAdd={onAdd}></ItemCount>
            <button key={info.id}>Ver detalles</button>
        </div>
    );
}

export default Item