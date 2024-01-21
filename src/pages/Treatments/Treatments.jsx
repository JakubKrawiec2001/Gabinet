import { articles } from "../../data/articlesDB";
import plus from "../../assets/icons/plus.svg";
import "./Treatments.scss";

const Treatments = () => {
	return (
		<div className="treatments-container wrapper">
			<div className="section-heading-container section-heading-treatments">
				<div className="section-heading-small-text-box">
					<p className="section-heading-small-text">Wszystkie Wpisy</p>
					<img src={plus} alt="" className="section-heading-icon" />
				</div>
				<h1 className="section-heading">
					Kompleksowa Diagnostyka i Leczenie Schorzeń Urologicznych.
				</h1>
			</div>
			<div className="treatments-content">
				{/* {articles.map((article) => {
					return <ArticleCart key={article.id} article={article}></ArticleCart>;
				})} */}
			</div>
		</div>
	);
};

export default Treatments;
