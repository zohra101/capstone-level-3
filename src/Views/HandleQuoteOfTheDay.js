//Fetch the response from the server and extract it
import React from "react";
import { extractQotdResponse } from "../modules/qotd/extractQotdResponse.js";

// window.handleQuoteOfTheDay = handleQuoteOfTheDay;

export function HandleQuoteOfTheDay() {
    const proxy = "https://corsproxy.io/?url="
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


