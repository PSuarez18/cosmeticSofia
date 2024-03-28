import aboutMe from "../assets/images/aboutMe.jpg"
import "../styles/AboutMe.css"
const AboutMe = () => {
    return (
        <div>
            <h3 className="titleAboutMe">Sofia Nails</h3>
            <div className="containerAboutMe">
                <div className="container-about-img">
                    <img src={aboutMe} alt="Acerca de mi"/>
                </div>
                <p>¡Hola a todxs! Soy Sofi, también conocida como "SofiZillinails", y estoy muy emocionada de darles la bienvenida a mi rincón dedicado al arte de las uñas.
                    <br /> Desde hace más de 7 años, me sumergí en el fascinante mundo de la manicura, y desde entonces no he dejado de explorar y perfeccionar mi técnica.

                    <br />Mi pasión por el nail art comenzó como un hobby, pero con el tiempo se convirtió en mi verdadera vocación. Siempre he sido una persona autodidacta, obsesionada con los detalles y apasionada por la creatividad. A lo largo de mi trayectoria, he experimentado con una amplia gama de diseños y texturas, pero mi mayor pasión siempre ha sido crear obras únicas y llenas de color en las uñas de mis clientes.

                    Espero que disfruten tanto como yo de este espacio que he creado con tanto cariño. ¡Gracias por estar aquí y por dejarme compartir mi amor por el arte de las uñas con ustedes!
                </p>
            </div>
        </div>
    )
}
export default AboutMe;