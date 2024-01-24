import plus from "../../assets/icons/plus.svg";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import "./Contact.scss";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="section-heading-container section-heading-contact">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Zapraszamy</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h1 className="section-heading">Tutaj Nas Znajdziesz</h1>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.84219635371!2d19.36009807687155!3d51.35081232213025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a19fc40b905a5%3A0xdd27590a46f77159!2sBoles%C5%82awa%20Chrobrego%2024%2C%2097-400%20Be%C5%82chat%C3%B3w!5e0!3m2!1spl!2spl!4v1705747538871!5m2!1spl!2spl"
				width="800"
				height="600"
				loading="lazy"
				className="map"></iframe>
			<div className="wrapper">
				<ContactDetails></ContactDetails>
			</div>
		</div>
	);
};

export default Contact;
