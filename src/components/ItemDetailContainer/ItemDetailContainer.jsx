import React, {useEffect, useState} from "react"
import { getSingleItem, getItemsByCategory } from "../../services/firestore";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const { id } = useParams(); 

    useEffect(() => {
        getSingleItem(id)
        .then((recibeDatos) => setData(recibeDatos))
        .catch((errormsg) => {
            setError(errormsg.message);
        });
    }, [id] ) 

    if (!data.title) {
        return (<>
            { error ? (
                <div>
                    <h2>Error cargando datos</h2>
                    <p>{error}</p>
                </div>
            ) : (
                <h2>Cargando!</h2>
            )}
            </>
        )        
    }

    return (
        <div>
            <ItemDetail props={data} />
        </div>
    );
}

export default ItemDetailContainer
