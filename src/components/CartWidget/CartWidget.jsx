import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import "./cartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function CartWidget() {
  
  const { getItemCount } = useContext(cartContext)

  return (
    <div className="cartWait">
      <span>{getItemCount()}</span>
          <Link to="/cart"><AiOutlineShoppingCart /></Link>
    </div>
    );
  }
  
export default CartWidget
