import React, { useContext } from 'react';
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function CartResume() {
    
    const { cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getTotalPrice } = useContext(cartContext);

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
