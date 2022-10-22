import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts, { getProductsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList";
import { Ring } from '@uiball/loaders'

function ItemListContainer({greeting}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { cat } = useParams();

    useEffect( () => {
        setData([]);
        setIsLoading(true);
        if (cat === undefined){
            getProducts()
            .then((respuestaData) => setData(respuestaData))
            .catch((errormsg) => {
                setError(errormsg.message);
            })
            .finally (() => setIsLoading(false));
        } 
        else {
            getProductsByCategory(cat)
            .then((respuestaData) => setData(respuestaData))
            .catch((errormsg) => {
                setError(errormsg.message);
            })
            .finally (() => setIsLoading(false));
        }
    }, [cat] );

    if (isLoading) {
        return (<>
            { error ? (
                <div>
                    <h2>Error cargando datos</h2>
                    <p>{error}</p>
                </div>
            ) : (
                <Ring 
                size={50}
                lineWeight={5}
                speed={2} 
                color="black" 
                />
            )}
            </>
        )        
    }

    return (
        <div>
            {isLoading ? 
            <Ring 
                size={50}
                lineWeight={5}
                speed={2} 
                color="black" 
                /> 
            : 
            <div>
                <h1>{greeting}</h1>
                    <div>
                        <ItemList 
                            data={data} 
                        />
                    </div>
            </div>}
            
        </div>
    );
}

export default ItemListContainer;