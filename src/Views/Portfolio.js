import React, { useEffect, useState } from "react";
import { Navbar } from "../Views/Navbar.js";
import { NavbarCollapsible } from "./NavbarCollapsible.js";
import { Banner } from "./Banner.js";
import { Footer } from "./Footer.js";

export function Portfolio() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);

	return (
		<>
			<NavbarCollapsible />
			<Banner />
			<main id="mainTag">
				<div className="alert alert-secondary alert-dismissible">
					<strong>Coming soon!</strong> In the near future, you'll be able to
					click on the cards to view larger samples with greater detail.
					<button
						className="btn-close"
						data-bs-dismiss="alert"></button>
				</div>
				<div className="container ms-2">
					<div className="">
						<h2>Projects</h2>
						<p>
							Here's a sampling of current and past projects to which I've
							contributed.
						</p>
						<p>
							Many projects involve propietary information or sensitive data. To
							protect the confidentiality and privacy of my clients and/or
							employers, most samples are generic representations of the
							deliverables produced. Any samples that contain actual work are
							from defunct companies with any data redacted.
						</p>
						<br />
					</div>
				</div>

				<br />
				<div className="container ms-2">
					<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
						<p>
							For samples not represented here, please{" "}
							<a href="contact.html#sendMessage">submit a request</a> by
							completing the form on my Contact page.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Portfolio component mounted.");
		return componentDidUnmount;
	}

	function componentDidUpdate() {
		if (didMount === true) console.log("The Portfolio component updated.");
	}

	function componentDidUnmount() {
		return logUnmount;
	}

	function logUnmount() {
		console.log("The Portfolio component unmounted.");
	}
}
