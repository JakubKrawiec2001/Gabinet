import { useParams } from "react-router-dom";
import { articles } from "../../data/articlesDB";
import "./Article.scss";
import plus from "../../assets/icons/plus.svg";

const Article = () => {
	const { title } = useParams();

	return (
		<>
			{articles.map((article) => {
				if (article.path === title) {
					return (
						<div className="article-container wrapper" key={article.id}>
							<div className="section-heading-container section-heading-container-article">
								<div className="section-heading-small-text-box">
									<p className="section-heading-small-text">Artykuł</p>
									<img src={plus} alt="" className="section-heading-icon" />
								</div>
								<h1 className="section-heading">{article.title}</h1>
							</div>
							<p className="article-desc">{article.desc}</p>
							<div className="article-img-container">
								<div className="article-img-shadow"></div>
								<img
									src={article.img}
									alt="Cover of the article"
									className="article-img"
									loading="lazy"
								/>
							</div>
							<div className="article-content">
								<p className="article-text">{article.content}</p>
								<h2 className="article-text-heading">
									{article.sectionHeading}
								</h2>
								<p className="article-text">{article.contentTwo}</p>
								<p className="article-text">{article.contentThree}</p>
								<p className="article-text">{article.contentFour}</p>
							</div>
							
						</div>
					);
				}
			})}
		</>
	);
};

export default Article;
