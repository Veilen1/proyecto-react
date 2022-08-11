import React from 'react'
import "../itemList.css"
import { Link } from "react-router-dom"


const Item = ({info}) => {
    

    return (
        <div className='item'>
            <h1>{info.title}</h1>
            <h1>{`$${info.price}`}</h1>
            <img src={info.image} alt="imagenItem" />
            <Link to={`/product/${info.id}`}>
            <button key={info.id}>Ver detalles</button>
            </Link>
        </div>
    );
}

export default Item