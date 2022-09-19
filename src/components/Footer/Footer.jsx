import "./footer.css";
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialVimeoCircular} from "react-icons/ti";

function Footer() {
    return (
        <div className="footer container">
            <div className="footer__texto">
                <p>Todos los derechos reservados</p>
            </div>
            <div className="footer__social">
                <p>Síguenos </p>
                <div>
                    <a href="#"><TiSocialFacebookCircular /></a>
                </div>
                <div>
                    <a href="#"><TiSocialTwitterCircular /></a>
                </div>
                <div>
                    <a href="#"><TiSocialVimeoCircular /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;