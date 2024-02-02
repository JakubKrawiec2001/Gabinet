import "./Footer.scss";
import { FaPhoneVolume, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import provitaLogo from "../../assets/icons/Provita-logo.svg";

const Footer = () => {
	let year = new Date().getFullYear();

	return (
		<div className="footer">
			<div className="partner-container">
				<img src={provitaLogo} alt="Provita Logo" className="partner-icon" />
				<div className="partner-text-box">
					<p className="partner-text">
						Nasz Partner <br /> w Badaniach Klinicznych
					</p>
					<button className="partner-btn">
						<a href="https://provitacm.pl" target="_blank" rel="noreferrer">
							Dowiedz się więcej
						</a>
					</button>
				</div>
			</div>
			<div className="wrapper footer-container">
				<div className="footer-content">
					<div className="footer-item">
						<p className="footer-logo">Uromed</p>
						<p className="footer-text">
							Stworzyliśmy miejsce gdzie otrzymają Państwo poradę, pomoc oraz
							możliwość diagnostyki urologicznej.
						</p>
						<div className="footer-icons-box">
							<a href="tel:883-615-060">
								<FaPhoneVolume className="footer-icon" />
							</a>
							<a
								href="https://www.facebook.com/p/Uromed-Gabinety-Urologiczne-100063622451020/"
								target="_blank"
								rel="noreferrer">
								<FaFacebook className="footer-icon" />
							</a>
						</div>
					</div>
					<div className="footer-item">
						<p className="footer-heading">Zakładki</p>
						<Link to="/">
							<p className="footer-text">Strona główna</p>
						</Link>
						<Link to="/zabiegi">
							<p className="footer-text">Zabiegi</p>
						</Link>
						<Link to="gabinet">
							<p className="footer-text">Gabinet</p>
						</Link>
						<Link to="lekarze">
							<p className="footer-text">Lekarze</p>
						</Link>
						<Link to="kontakt">
							<p className="footer-text">Kontakt</p>
						</Link>
					</div>
					<div className="footer-item">
						<p className="footer-heading">Adres</p>
						<p className="footer-text">Bolesława Chrobrego 24</p>
						<p className="footer-text">97-400 Bełchatów</p>
						<p className="footer-text">Polska</p>
						<br />
						<br />
						<p className="footer-heading">Zapraszamy</p>
						<p className="footer-text">Poniedziałek: &nbsp; 16:30 - 20:00</p>
						<p className="footer-text">Środa: &nbsp; 16:30 - 20:00</p>
						<p className="footer-text">Czwartek: &nbsp; 16:30 - 20:00</p>
						<p className="footer-text">Piątek: &nbsp; 16:30 - 20:00</p>
					</div>
					<div className="footer-item">
						<p className="footer-heading">Kontakt</p>
						<p className="footer-text">+48 883 615 060</p>
						<p className="footer-text">+48 889 460 619</p>
					</div>
				</div>
				<div className="footer-date">
					<p className="footer-date-text">
						© {year} | Prywatny Gabinet Urologiczny - dr. Kamil Krawiec, dr.
						Arkadiusz Pawlik
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
