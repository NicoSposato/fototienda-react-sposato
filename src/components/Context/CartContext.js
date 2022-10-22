import React, { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({children}) => { 

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (props, cantidad) => {
        const nwItem = {...props, cantidad};

        if (isInCart(nwItem.id)) {
            const productFind = cart.find(prod => prod.id === nwItem.id);
            const productIndex = cart.indexOf(productFind);
            const auxCart = [...cart];
            auxCart[productIndex].cantidad += cantidad
            setCart(auxCart);
        } else {
            setCart([...cart, nwItem]);
        }
    };

    const emptyCart = () => {
        return setCart([])
    };

    const deleteItem = (id) => {
        return setCart(cart.filter(prod => prod.id !== id))
    };

    const getItemCount = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.cantidad, 0)
    };

    return (<Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemCount, getTotalPrice}}>{children}</Provider>)
}

export default MyProvider