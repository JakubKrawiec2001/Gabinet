import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="wrapper navbar-container">
				<p className="logo">Uromed</p>
				<div className="nav-links">
					<NavLink to="/" className="nav-link">
						Strona Główna
					</NavLink>
					<NavLink to="/treatments" className="nav-link">
						Zabiegi
					</NavLink>
					<NavLink to="/office" className="nav-link">
						Gabinet
					</NavLink>
					<NavLink to="/doctors" className="nav-link">
						Lekarze
					</NavLink>
					<NavLink to="/contact" className="nav-link">
						Kontakt
					</NavLink>
				</div>
				<div className="navbar-r">
					<div className="navbar-r-icons-box">
						<MdPhoneInTalk className="navbar-r-icons" />
						<IoMdMail className="navbar-r-icons" />
					</div>
					<a href="#" className="nav-btn">
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
					<NavLink to="/treatments" className="nav-link-mobile">
						Zabiegi
					</NavLink>
					<NavLink to="/office" className="nav-link-mobile">
						Gabinet
					</NavLink>
					<NavLink to="/doctors" className="nav-link-mobile">
						Lekarze
					</NavLink>
					<NavLink to="/contact" className="nav-link-mobile">
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
