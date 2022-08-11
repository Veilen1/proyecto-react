import React, { useEffect, useState } from "react";
import {  getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import {ItemList} from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products")
    if(categoryId){
        const queryFilter = query(queryCollection, where("category", "==", categoryId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    } else {
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }
        
    }, [categoryId]);

    return(
        <div className="itemList">
        {loaded ? <CircularProgress size={200} color="success" /> : <ItemList product={data} />}
        </div>
    )


}

export default ItemListContainer;