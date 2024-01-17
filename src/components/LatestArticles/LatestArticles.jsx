import "./LatestArticles.scss";
import plus from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { articles } from "../../data/articlesDB";

const LatestArticles = () => {
	return (
		<div className="la-container wrapper">
			<div className="section-heading-container la-heading-container">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Aktualności</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h2 className="section-heading">Najnowsze wpisy i artykuły.</h2>
			</div>
			<div className="la-items-container">
				{articles.slice(0, 4).map((article) => {
					return (
						<div className="la-item" key={article.id}>
							<img src={article.img} alt="" className="la-img" />
							<div className="la-item-content">
								<div className="la-title">{article.title}</div>
								<p className="la-desc">{article.desc}</p>
								<Link className="la-link">
									Czytaj więcej
									<IoIosArrowRoundForward className="la-link-icon" />
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LatestArticles;
