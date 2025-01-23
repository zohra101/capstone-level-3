import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./src/Views/Home.js";
import { About } from "./src/Views/About.js";
import { AlexResume } from "./src/Views/AlexResume.js";
import { Consultation } from "./src/Views/Consultation.js";
import { Contact } from "./src/Views/Contact.js";
import { Portfolio } from "./src/Views/Portfolio.js";

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
