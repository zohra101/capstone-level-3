import React, { useEffect, useState } from "react";
import { handleSubmitCall } from "../modules/call/handleSubmitCall.js";

export function ScheduleFreeConsultation() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<div className="container m-3">
				<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1">
					<h3 id="scheduleConsult">Schedule a consultation</h3>
					<p>
						{" "}
						To schedule a 30-minute free consultation to assess your needs,
						please complete the form below.
					</p>
				</div>
				<div className="container ms-3">
					<form
						id="outputTag"
						onSubmit={handleSubmitCall}>
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
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
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
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
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
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
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
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
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
							<div className="col">
								<span style={{ fontWeight: "bold" }}>
									<label htmlFor="scheduleConsult">Select a Date & Time</label>
									<br />
								</span>
								<input
									required
									type="datetime-local"
									id="scheduleConsult"
									className="inputs"></input>
							</div>
						</div>
						<div className="row row-cols-2 row-cols-md-1 row-cols-lg-1 p-2">
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
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Consultation component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Alex M - Free Consultation";

		return componentDidUnmount;
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Consultation component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Consultation component unmounted.");
		};
	}
}
