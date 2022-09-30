import React, { useState, useEffect } from "react";
import getProducts from "../../services/mockAPI";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {
    let [data, setData] = useState([]);

    useEffect( () => {
        getProducts().then((respuestaData) => { setData(respuestaData);
        });
    }, [] );   

    return (
        <div>
            <h1>{greeting}</h1>
            <div className="main container">
                <ItemList 
                data={data} 
                />
            </div>
        </div>
    );
}

export default ItemListContainer;