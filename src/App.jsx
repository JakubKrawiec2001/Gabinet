import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Doctors from "./pages/Doctors/Doctors";
import Treatments from "./pages/Treatments/Treatments";
import Office from "./pages/Office/Office";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
	return (
		<div className="App">
			<ScrollToTop></ScrollToTop>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/zabiegi" element={<Treatments></Treatments>}></Route>
				<Route path="/gabinet" element={<Office></Office>}></Route>
				<Route path="/lekarze" element={<Doctors></Doctors>}></Route>
				<Route path="/kontakt" element={<Contact></Contact>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
