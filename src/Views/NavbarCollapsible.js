import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../utils/getRootPath.js";
import linkedInIcon from "../../assets/icons/icon_linkedin.png";
import emailIcon from "../../assets/icons/icon_email_coral.png";

export function NavbarCollapsible() {
	const rootPath = getRootPath();
	return (
		<nav
			className="navbar nav-tabs navbar-expand-sm"
			style={{ backgroundColor: "rgb(2, 32, 54)" }}>
			<div className="container-fluid">
				<NavLink
					className="navbar-brand"
					style={{
						backgroundColor: "rgb(2, 32, 54)",
						color: "rgb(188, 110, 14)",
					}}
					to="#">
					Alex Marjanovic
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span
						className="navbar-toggler-icon"
						style={{ backgroundColor: "rgb(150, 196, 231)" }}></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							aria-current="page"
							to={`${rootPath}/home`}>
							{" "}
							Home
						</NavLink>
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							to={`${rootPath}/portfolio`}>
							Portfolio
						</NavLink>
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							to={`${rootPath}/alexresume`}>
							Resume
						</NavLink>
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							to={`${rootPath}/contact`}>
							Contact
						</NavLink>
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							to={`${rootPath}/schedulefreeconsultation`}>
							Free Consultation
						</NavLink>
						<NavLink
							className="nav-link"
							style={{ color: "rgb(150, 196, 231)" }}
							to={`${rootPath}/about`}>
							About
						</NavLink>
					</div>
				</div>
			</div>
			<div className="me-1">
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
			</div>
			<div className="me-3">
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
	);
}
