import React from "react";
import { handleSubmitEmail } from "../modules/email/handleSubmitEmail.js";
import { Navbar } from "./Navbar.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export function Contact() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<div className="container m-3">
					<div className="row ">
						<h3 id="sendEmail">Send an email</h3>
						<p>
							{" "}
							If you have any questions about my services, please fill out and
							submit the form below.
						</p>
					</div>
					<div className="container ms-3">
						<form
							id="outputTag"
							onSubmit={handleSubmitEmail}>
							<div className="row p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>Contact Type</span>
									<br />
									<input
										type="radio"
										id="individual"
										name="Contact Type"
										className="p-2"
									/>
									<label htmlFor="individual">Individual</label>
									<input
										type="radio"
										id="company"
										name="Contact Type"
										className="p-2 ms-2"
									/>
									<label htmlFor="company">Company</label>
								</div>
							</div>
							<div className="row p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="contactName">Contact Name</label>
										<br />
									</span>
									<input
										required
										type="text"
										id="contactName"
										className="inputs"
										placeholder="First Last"
									/>
								</div>
							</div>
							<div className="row p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="contactEmail">Contact Email</label>
										<br />
									</span>
									<input
										required
										type="email"
										id="contactEmail"
										className="inputs"
										placeholder="address@domain.com"
									/>
								</div>
							</div>
							<div className="row p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="contactPhone">Contact Phone</label>
										<br />
									</span>
									<input
										required
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										id="contactPhone"
										className="inputs"
										placeholder="01 5555555555"
									/>
								</div>
							</div>
							<div className="row p-2">
								<div className="col">
									<span style={{ fontWeight: "bold" }}>
										<label htmlFor="userMessage">Message</label>
										<br />
									</span>
									<textarea
										required
										id="userMessage"
										className="inputs"
										placeholder="Enter your message here."></textarea>
								</div>
							</div>
							<div className="row p-2">
								<div className="col">
									<button className="btn btn-dark">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="spinner"></div>
				<div id="outputTag2"></div>
				<br />
			</main>
			<Footer />
		</>
	);
}
