export class ListGroupItem {
	openingTag = "<li className='list-group-item'>";
	closingTag = "</li>";
	innerHTML = "";

	constructor() {
		this.content;
		return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
	}
}


