import React from "react"
//import Button from "../Button/Button";
import { useState } from "react";
import "./itemCount.css";

function ItemCount({stock, initial, onAddToCart}) {
    const [count, setCount] = useState(initial)

    function handleLess() {
        if (count > initial ) {
            setCount(count - 1);
        }
    }

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }   
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <button onClick={handleLess}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
                <button onClick={() => {onAddToCart(count)}}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount