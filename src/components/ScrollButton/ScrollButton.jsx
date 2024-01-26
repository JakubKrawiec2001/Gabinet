import { useEffect, useState } from "react";
import "./ScrollButton.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div>
			{isVisible && (
				<FaArrowAltCircleUp
					className="scroll-to-top-icon"
					s
					onClick={() => window.scrollTo(0, 0)}
				/>
			)}
		</div>
	);
};

export default ScrollButton;
