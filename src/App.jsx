import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Treatments from "./pages/Treatments/Treatments";
import Office from "./pages/Office/Office";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./hooks/useScrollToTop";
import Article from "./pages/Article/Article";

function App() {
	return (
		<div className="App">
			<ScrollToTop></ScrollToTop>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/zabiegi" element={<Treatments></Treatments>}></Route>
				<Route path="/blog/:title" element={<Article></Article>}></Route>
				<Route path="/gabinet" element={<Office></Office>}></Route>
				<Route path="/zespol" element={<Team></Team>}></Route>
				<Route path="/kontakt" element={<Contact></Contact>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
