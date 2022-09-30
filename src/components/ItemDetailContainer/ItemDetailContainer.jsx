import React, {useEffect, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { getSingleProduct } from "../../services/mockAPI";
import "./itemDetailContainer.css";

function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect(() => {
        getSingleProduct().then((recibeDatos) => setData(recibeDatos));
        
    }, [] )

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
