import plus from "../../assets/icons/plus.svg";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import "./Office.scss";

const Office = () => {
	return (
		<div className="office-container wrapper">
			<div className="section-heading-container section-heading-office">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Galeria Zdjęć</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h1 className="section-heading section-office-heading">
					Nasze Miejsce Pracy
				</h1>
			</div>
			<ImagesGallery></ImagesGallery>
			
		</div>
	);
};

export default Office;
