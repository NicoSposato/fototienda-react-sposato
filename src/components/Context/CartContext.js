import React, { createContext, useState } from "react";

const cartContext = createContext();

const { Provider } = cartContext;

export default function MyProvider ({ children }) { 

    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some(prod => prod.id === id)
    }

    function addItem(props, count) {
        const nwItem = {...props, count};

        if (isInCart(nwItem.id)) {
            const productFind = cart.find(prod => prod.id === nwItem.id);
            const productIndex = cart.indexOf(productFind);
            const auxCart = [...cart]
            auxCart[productIndex].count += count
            setCart(auxCart);
        } else {
            setCart([...cart, nwItem]);
        }
    };

    function emptyCart() {
        return setCart([])
    };

    function deleteItem(id) {
        return setCart(cart.filter(prod => prod.id !== id))
    };

    function getItemCount() {
        return cart.reduce((acc, prod) => acc += prod.count, 0)
    };

    function getTotalPrice() {
        return cart.reduce((acc, prod) => acc += prod.price * prod.count, 0)
    };

    return (
        <Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getTotalPrice }}>{children}</Provider>
    )
}

export { cartContext }