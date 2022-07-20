import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    if (cart.length ===0) {
        return (
            <>
                <p>No hay items en el carrito</p>
                <Link to={"/"}>Hacer nueva compra</Link>
            </>
        )
    }
    
    
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} info={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart