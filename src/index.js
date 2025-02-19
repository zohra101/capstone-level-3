import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "../src/index.scss";
import { Home } from "./Views/Home.js";
import { About } from "./Views/About.js";
import { AlexResume } from "./Views/AlexResume.js";
import { Consultation } from "./Views/Consultation.js";
import { Contact } from "./Views/Contact.js";
import { Portfolio } from "./Views/Portfolio.js";
import { getRootPath } from "../src/utils/getRootPath.js";
import { Header } from "../src/Views/Header.js";
import { Footer } from "../src/Views/Footer.js";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<BrowserRouter>
		<Header/>
		<Routes>
			<Route
				path={`${rootPath}/`}
				element={<Home />}
			/>
			<Route
				path={`${rootPath}/capstone-level-3`}
				element={<Home />}
			/>
			<Route
				path={`${rootPath}/home`}
				element={<Home />}
			/>
			<Route
				path={`${rootPath}/portfolio`}
				element={<Portfolio />}
			/>
			<Route
				path={`${rootPath}/alexresume`}
				element={<AlexResume />}
			/>
			<Route
				path={`${rootPath}/contact`}
				element={<Contact />}
			/>
			<Route
				path={`${rootPath}/Consultation`}
				element={<Consultation />}
			/>
			<Route
				path={`${rootPath}/about`}
				element={<About />}
			/>
		</Routes>
		<Footer/>
	</BrowserRouter>
);
