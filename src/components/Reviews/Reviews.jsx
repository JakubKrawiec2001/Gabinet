import "./Reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviews } from "../../data/reviewsDB";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { shortText } from "../../utils/shortText";
import plus from "../../assets/icons/plus.svg";
import google from "../../assets/icons/google.png";

const Reviews = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 1,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="reviews">
			<div className="wrapper review-container">
				<div className="section-heading-container review-heading-container">
					<div className="section-heading-small-text-box">
						<p className="section-heading-small-text">Opinie</p>
						<img src={plus} alt="" className="section-heading-icon" />
					</div>
					<h2 className="section-heading">Wasze opinie</h2>
				</div>
				<Slider {...settings} className="slider-box">
					{reviews.map((review) => {
						return (
							<div className="review-item" key={review.id}>
								<div className="review-content-container">
									<div className="review-topbar-box">
										<div className="review-stars">
											{Array(review.rate).fill(
												<FaStar className="review-star" />
											)}
										</div>
									</div>
									<p className="review-desc">{shortText(review.review, 200)}</p>

									<div className="review-name-box">
										<MdAccountCircle className="review-name-icon" />
										<p className="review-name">{review.name}</p>
									</div>
									<FaQuoteRight className="review-quote" />
								</div>
							</div>
						);
					})}
				</Slider>
				<a
					href="https://g.page/r/CQY3rSib4HAZEBM/review"
					target="_blank"
					rel="noreferrer">
					<button className="reviews-btn">
						<img src={google} alt="" className="reviews-google-icon" />
						Zostaw Opinie
					</button>
				</a>
			</div>
		</div>
	);
};

export default Reviews;
