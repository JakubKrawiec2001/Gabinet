import "./Footer.scss";
import { FaPhoneVolume, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
	let year = new Date().getFullYear();

	return (
		<div className="footer">
			<div className="wrapper footer-container">
				<div className="footer-content">
					<div className="footer-item">
						<p className="footer-logo">Uromed.</p>
						<p className="footer-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui unde
							dolores perferendis suscipit molestias placeat officiis, dolorum
							aperiam mollitia distinctio?
						</p>
						<div className="footer-icons-box">
							<FaPhoneVolume className="footer-icon" />
							<FaFacebook className="footer-icon" />
							<IoMdMail className="footer-icon" />
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
						<p className="footer-text">Poniedziałek: &nbsp; 17:00 - 21:00</p>
						<p className="footer-text">Środa: &nbsp; 17: 00 - 20:00</p>
						<p className="footer-text">Czwartek: &nbsp; 17: 00 - 20:00</p>
						<p className="footer-text">Piątek: &nbsp; 17: 00 - 20:00</p>
					</div>
					<div className="footer-item">
						<p className="footer-heading">Kontakt</p>
						<p className="footer-text">+48 883 615 060</p>
						<p className="footer-text">+48 607 094 241</p>
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
