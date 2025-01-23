import React from "react";
import { Link } from "react-router";

export function Navbar() {
	return (
		<>
			<nav>
				<Link to="/home">Home | </Link>
				<Link to="/portfolio">Portfolio | </Link>
				<Link to="/alexresume">Resume | </Link>
				<Link to="/contact">Contact | </Link>
				<Link to="/consultation">Consultation | </Link>
				<Link to="/about">About </Link>
			</nav>
		</>
	);
}
 
