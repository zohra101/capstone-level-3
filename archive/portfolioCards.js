//AUTOMATICALLY CREATE BOOTSTRAPPED CARDS ON THE PORTFOLIO PAGE
//Item chaining to pull Service Names and Service Descriptions from two different arrays
import { CardBody } from "./CardBody.js";
import { Card } from "./Card.js";
import { output } from "../../utils/output.js";

window.portfolioCards = portfolioCards;

function portfolioCards() {
	const portfolioCards = [[], []];

	const portfolioCard = new Card();

	let index = portfolioCards[0].length;

	for (index = 0; index < portfolioCards[0].length; index++) {
		const cardId = services[0][index];
		const cardImage = services[1][index];
		const cardImageAlt = services[2][index];
		const cardTitle = services[2][index];
		const cardDescription = services[3][index];
		const listGroupItem = new ListGroupItem(`${card.id} ${serviceDescription}`);
		servicesListGroup.addItem(listGroupItem);
	}

	output(servicesListGroup, "servicesListGroupTag");
}

portfolioCards();

function bootstrapCard(card) {
	//declare cardString variable that outputs HTML with Bootstrap CSS and pulls card data from an array
	const cardString = `<div class="card m-4 p-4 bg-dark text-light">
                             <img class="card-img-top" 
                                 id="${card.id}"
                                 src="${card.image}"
                                 alt="${card.title}"/>
                              <div class="card-body">
                                 <h5 class="card-title p-1">${card.title}</h5>
                                 <p class="card-text p-1">${card.description}</p>
                             </div>
                         </div>`;
	return cardString;
}
