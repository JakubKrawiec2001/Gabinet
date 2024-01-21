import { useParams } from "react-router-dom";
import { articles } from "../../data/articlesDB";
import "./Article.scss";

const Article = () => {
	const { title } = useParams();
	

	return (
		<div className="article">
			{articles.map((article) => {
				if (article.path === title) {
					return <p key={article.id}>{article.title}</p>;
				}
			})}
		</div>
	);
};

export default Article;
