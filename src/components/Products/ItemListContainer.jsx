import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts, { getProductsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {
    let [data, setData] = useState([]);
    const { cat } = useParams();
    // console.log(useParams());

    useEffect( () => {
        if (cat === undefined){
            getProducts().then((respuestaData) => setData(respuestaData));
        } 
        else {
            getProductsByCategory(cat).then((respuestaData) => setData(respuestaData));
        }
    }, [cat] );   // agrego la variable cat para detectar si hay cambios y que vuelva a ejecutar el efecto

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemList 
                data={data} 
                />
            </div>
        </div>
    );
}

export default ItemListContainer;