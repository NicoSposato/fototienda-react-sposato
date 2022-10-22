import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartResume() {
    const context = useContext(CartContext);
    const { cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getTotalPrice } = context;

    let carritoVacio = true; 

    if (carritoVacio) {  // crear un condicional ternario, evaluar si el carrito esta vacio mostrar un div "carrito vacio con un enlace al itemlistcontainer" buscar en el context 

        <div>
            Tu carrito no tiene compras.
        </div>
    }

    return (
        <div>
            <div>Resumen de tu compra</div>
            { cart.map ( item => (    //Pasar un componente
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.count}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default CartResume
