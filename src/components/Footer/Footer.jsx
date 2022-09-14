import "./footer.css";

function Footer() {
    return (
        <div className="footer container">
            <div className="footer__texto">
                <p>Todos los derechos reservados</p>
            </div>
            <div className="footer__social">
                <p>Síguenos </p>
                <div>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;