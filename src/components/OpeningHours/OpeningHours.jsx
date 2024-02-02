import image1 from "../../assets/images/office-1.jpg";
import image2 from "../../assets/images/office-2.jpg";
import image3 from "../../assets/images/office-3.jpg";
import image4 from "../../assets/images/office-4.jpg";
import plus from "../../assets/icons/plus.svg";
import "./OpeningHours.scss";

const OpeningHours = () => {
	return (
		<div className="oh-container wrapper">
			<div className="oh-l">
				<div className="col">
					<img
						src={image1}
						alt="
The main corridor of the office"
						className="oh-image"
						loading="lazy"
					/>

					<img
						src={image2}
						alt="Office waiting room"
						className="oh-image"
						loading="lazy"
					/>
				</div>
				<div className="col">
					<img
						src={image3}
						alt="Patient admission room"
						className="oh-image"
						loading="lazy"
					/>

					<img
						src={image4}
						alt="Patient admission room"
						className="oh-image"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="oh-r">
				<div className="section-heading-container ">
					<div className="section-heading-small-text-box">
						<p className="section-heading-small-text">Zapraszamy</p>
						<img src={plus} alt="" className="section-heading-icon" />
					</div>
					<h2 className="section-heading hero-heading">Godziny Otwarcia</h2>
				</div>
				<div className="oh-content">
					<p className="oh-text">
						W celu umówienia wizyty zachęcamy do kontaktu z rejestracją:
						<span className="oh-span"> 883 615 060</span>.
					</p>
					<br />
					<p className="oh-text">
						Kontakt z Panią lek. Anetą Dojwa możliwy jest pod numerem:
						<span className="oh-span"> 889 460 619 </span>. Pani Doktor służy
						Państwu wiedzą i specjalistyczną opieką we
						<span className="oh-span"> wtorki</span>, po wcześniejszym umówieniu
						wizyty.
					</p>
					<div className="oh-items-box">
						<div className="oh-item">
							<p className="oh-text oh-name">lek. Kamil Krawiec</p>
							<p className="oh-text">
								<span className="oh-span">Poniedziałek:</span>&nbsp; 16:30 -
								20:00
							</p>
							<p className="oh-text">
								<span className="oh-span">Czwartek:</span>&nbsp; 16:30 - 20:00
							</p>
						</div>
						<div className="oh-item">
							<p className="oh-text oh-name">lek. Arkadiusz Pawlik</p>
							<p className="oh-text">
								<span className="oh-span">Środa:</span>&nbsp; 16:30 - 20:00
							</p>
							<p className="oh-text">
								<span className="oh-span">Piątek:</span>&nbsp; 16:30 - 20:00
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OpeningHours;
