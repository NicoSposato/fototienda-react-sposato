import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navBar container">
            <h1>
                <span>Tu </span>Foto <span>Tienda</span> 
            </h1>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li className="CartWidget">
                        <CartWidget />
                    </li>
                    
                </ul>
            
        </nav>
    );
}

export default NavBar;

