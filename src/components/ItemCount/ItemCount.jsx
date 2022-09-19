import React from "react"
import { useState } from "react"

function ItemCount(props) {
    let {stock} = props; 
    console.log("stock:", stock);
    const [count, setCount] = useState(1)

    function handleLess() {
        console.log(count);
        if (count > 0 ) {
            setCount(count - 1);
        }
    }

    function handleAdd() {
        console.log(count);
        if (count <= stock) {
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
                <button onClick={onAddCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount