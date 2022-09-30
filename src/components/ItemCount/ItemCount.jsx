import React from "react"
import Button from "../Button/Button";
import { useState } from "react"

function ItemCount(props) {
    let {stock, initial} = props; 
    console.log("stock:", stock);
    const [count, setCount] = useState(initial)

    function handleLess() {
        console.log(count);
        if (count > initial ) {
            setCount(count - 1);
        }
    }

    function handleAdd() {
        console.log(count);
        if (count < stock) {
            setCount(count + 1);
        }   
    }

    function onAddCart() {
        console.log(onAddCart)
    }

    return (
        <div>
            <div>
                <button onClick={handleLess}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
                <Button onClick={onAddCart}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount