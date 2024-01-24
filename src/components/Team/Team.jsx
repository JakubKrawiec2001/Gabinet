import { team } from "../../data/teamDB";
import plus from "../../assets/icons/plus.svg";
import "./Team.scss";

const Team = () => {
	return (
		<div className="team-container wrapper">
			<div className="section-heading-container section-heading-team">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Pracownicy</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h2 className="section-heading">Nasz zespół</h2>
			</div>
			<div className="team-content">
				{team.map((item) => {
					return (
						<div className="team-item" key={item.id}>
							<div className="team-img-container">
								<img src={item.img} alt="" className="team-img" />
							</div>
							<p className="team-name">{item.name}</p>
							<p className="team-job">{item.job}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
