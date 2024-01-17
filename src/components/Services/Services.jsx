import "./Services.scss";
import plus from "../../assets/icons/plus.svg";
import { services } from "../../data/servicesDB";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import wave from "../../assets/icons/wave.svg";

const Services = () => {
	return (
		<>
			<div className="services wrapper">
				<div className="services-l">
					<div className="services-item-container">
						<div className="services-item"></div>
						<div className="services-item"></div>
						<div className="services-item"></div>
						<div className="services-item">
							<p className="services-item-text">20+</p>
							<p className="services-item-text">Lat Doświadczenia</p>
						</div>
						<div className="services-square"></div>
						<img src={wave} alt="" className="services-wave-icon" />
					</div>
				</div>
				<div className="services-r">
					<div className="section-heading-container">
						<div className="section-heading-small-text-box">
							<p className="section-heading-small-text">Gabinet Urologiczny</p>
							<img src={plus} alt="" className="section-heading-icon" />
						</div>
						<h2 className="section-heading">Proponowane Usługi Medyczne.</h2>
					</div>
					<div className="services-content-container">
						{services.map((item) => {
							return (
								<p className="services-content-item" key={item}>
									<GoDotFill className="services-dot-icon" />
									{item}
								</p>
							);
						})}
					</div>
					<Link>
						<button className="services-btn ">Czytaj Więcej</button>
					</Link>
				</div>
				<div className="bg-blur bg-blur-left-services"></div>
			</div>
		</>
	);
};

export default Services;
