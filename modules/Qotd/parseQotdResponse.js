//Parse the response and display the qotd on the index page
import { output } from "../../utils/output.js";

export function parseQotdResponse(resolveValue) {
    const response = JSON.parse(resolveValue);
    const results =  response.quote;
    const quote = results.body;
    const author= results.author;
    const qotd = `${quote} -- ${author}`;
    output(qotd);
}
