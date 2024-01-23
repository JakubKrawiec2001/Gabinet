import { Link } from "react-router-dom";
import { TiArrowUpThick } from "react-icons/ti";
import "./BlogPost.scss";
import { shortText } from "../../utils/shortText";

const BlogPost = ({ article }) => {
	const { title, desc, img, path } = article;
	return (
		<div className="blog-post-container">
			<img src={img} alt="" className="blog-post-img" />
			<div className="blog-post-content">
				<p className="blog-post-title">{title}</p>
				<p className="blog-post-desc">{shortText(desc, 100)}</p>
				<Link to={`/blog/${path}`}>
					<button className="blog-post-btn">
						Czytaj więcej <TiArrowUpThick className="blog-post-icon" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BlogPost;
