import React from 'react'
import {  getFirestore, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
import  ItemDetail  from '../ItemDetailContainer/ItemDetail/ItemDetail';
import "../ItemListContainer/ItemList/itemList.css"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", productId)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
    }, [productId]);


return(
    
    <div className='itemDetailContainer'>
    <ItemDetail info={product}></ItemDetail>
    </div>
)


}

export default ItemDetailContainer