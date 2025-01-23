import { ListGroupItem } from "../utils/ListGroupItem.js";
export class ListGroup {

    openingTag = "<ul className='container list-group ms-3 boxShadowUL'>";
    closingTag = "</ul>";
    innerHTML = "";

    addItem(listGroupItem = new ListGroupItem()) {
        this.innerHTML += listGroupItem;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}




