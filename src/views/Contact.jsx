import "../styles/Contact.css"
import iconLocation from "../assets/images/locationContact.png"
import cellContact from "../assets/images/cellphoneLove.png"
const Contact = () => {
    return (
        <div>
            <div className="containerContactMain">
                <section className="containerBSA">
                    <div className="container-contactText">
                        <h4>Buenos Aires</h4>
                        <p>Descubre nuestro espacio central con amplias comodidades en una ubicación conveniente</p>
                    </div>
                    <div className="container-locationContact">
                        <img src={iconLocation} alt="locationContac" />
                        <p>Direccion: Av.Avellaneda 4405</p>
                    </div>
                    <div className="container-cellContact">
                        <img src={cellContact} alt="cellphoneContact" />
                        <p>Reservas por Telefono</p>
                        <a href="tel:01144495484">011-36449548</a>
                        <a href="tel:01150495604">011-50495604</a>
                    </div>
                </section>

                <section className="containerMdP">
                    <div className="container-contactText">
                        <h4>Mar del Plata</h4>
                        <p>Explora nuestro encantador espacio en la costa con vistas espectaculares y servicios excepcionales</p>
                    </div>
                    <div className="container-locationContact">
                        <img src={iconLocation} alt="locationContac" />
                        <p>Direccion: Calle Costanera 123</p>
                    </div>
                    <div className="container-cellContact">
                        <img src={cellContact} alt="cellphoneContact" />
                        <p>Reservas por Teléfono</p>
                        <a href="tel:02234567890">0223-4567890</a>
                        <a href="tel:02231234567">0223-1234567</a>
                    </div>
                </section>

                <section className="containerCordoba">
                    <div className="container-contactText">
                        <h4>Cordoba</h4>
                        <p>Sumérgete en nuestro espacio en el corazón de Córdoba, donde la cultura y la comodidad se encuentran</p>
                    </div>
                    <div className="container-locationContact">
                        <img src={iconLocation} alt="locationContac" />
                        <p>Dirección: Calle Córdoba 123</p>
                    </div>
                    <div className="container-cellContact">
                        <img src={cellContact} alt="cellphoneContact" />
                        <p>Reservas por Teléfono</p>
                        <a href="tel:03511234567">0351-1234567</a>
                        <a href="tel:03512456789">0351-2456789</a>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Contact;