//Fetch the response from the server and extract it
import { extractQotdResponse } from "../modules/qotd/extractQotdResponse.js";

window.handleQuoteOfTheDay = handleQuoteOfTheDay;

export function handleQuoteOfTheDay() {
    const proxy = "https://corsproxy.io/?url="
    const baseUrl = "https://favqs.com/api";
    const endPoint = "/qotd";
    const url = proxy + baseUrl + endPoint;
    const promise = fetch(url);
    promise.then(extractQotdResponse);    
}


