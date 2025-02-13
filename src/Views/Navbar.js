import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../utils/getRootPath.js";
import linkedInIcon from "../assets/icons/icon_linkedin.png";
import emailIcon from "../assets/icons/icon_email_coral.png";

export function Navbar() {
	const rootPath = getRootPath();
	return (
		<>
			<nav className="nav nav-tabs nav-fill bg-dark ">
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/home`}>
					Home{" "}
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/portfolio`}>
					Portfolio{" "}
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/alexresume`}>
					Resume{" "}
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/contact`}>
					Contact{" "}
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/consultation`}>
					Consultation{" "}
				</NavLink>
				<NavLink
					className="nav-link text-info"
					to={`${rootPath}/about`}>
					About{" "}
				</NavLink>
				<div className="me-3">
					<a
						className="ms-2 bg-dark"
						href="https://www.linkedin.com/in/alexmarjanovic">
						<img
							id="linkedInIcon"
							alt="LinkedIn"
							style={{ height: "40px", width: "40px" }}
							src={linkedInIcon}
						/>
					</a>
					<a href="contact.html#sendMessage">
						<img
							id="emailIcon"
							alt="email"
							style={{ height: "30px", width: "30px" }}
							src={emailIcon}
						/>
					</a>
				</div>
			</nav>
		</>
	);
}
