import Hero from "../../components/Hero/Hero";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services/Services";

const Home = () => {
	return (
		<>
			<Hero></Hero>
			<OpeningHours></OpeningHours>
			<Services></Services>
			<Reviews></Reviews>
			<LatestArticles></LatestArticles>
		</>
	);
};

export default Home;
