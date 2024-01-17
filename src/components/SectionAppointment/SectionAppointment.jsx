import "../../styles/SectionAppointment.css"

const SectionAppointment = () => {
    return (
        <div>
            <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                className="form-2"
                aria-label="Email Form 2"
            >
                <div className="appointment-wrapper">
                    <input
                        className="text-field-home w-input"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder="Nombre"
                        type="text"
                        id="name-2"
                        required
                    />
                    <input
                        className="text-field-home w-input"
                        maxLength="256"
                        name="email-2"
                        data-name="Email 2"
                        placeholder="Email"
                        type="email"
                        id="email-2"
                        required
                    />
                    <input
                        className="text-field-home w-input"
                        maxLength="256"
                        name="Phone-2"
                        data-name="Phone 2"
                        placeholder="Celular"
                        type="text"
                        id="Phone-2"
                    />
                </div>
                <input
                    type="submit"
                    data-wait="Please wait..."
                    className="primary-button-border w-button"
                    value="Agenda tu Cita"
                />
            </form>

        </div>
    )
}
export default SectionAppointment;