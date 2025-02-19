//Fetch the response from the server and extract it
import React, { useState, useEffect } from "react";
import { extractQotdResponse } from "../modules/qotd/extractQotdResponse.js";

export function HandleQuoteOfTheDay() {
	const [quoteFetched, setQuoteFetched] = useState(false); // Track if the quote has been fetched

	useEffect(quoteWasFetched, []);

	if (!quoteFetched) {
		const proxy = "https://corsproxy.io/?url=";
		const baseUrl = "https://favqs.com/api";
		const endPoint = "/qotd";
		const url = proxy + baseUrl + endPoint;
		const promise = fetch(url);
		promise.then(extractQotdResponse);

		return (
			<div className="card w-75 m-4">
				<div className="card-body text-center">
					<p
						id="qotdQuoteTag"
						className="card-text"></p>
					<p
						id="qotdAuthorTag"
						className="card-subtitle">
						-
					</p>
				</div>
			</div>
		);
	}

	function quoteWasFetched() {
		setQuoteFetched(true);
		// console.log("The Home component mounted.");
		return quoteWasFetched;
	}
}
