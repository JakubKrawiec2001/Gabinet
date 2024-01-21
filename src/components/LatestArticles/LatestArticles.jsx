import "./LatestArticles.scss";
import plus from "../../assets/icons/plus.svg";
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
				{/* {articles.slice(0, 4).map((article) => {
					return <ArticleCart key={article.id} article={article}></ArticleCart>;
				})} */}
			</div>
			<div className="bg-blur bg-blur-right-la"></div>
		</div>
	);
};

export default LatestArticles;
