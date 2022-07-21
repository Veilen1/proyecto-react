import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({info}) => {
  const {removeProduct} = useCartContext();
  return (
    <div>
      <img src="" alt="" />
      <div>
        <p>Titulo: {info.title}</p>
        <img src={info.image} alt="" />
        <p>Cantidad {info.quantity}</p>
        <p>Precio: ${info.price}</p>
        <p>Subtotal: ${info.quantity * info.price}</p>
        <button onClick={() => removeProduct(info.id)}>Eliminar producto</button>
      </div>
    </div>
  )
}

export default ItemCart