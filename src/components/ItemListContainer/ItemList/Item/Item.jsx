import React from 'react'
import ItemCount from './ItemCount';
import "../itemList.css"

const Item = ({name, price, imgURL}) => {
    const onAdd = (count) => {
        console.log('recibi: ', count);
    }

    return (
        <div className='item'>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <img src={imgURL} alt="imagenItem" />
        <ItemCount stock={15} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    );
}

export default Item