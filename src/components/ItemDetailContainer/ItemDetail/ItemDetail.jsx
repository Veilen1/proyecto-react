import React from 'react'
import { Link } from 'react-router-dom'
import "../../ItemListContainer/ItemList/itemList.css"

const ItemDetail = ({info}) => {
    
    return (
        <div className='itemDetail'>
            <h1>{info.title}</h1>
            <img src={info.image} alt="imagenItem" />
            <h1>{`$${info.price}`}</h1>
            <h3>{info.category}</h3>
            <h4>{info.description}</h4>
            <Link to={"/cart"}>
            <button key={info.id}>COMPRAR</button>
            </Link>
        </div>
    )
}

export default ItemDetail