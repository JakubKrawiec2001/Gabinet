import "./Hero.scss";
import heroImg from "../../assets/images/hero-img.jpg";
import plus from "../../assets/icons/plus.svg";

const Hero = () => {
	return (
		<div className="hero wrapper">
			<div className="hero-bg-gradient"></div>
			<div className="hero-text-container">
				<div className="section-heading-container">
					<div className="section-heading-small-text-box">
						<p className="section-heading-small-text hero-small-text">
							Gabinet Urologiczny
						</p>
						<img src={plus} alt="" className="section-heading-icon hero-icon" />
					</div>
					<h1 className="section-heading hero-heading">
						Rzetelna Diagnostyka i Skuteczne Leczenie
					</h1>
				</div>
				<p className="hero-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio
					pariatur tenetur similique nisi voluptas quo nesciunt.
				</p>

				<button className="hero-btn">Poproś o Wycenę</button>
			</div>
			<img src={heroImg} alt="" className="hero-img" />
			<div className="hero-img-border"></div>
		</div>
	);
};

export default Hero;
