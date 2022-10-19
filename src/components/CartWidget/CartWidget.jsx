import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./cartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget() {
  const { getItemCount } = useContext(CartContext);

  return (
    <div className="cartWait">
      <span>{getItemCount()}</span>
          <a href="#"><AiOutlineShoppingCart /></a>
    </div>
    );
  }
  
export default CartWidget
