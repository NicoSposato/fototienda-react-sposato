import React, { useContext, useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ props }) {
    const [cantidad, setCantidad] = useState(true)

    const { addItem } = useContext(cartContext)

    function handleAddToCart(count) {   
        addItem(props,count)
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
                    {props.stock === 0 && (
                        <span style={{ color: "#aa0033" }}>SIN STOCK</span>
                    )}
                </div>
                { cantidad ? <ItemCount initial={1} stock={props.stock} 
                onAddToCart={handleAddToCart} /> : <Link to="/cart"><button>Finaliza tu compra</button></Link>}
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;