import { Qotd } from "../modules/qotd/Qotd.js";
import { output } from "../utils/output.js";
debugger;

window.handleQuoteOfTheDay = handleQuoteOfTheDay;

function handleQuoteOfTheDay() {
    output(Qotd);
}