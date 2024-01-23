import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="wrapper navbar-container">
				<Link to="/" className="logo-box">
					<img src={logo} alt="" className="logo" />
					<p className="logo-text">Uromed</p>
				</Link>
				<div className="nav-links">
					<NavLink to="/" className="nav-link">
						Strona Główna
					</NavLink>
					<NavLink to="/zabiegi" className="nav-link">
						Zabiegi
					</NavLink>
					<NavLink to="/gabinet" className="nav-link">
						Gabinet
					</NavLink>
					<NavLink to="/zespol" className="nav-link">
						Lekarze
					</NavLink>
					<NavLink to="/kontakt" className="nav-link">
						Kontakt
					</NavLink>
				</div>
				<div className="navbar-r">
					<a
						href="https://www.facebook.com/p/Uromed-Gabinety-Urologiczne-100063622451020/"
						target="_blank"
						rel="noreferrer"
						className="navbar-r-icon">
						<FaFacebook />
					</a>

					<a href="tel:883-615-060" className="nav-btn">
						Umów Wizytę
					</a>
					{!open ? (
						<IoMenu
							className="burger-menu-btn"
							onClick={() => setOpen((prev) => !prev)}
						/>
					) : (
						<IoClose
							className="burger-menu-btn"
							onClick={() => setOpen((prev) => !prev)}
						/>
					)}
				</div>
				<div
					className={
						open ? "nav-links-mobile open-mobile-nav" : "nav-links-mobile"
					}>
					<NavLink to="/" className="nav-link-mobile">
						Strona Główna
					</NavLink>
					<NavLink to="/zabiegi" className="nav-link-mobile">
						Zabiegi
					</NavLink>
					<NavLink to="/gabinet" className="nav-link-mobile">
						Gabinet
					</NavLink>
					<NavLink to="/zespol" className="nav-link-mobile">
						Lekarze
					</NavLink>
					<NavLink to="/kontakt" className="nav-link-mobile">
						Kontakt
					</NavLink>
					<a href="#" className="nav-link-mobile mobile-btn">
						Umów Wizytę
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
