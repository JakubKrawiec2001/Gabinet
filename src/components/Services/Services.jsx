import "./Services.scss";
import plus from "../../assets/icons/plus.svg";
import { services } from "../../data/servicesDB";

const Services = () => {
	return (
		<>
			<div className="services wrapper">
				<div className="section-heading-container section-heading-container-services">
					<div className="section-heading-small-text-box">
						<p className="section-heading-small-text">Zakres Porad</p>
						<img src={plus} alt="" className="section-heading-icon" />
					</div>
					<h2 className="section-heading">Usługi medyczne</h2>
				</div>
				<div className="services-content-container">
					{services.map((item) => {
						return (
							<div key={item.id} className="services-item">
								<p className="services-text services-name">{item.name}</p>
								<div className="services-price-box">
									<p className="services-text">{item.price} zł</p>
								</div>
							</div>
						);
					})}
				</div>

				
			</div>
		</>
	);
};

export default Services;
