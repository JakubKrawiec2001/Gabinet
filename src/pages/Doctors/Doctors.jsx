import "./Doctors.scss";
import avatar from "../../assets/icons/doctor.png";
import plus from "../../assets/icons/plus.svg";

const Doctors = () => {
	return (
		<div className="doctors wrapper">
			<div className="section-heading-container section-heading-container-doctors">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Urolodzy FEBU</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h1 className="section-heading">Poznaj Naszych Specjalistów</h1>
			</div>
			<div className="doctors-container">
				<div className="doctors-item">
					<div className="doctors-img-container">
						<img src={avatar} alt="" className="doctors-img" loading="lazy" />
					</div>
					<div className="doctors-content">
						<p className="doctors-name">lek. Kamil Krawiec</p>
						<p className="doctors-desc">
							Specjalista urolog FEBU oraz specjalista medycyny ratunkowej.
							Absolwent Akademii Medycznej w Poznaniu. Tytuł specjalisty w
							dziedzinie urologii uzyskał w 2017r. Związany z Oddziałem
							Urologicznym Szpitala Powiatowgo w Radomsku.
						</p>
						<div className="doctors-btns-box">
							<a href="tel:883-615-060">
								<button className="doctors-btn">Umów wizytę</button>
							</a>
							<a
								href="https://www.znanylekarz.pl/kamil-krawiec/urolog/lodz"
								target="_blank"
								rel="noreferrer">
								<button className="doctors-btn read-more-btn">
									Czytaj więcej
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className="doctors-item">
					<div className="doctors-img-container">
						<img src={avatar} alt="Doctor avatar" className="doctors-img" />
					</div>
					<div className="doctors-content">
						<p className="doctors-name">lek. Arkadiusz Pawlik</p>
						<p className="doctors-desc">
							Specjalista urolog FEBU. Absolwent Wydziału Lekarskiego
							Uniwersytetu Jagiellońskiego w Krakowie. Tytuł specjalisty w
							dziedzinie urologii uzyskał w 2020r. Związany z Oddziałem
							Urologicznym Szpitala Powiatowego w Radomsku
						</p>
						<div className="doctors-btns-box">
							<a href="tel:883-615-060">
								<button className="doctors-btn">Umów wizytę</button>
							</a>
							<a
								href="https://placowki.mp.pl/unit/index.html?id=842611"
								target="_blank"
								rel="noreferrer">
								<button className="doctors-btn read-more-btn">
									Czytaj więcej
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	);
};

export default Doctors;
