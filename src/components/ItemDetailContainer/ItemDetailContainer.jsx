import React, {useEffect, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { getSingleProduct } from "../../services/mockAPI";
import { useParams } from 'react-router-dom';
import "./itemDetailContainer.css";

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const { id } = useParams(); //uso el hook useParams y destructuring para ver el id que pasa la url

    useEffect(() => {
        getSingleProduct(id).then((recibeDatos) => setData(recibeDatos));
    }, [id] ) //agrego la variable id en el array para que el efecto se ejecute si esa id que viene por url cambia 

    return (
        <div className="card-title-detail">
            <h3>{data.title}</h3>
            
            <div className="cardDetail-img">
                <img src={data.img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <p>{data.detail}</p>
                <h4>$ {data.price}</h4>
                <h5>Stock: {data.stock}u.</h5>
                
            </div>
            
            <div className="itemCount">
                <ItemCount initial={1} stock={data.stock} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
