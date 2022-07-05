import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList/ItemList";

const ItemListContainer = ({}) => {
    const [data, setData] = useState([]);

        useEffect(() => {
            const getData = fetch('https://fakestoreapi.com/products?limit=20')
            getData
            .then(dataRes=>dataRes.json())
            .then(dataRes => setData(dataRes))
        }, [setData])


    return(
        <div className="itemList">
        <ItemList data={data} ></ItemList>
        </div>
    )


}

export default ItemListContainer;