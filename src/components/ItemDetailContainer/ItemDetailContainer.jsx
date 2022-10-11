import React, {useEffect, useState} from "react"
import ItemCount from "../ItemCount/ItemCount";
import { getSingleProduct } from "../../services/mockAPI";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const { id } = useParams(); //uso el hook useParams y destructuring para ver el id que pasa la url

    useEffect(() => {
        getSingleProduct(id).then((recibeDatos) => setData(recibeDatos));
    }, [id] ) //agrego la variable id en el array para que el efecto se ejecute si esa id que viene por url cambia 

    return (
        <div>
            <ItemDetail props={data} />
        </div>
    );
}

export default ItemDetailContainer
