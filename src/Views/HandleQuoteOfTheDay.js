//Fetch the response from the server and extract it
import React, { useState, useEffect } from "react";
import { extractQotdResponse } from "../modules/Qotd/extractQotdResponse.js";

const proxy = "https://corsproxy.io/?url=";
const baseUrl = "https://favqs.com/api";
const endPoint = "/qotd";

export function HandleQuoteOfTheDay() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);

	function componentDidMount() {
		const url = proxy + baseUrl + endPoint;
		const promise = fetch(url);
		promise.then(extractQotdResponse);
		setDidMount(true);
		console.log("The HandleQuoteOfTheDay component mounted.");
		return componentDidUnmount;
	}

	function componentDidUpdate() {
		if (didMount) console.log("The HandleQuoteOfTheDay component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The  HandleQuoteOfTheDay component unmounted.");
		};
	}

	return (
		<div className="card w-75 m-5 list-group-item-color1 list-group-item-text1 boxShadow">
			<div className="card-body m-2">
				<div
					id="qotdQuoteTag"
					className="card-text m-1 mb-3"></div>
				<div
					id="qotdAuthorTag"
					className="card-subtitle text-center">
					-
				</div>
			</div>
		</div>
	);
}
