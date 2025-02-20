import { ListGroupItem } from "../utils/ListGroupItem.js";
export class ListGroup {
	openingTag =
		"<div className='row m-2'><ul className='container list-group ms-3'>";
	closingTag = "</ul>	</div>";
	innerHTML = "";

	constructor() {
		this.content;
		return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
	}

	addItem(listGroupItem = new ListGroupItem()) {
		this.content += listGroupItem;
	}
}
