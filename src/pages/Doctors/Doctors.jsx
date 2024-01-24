import "./Doctors.scss";
import avatar from "../../assets/icons/avatar-1.svg";
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
				<p className="doctors-heading-text">
					Dowiedz się więcej o naszych lekarzach, ich bogatym doświadczeniu oraz
					dniach przyjęć poniżej.
				</p>
			</div>
			<div className="doctors-container">
				<div className="doctors-item">
					<div className="doctors-img-container">
						<img src={avatar} alt="" className="doctors-img" />
					</div>
					<div className="doctors-content">
						<p className="doctors-name">lek. Kamil Krawiec</p>
						<p className="doctors-desc">
							Specjalista urolog FEBU oraz specjalista medycyny ratunkowej.
							Absolwent Akademii Medycznej w Poznaniu. Tytuł specjalisty w
							dziedzinie urologii uzyskał w 2017r. Związany z Oddziałem
							Urologicznym Szpitala Powiatowgo w Radomsku.
						</p>
						<a href="">
							<button className="doctors-btn">Umów Wizytę</button>
						</a>
					</div>
				</div>
				<div className="doctors-item">
					<div className="doctors-img-container">
						<img src={avatar} alt="" className="doctors-img" />
					</div>
					<div className="doctors-content">
						<p className="doctors-name">lek. Arkadiusz Pawlik</p>
						<p className="doctors-desc">
							Specjalista urolog FEBU. Absolwent Wydziału Lekarskiego
							Uniwersytetu Jagiellońskiego w Krakowie. Tytuł specjalisty w
							dziedzinie urologii uzyskał w 2020r. Związany z Oddziałem
							Urologicznym Szpitala Powiatowego w Radomsku
						</p>
						<a href="">
							<button className="doctors-btn">Umów Wizytę</button>
						</a>
					</div>
				</div>
			</div>
			<div className="bg-blur bg-blur-left-doctors"></div>
			<div className="bg-blur bg-blur-left-doctors-second"></div>
			<div className="bg-blur bg-blur-right-doctors"></div>
		</div>
	);
};

export default Doctors;
