import "./Hero.scss";
import heroImg from "../../assets/images/hero-img.jpg";
import plus from "../../assets/icons/plus.svg";

const Hero = () => {
	return (
		<>
			<div className="hero wrapper">
				<div className="hero-bg-gradient"></div>
				<div className="hero-text-container">
					<div className="section-heading-container">
						<div className="section-heading-small-text-box">
							<p className="section-heading-small-text hero-small-text">
								Gabinet Urologiczny
							</p>
							<img
								src={plus}
								alt=""
								className="section-heading-icon hero-icon"
							/>
						</div>
						<h1 className="section-heading hero-heading">
							Rzetelna Diagnostyka i Skuteczne Leczenie
						</h1>
					</div>
					<p className="hero-text">
						Stworzyliśmy miejsce gdzie otrzymają Państwo poradę, pomoc oraz
						możliwość diagnostyki urologicznej.
					</p>
					<div className="hero-btns-box">
						<a href="#team">
							<button className="hero-btn">Poznaj nas</button>
						</a>
						<a href="tel:883-615-060">
							<button className="hero-btn hero-btn-border">Umów wizytę</button>
						</a>
					</div>
				</div>
				<img src={heroImg} alt="" className="hero-img" loading="eager" />
				<div className="hero-img-border"></div>
			</div>
			<div className="bg-blur bg-blur-left-hero"></div>
			<div className="bg-blur bg-blur-right-hero"></div>
		</>
	);
};

export default Hero;
