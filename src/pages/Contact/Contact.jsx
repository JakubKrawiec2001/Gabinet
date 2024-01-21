import plus from "../../assets/icons/plus.svg";
import "./Contact.scss";

const Contact = () => {
	return (
		<>
			<div className="section-heading-container section-heading-contact">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Galeria Zdjęć</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h1 className="section-heading">Nasze Miejsce Pracy.</h1>
			</div>
		</>
	);
};

export default Contact;
