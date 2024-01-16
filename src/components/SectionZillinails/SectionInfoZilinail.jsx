import "../../styles/SectionZilinails.css";

const SectionZillinails = () => {
    return (
        <section className="section without-top-spacing">
            <div className="w-layout-blockcontainer base-container w-container">
                <div className="content-about-wrapper">
                    <div className="image-relative-wrapper">
                        <img
                            src="src\assets\images\sofiaZilliNails.jpg"
                            loading="lazy"
                            alt="SofiaZilliNails"
                        />
                    </div>
                    <div className="content-right-wrapper">
                        <h2>
                            Descubre la Magia en tus Uñas!
                        </h2>
                        <p className="paragraph-large">
                            Ofrecemos más que servicios de alta calidad: te invitamos a aprender y crear con nuestras clases especializadas.
                            <br />
                            De Sofia Zilli.
                        </p>
                        
                        <div className="button-wrap center-tablet">
                            <a href="/catalogo" className="primary-button">Catalogo</a>
                            <a href="/about-me" className="primary-button-border">Acerca de Mi</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionZillinails;
