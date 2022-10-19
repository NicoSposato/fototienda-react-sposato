import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ props }) {
    const [cantidad, setCantidad] = useState(true)

    function handleAddToCart(count) {   
        alert(`Agregaste correctamente al carrito ${count} productos.`);
        setCantidad(false);   
    }   

    return (
        <FlexWrapper rows={true}>
            <div className="main container">
                <h3>{props.title}</h3>
                <img src={props.img} alt="card img"></img>
                <div className="card-detail">
                    <p>{props.detail}</p>
                    <h4>$ {props.price}</h4>
                    <h5>Stock: {props.stock}u.</h5>
                </div>
                
                { cantidad ? <ItemCount initial={1} stock={props.stock} onAddToCart={handleAddToCart} /> : <button>Finaliza tu compra</button>}
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;