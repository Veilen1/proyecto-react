import React from 'react'
import { useEffect, useState } from 'react';
import { ItemListDetail } from '../ItemListContainer/ItemList/ItemList';
import "../ItemListContainer/ItemList/itemList.css"

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = fetch('https://fakestoreapi.com/products?limit=20')
        getData
        .then(dataRes=>dataRes.json())
        .then(dataRes => setData(dataRes))
    }, [setData])


return(
    
    <div className='itemDetailContainer'>
    <ItemListDetail data={data}></ItemListDetail>
    </div>
)


}

export default ItemDetailContainer