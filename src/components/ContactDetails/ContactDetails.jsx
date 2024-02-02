import "./ContactDetails.scss";
import { FaFacebook } from "react-icons/fa";

const ContactDetails = () => {
	return (
		<div className="cd-container">
			<div className="cd-item">
				<p className="cd-heading">Dane Kontaktowe</p>
				<p className="cd-text">
					<span className="cd-span">Rejestracja:</span>&nbsp; 883 615 060
				</p>
				<p className="cd-text">
					<span className="cd-span">lek. Aneta Dojwa:</span>&nbsp; 889 460 619
				</p>
				<p className="cd-text">
					Pani Doktor <span className="cd-span">Aneta Dojwa</span> służy Państwu
					wiedzą i specjalistyczną opieką we
					<span className="cd-span"> wtorki</span>, po wcześniejszym umówieniu
					wizyty.
				</p>
				<a
					href="https://www.facebook.com/p/Uromed-Gabinety-Urologiczne-100063622451020/"
					target="_blank"
					rel="noreferrer">
					<button className="cd-fb-btn">
						<FaFacebook className="cd-fb-icon" />
						Facebook
					</button>
				</a>
			</div>
			<div className="cd-item">
				<p className="cd-heading">Adres</p>
				<p className="cd-text">Bolesława Chrobrego 24</p>
				<p className="cd-text">97-400 Bełchatów</p>
				<p className="cd-text">Polska</p>
			</div>
			<div className="cd-item">
				<p className="cd-heading">Godziny Otwarcia</p>

				<div className="cd-doctor">
					<p className="cd-text cd-name">lek. Kamil Krawiec</p>
					<p className="cd-text">
						<span className="cd-span">Poniedziałek:</span>&nbsp; 16:30 - 20:00
					</p>
					<p className="cd-text">
						<span className="cd-span">Czwartek:</span>&nbsp; 16:30 - 20:00
					</p>
				</div>
				<div className="cd-doctor">
					<p className="cd-text cd-name">lek. Arkadiusz Pawlik</p>
					<p className="cd-text">
						<span className="cd-span">Środa:</span>&nbsp; 16:30 - 20:00
					</p>
					<p className="cd-text">
						<span className="cd-span">Piątek:</span>&nbsp; 16:30 - 20:00
					</p>
				</div>
			</div>

		</div>
	);
};

export default ContactDetails;
