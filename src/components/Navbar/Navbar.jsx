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
					<NavLink to="/lekarze" className="nav-link">
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
						Umów wizytę
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
				
					<NavLink
						to="/"
						className="nav-link-mobile"
						onClick={() => setOpen(false)}>
						Strona Główna
					</NavLink>
					<NavLink
						to="/zabiegi"
						className="nav-link-mobile"
						onClick={() => setOpen(false)}>
						Zabiegi
					</NavLink>
					<NavLink
						to="/gabinet"
						className="nav-link-mobile"
						onClick={() => setOpen(false)}>
						Gabinet
					</NavLink>
					<NavLink
						to="/lekarze"
						className="nav-link-mobile"
						onClick={() => setOpen(false)}>
						Lekarze
					</NavLink>
					<NavLink
						to="/kontakt"
						className="nav-link-mobile"
						onClick={() => setOpen(false)}>
						Kontakt
					</NavLink>
					<a
						href="tel:883-615-060"
						className="nav-link-mobile mobile-link"
						onClick={() => setOpen(false)}>
						Umów Wizytę
					</a>

					<a
						href="https://www.facebook.com/p/Uromed-Gabinety-Urologiczne-100063622451020/"
						target="_blank"
						rel="noreferrer">
						<button className="mobile-btn">
							<FaFacebook className="mobile-btn-icon" />
							Facebook
						</button>
					</a>
				</div>
				{open && <div className="mobile-shadow"></div>}
			</div>
		</nav>
	);
};

export default Navbar;
