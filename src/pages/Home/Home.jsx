import Hero from "../../components/Hero/Hero";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";

const Home = () => {
	return (
		<>
			<Hero></Hero>
			<OpeningHours></OpeningHours>
			<Services></Services>
			<Reviews></Reviews>
			<Team></Team>
			<LatestArticles></LatestArticles>
		</>
	);
};

export default Home;
