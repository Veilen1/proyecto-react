import React, {useState} from 'react'
import {addDoc, getFirestore, collection, serverTimestamp} from "firebase/firestore"
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "../../index.css"
import Swal from 'sweetalert2'

const Cart = () => {

    const { cart, totalPrice } = useCartContext();
    const [Buyer, setBuyer] = useState({
        name:"",
        lname:"",
        email:"",
        nac:"",
        tel:"",
    })

    


    const order = {
        buyer: Buyer,
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        date: serverTimestamp(),
        total: totalPrice(),
    }
    const handlerChangeInput = (e) => {
        setBuyer({
            ...Buyer, [e.target.name]: e.target.value
        })
        console.log([e.target.name]);
    }

    const handlerClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id)
        )
    }
    if (cart.length ===0) {
        return (
            <div className='cartVacio'>
                <p className=''>No hay items en el carrito</p>
                <Link to={"/"}>Hacer nueva compra</Link>
            </div>
        )
    }
    
    
    return (
        <div className='cart'>
            {
                cart.map(product => <ItemCart key={product.id} info={product}/>)
            }
            <div className='cartRes'>
                    <p>
                        total: {totalPrice()}
                    </p>
                <form className='formUser'>
                    <h1 style={{color:"brown"}}>Complete sus datos porfavor</h1>
                <input type="text" maxLength="20" placeholder='Nombre/s: ' onChange={handlerChangeInput} name='name' required/>
                <input type="text" maxLength="30" placeholder='Apellido/s: ' onChange={handlerChangeInput} name='lname' required/>
                <input type="date" maxLength="6" placeholder='Fecha de nacimiento: ' onChange={handlerChangeInput} name='nac' required/>
                <input type="email" placeholder='Email: ' onChange={handlerChangeInput} name='email' required/>
                <input type="number" placeholder='Teléfono: ' onChange={handlerChangeInput} name='tel' required/>
                <input type="number" placeholder='Tarjeta de credito/debito: ' onChange={handlerChangeInput} name='tel' required/>
                <input type="reset"/>
                </form>
                <Link to={"/"} onClick={handlerClick}><button>Generar Orden</button></Link>
                <Link to={"/"}>Seguir comprando</Link>
            </div>
        </div>
    )
}

export default Cart