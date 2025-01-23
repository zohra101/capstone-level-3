import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Home.js";
import { About } from "./About.js";
import { AlexResume } from "./AlexResume.js";
import { Consultation } from "./Consultation.js";
import { Contact } from "./Contact.js";
import { Portfolio } from "./Portfolio.js";

const root = createRoot(window.bodyTag);

// const message = `You've reached this page because the page you were expecting is not available. Please contact the site administrator for assistance.`;

root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/home"
				element={<Home />}
			/>
			<Route
				path="/portfolio"
				element={<Portfolio />}
			/>
			<Route
				path="/alexresume"
				element={<AlexResume />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
			<Route
				path="/Consultation"
				element={<Consultation />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
		</Routes>
	</BrowserRouter>
);
