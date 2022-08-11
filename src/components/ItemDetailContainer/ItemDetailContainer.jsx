import React from 'react'
import {  getFirestore, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
import  ItemDetail  from '../ItemDetailContainer/ItemDetail/ItemDetail';
import "../ItemListContainer/ItemList/itemList.css"
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", productId)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [productId]);


return(
    
    <div className='itemDetailContainer'>
    {loaded ? <CircularProgress size={200} color="success" /> : <ItemDetail info={product} />}
    </div>
)


}

export default ItemDetailContainer