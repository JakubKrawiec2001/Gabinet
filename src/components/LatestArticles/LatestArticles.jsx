import "./LatestArticles.scss";
import plus from "../../assets/icons/plus.svg";
import { articles } from "../../data/articlesDB";
import BlogPost from "../BlogPost/BlogPost";

const LatestArticles = () => {
	return (
		<div className="la-container wrapper">
			<div className="section-heading-container la-heading-container">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Aktualności</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h2 className="section-heading">Najnowsze artykuły</h2>
			</div>
			<div className="la-items-container">
				{articles.slice(0, 4).map((article) => {
					return <BlogPost key={article.id} article={article}></BlogPost>;
				})}
			</div>
			<div className="bg-blur bg-blur-right-la"></div>
		</div>
	);
};

export default LatestArticles;
