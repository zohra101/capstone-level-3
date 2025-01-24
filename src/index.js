import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/Home.js";
import { About } from "./Views/About.js";
import { AlexResume } from "./Views/AlexResume.js";
import { Consultation } from "./Views/Consultation.js";
import { Contact } from "./Views/Contact.js";
import { Portfolio } from "./Views/Portfolio.js";

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
				path="https://zohra101.github.io/capstone-level-3/"
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
