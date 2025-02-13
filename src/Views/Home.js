import React, { useEffect, useState } from "react";
// import { Navbar } from "../Views/Navbar.js";
import { Banner } from "./Banner.js";
import { Footer } from "./Footer.js";
import { HandleQuoteOfTheDay } from "./HandleQuoteOfTheDay.js";
// import { createServicesListGroup } from "../controllers/createServicesListGroup.js";
import "../css/index.scss";
import { NavbarCollapsible } from "./NavbarCollapsible.js";

export function Home() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);

	const domain = window.location.hostname;
	const port = window.location.port;
	console.log(`Domain: ${domain} Port: ${port}`);

	return (
		<>
			<NavbarCollapsible />
			<Banner />
			<main id="homeMain">
				<h1
					id="mixin-welcome"
					className="m-2">
					Welcome
				</h1>
				<HandleQuoteOfTheDay />
				<div className="container m-2">
					<div
						id="homeIntro"
						className="row cols-2">
						<p>
							Hi, I'm Alex Marjanovic, a technical communicator based out of
							Baton Rouge, LA. Originally from New Jersey, I moved south to
							escape the cold and snow, after completing my Master's in
							Professional and Technical Communiction at the New Jersey
							Institute for Technology (NJIT).
						</p>
						<p>
							I started as a technical writer by documenting the standard
							operating procedures for the technical support and help desk teams
							on which I served, which reminded me that I not only enjoy writing
							and design but also excel. I've also been a video game beta
							tester, translator, business intelligence developer, business
							analyst, quality assurance tester, project manager, content
							writer, transaction developer/implementation specialist, and
							editor.
						</p>
						<p>
							In software development specifically, technical communication
							services are vital for ensuring that complex technical information
							is accessible to both technical and non-technical audiences,
							thereby improving user satisfaction and reducing the need for
							support. But the benefits of clear and effective communication
							apply to any industry.
						</p>
					</div>
				</div>
				<div className="container m-2">
					<div
						id="homeHelp"
						className="row cols-2">
						<h3>How I can help</h3>
					</div>
					<div className="row cols-2">
						<p>
							I'm a specialist at translating technology: creating and
							delivering information concisely, clearly, and effectively.
							Bridging the gap between end users and technical experts,
							primarily I create{" "}
							<a href="portfolio.html#helpFile">help files</a>, design{" "}
							<a href="portfolio.html#adminGuide">
								{" "}
								administrator and user guides
							</a>
							, and write <a href="portfolio.html#manual">manuals</a> that
							explain how to use products or services. In addition to writing
							the content, I also carefully select or create visual aids
							(charts, diagrams, screenshots, etc.) that help readers understand
							the information presented.
						</p>
						<p>
							During my career in information techonology, I've worked for and
							with organizations in the following industries: retail,
							mail-order, biotechnology and pharamceutical services,
							construction and engineering, loan origination, software
							development, and state government.
						</p>
					</div>
				</div>
				<div className="row cols-2 m-2">
					<h3>Services</h3>
				</div>
				<div
					id="homeServices"
					className="row cols-2 m-2">
					<p>
						Whether it's writing user manuals, creating process documentation,
						developing training materials, or editing help files, I ensure that
						content is accessible and tailored to your audience's needs. Rates
						are per hour or per project depending on the complexity, scope, and
						estimated time for completion.
					</p>
				</div>
				{/* <div className="row m-2">
					<output
						id="createServicesListGroupTag"
						onLoad={createServicesListGroup}></output>
				</div> */}
				<div className="row cols-2 m-2">
					<p>
						If my services seem like a good fit for your organization, please{" "}
						<a href="contact.html#sendMessage">send a message</a> using the
						Contact form.
					</p>
					<p>Thanks for visiting!</p>
					<h2 className="signature">Alex Marjanovic</h2>
				</div>
			</main>
			<Footer />
		</>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Home component mounted.");
		return componentDidUnmount;
	}

	function componentDidUpdate() {
		if (didMount === true) console.log("The Home component updated.");
	}

	function componentDidUnmount() {
		return logUnmount;
	}

	function logUnmount() {
		console.log("The Home component unmounted.");
	}
}
