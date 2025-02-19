//Parse the response and display the qotd on the index page
import { output } from "../../utils/output.js";

export function parseQotdResponse(resolveValue) {
	let quote = "";
	let author = ""
	const response = JSON.parse(resolveValue);
	const results = response.quote;
	quote = results.body; 
	console.log(`Quote: ${quote}`);
	author = results.author; 
	console.log(`Author: ${author}`);
	output(quote, "qotdQuoteTag");
	output(author, "qotdAuthorTag");
}
