import React from 'react'
import { useEffect, useState } from 'react';
import  ItemDetail  from '../ItemDetailContainer/ItemDetail/ItemDetail';
import "../ItemListContainer/ItemList/itemList.css"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
    }, [productId]);


return(
    
    <div className='itemDetailContainer'>
    <ItemDetail info={product}></ItemDetail>
    </div>
)


}

export default ItemDetailContainer