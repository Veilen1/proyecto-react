import React from 'react'
import {addDoc, getFirestore, collection} from "firebase/firestore"
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Jose Gomez",
            email: "JoseGomez@email.com",
            phone: "221 123-4567",
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handlerClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id));
    }
    
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
            <button onClick={handlerClick}>Generar Orden </button>
        </>
    )
}

export default Cart