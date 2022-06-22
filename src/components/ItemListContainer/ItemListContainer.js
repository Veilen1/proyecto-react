import React, { useState } from "react";

const ItemListContainer = ({miProp}) => {
    
    const [contador, setContador] = useState(0);
    const [users, setUsers] = useState([{name: "Felipe"},{name: "Agustin"}])


    const handlerClickAgregar = () => {
        setContador(contador + 1)
    }
    const handlerClickQuitar = () => {
        setContador(contador - 1)
    }
    const addValentin = () => {
        const valentin = {name: "Valentin"};
        setUsers([...users,valentin]);
    }
    return(
        <>
            <div>{miProp}</div>
            <h1>{contador}</h1>
            <button onClick={handlerClickAgregar}>click me Agregar</button>
            <button onClick={handlerClickQuitar}>click me Quitar</button>
            <button onClick={addValentin}>agregarme </button>
        </>
    )


}

export default ItemListContainer;