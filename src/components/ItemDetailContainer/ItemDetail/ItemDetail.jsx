import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount'
import "../../ItemListContainer/ItemList/itemList.css"

const ItemDetail = ({info}) => {
    
    const [goToCart, setgoToCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setgoToCart(true);
        addProduct(info, quantity)
    }

    return (
        <div className='itemDetail'>
            <h1>{info.title}</h1>
            <img src={info.image} className="" alt="imagenItem" />
            <h1>{`$${info.price}`}</h1>
            <h3>{info.category}</h3>
            <h4>{info.description}</h4>
            {
                goToCart
                ? <Link to={"/cart"}>Terminar Compra</Link>
                : <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
            }
        </div>
    )
}

export default ItemDetail