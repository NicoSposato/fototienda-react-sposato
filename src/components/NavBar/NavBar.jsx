import "./navBar.css";

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
                </ul>
        </nav>

    );
}

export default NavBar;