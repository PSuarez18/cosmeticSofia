import { Link } from "react-router-dom";
import "../../styles/Footer.css"
import socialIcons from "../../utils/api/footerApi";

const Footer = () => {
    return (
        <div className="footer-column">
            <div className="footer-nav">
                <div className="container-services">
                    <section>
                        <h5>Tu Rincón de Belleza</h5>
                        <Link to="/contact">Cursos</Link>
                        <Link to="/contact">Ofertas Especiales y Descuentos</Link>
                        <Link to="/contact">Regala Belleza con Nuestras Tarjetas</Link>
                        <Link to="/contact">Mis Servicios de Manicura</Link>
                    </section>
                </div>
                <div className="container-info">
                    <section>
                        <h5>Informacion</h5>
                        <Link to="/contact">Contactame</Link>
                        <Link to="/aboutme" >Acerca de Mi</Link>
                    </section>
                </div>
                <div className="container-social">
                    <section>
                        <h5>Enlaces de Contacto</h5>
                        <a href={socialIcons.whatsapp.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.whatsapp.icon} alt="iconWhatsapp" className="imgbig1"/>
                        </a>
                        <a href={socialIcons.facebook.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.facebook.icon} alt="iconFacebook" className="imgbig"/>
                        </a>
                        <a href={socialIcons.email.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.email.icon} alt="iconEmail" />
                        </a>
                        <a href={socialIcons.instagram.api} target="_blank" rel="nofollow">
                            <img src={socialIcons.instagram.icon} alt="iconEmail" />
                        </a>
                    </section>
                </div>
            </div>
            <br />
            <hr />
            <div className="container-copyright">
                <article>
                    <p><small>Copyright © 2024 PaoloDevX & AlanDev</small></p>
                    <p><small>Todos los derechos reservados.</small></p>
                </article>
            </div>

        </div>
    );
};

export default Footer;

