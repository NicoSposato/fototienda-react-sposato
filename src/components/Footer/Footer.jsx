import "./footer.css";
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialVimeoCircular} from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer container">
            <div className="footer__texto">
                <p>Todos los derechos reservados </p>
            </div>
            <div className="footer__social">
                <p>Síguenos </p>
                <div>
                    <Link to="#"><TiSocialFacebookCircular /></Link>
                </div>
                <div>
                    <Link to="#"><TiSocialTwitterCircular /></Link>
                </div>
                <div>
                    <Link to="#"><TiSocialVimeoCircular /></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;