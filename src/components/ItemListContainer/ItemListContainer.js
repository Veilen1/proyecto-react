import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({}) => {
    const [data, setData] = useState([]);

        useEffect(() => {
            let getData = fetch('https://fakestoreapi.com/products')
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