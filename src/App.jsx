import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Treatments from "./pages/Treatments/Treatments";
import Office from "./pages/Office/Office";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./hooks/useScrollToTop";
import Article from "./pages/Article/Article";
import Doctors from "./pages/Doctors/Doctors";
import ScrollButton from "./components/ScrollButton/ScrollButton";

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
				<Route path="/lekarze" element={<Doctors></Doctors>}></Route>
				<Route path="/kontakt" element={<Contact></Contact>}></Route>
			</Routes>
			<ScrollButton></ScrollButton>
			<Footer></Footer>
		</div>
	);
}

export default App;
