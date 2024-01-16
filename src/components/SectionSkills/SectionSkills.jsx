import "../../styles/SectionSkills.css"
const SectionSkills = () => {
    return (
        <div>
            <section className="section">
                <div className="w-layout-blockcontainer base-container w-container">
                    <div className="w-layout-grid about-numbers-wrap" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <div className="about-wrap">
                            <div className="big-numbers">50+</div>
                            <div className="about-numbers">Diseños de Uñas</div>
                        </div>
                        <div className="about-central-wrap">
                            <div className="big-numbers">100+</div>
                            <div className="about-numbers">Colores de Esmaltes</div>
                        </div>
                        <div className="about-wrap">
                            <div className="big-numbers">500+</div>
                            <div className="about-numbers">Clientes Felices</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default SectionSkills;