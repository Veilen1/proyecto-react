import React, { useEffect, useState } from "react";
import {ItemList} from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [categoryId]);

    return(
        <div className="itemList">
        <ItemList product={product} ></ItemList>
        </div>
    )


}

export default ItemListContainer;