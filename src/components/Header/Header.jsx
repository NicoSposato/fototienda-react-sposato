import NavBar from "../NavBar/NavBar";
import "./header.css";

function Header() {
    let title = "Foto Tienda";
    
    return (
      <header>
          <NavBar />
          <h1 className="header_title">{title}</h1>
      </header>
    );
}

export default Header;