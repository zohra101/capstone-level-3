import { ListGroupItem } from "../utils/ListGroupItem.js";
export class ListGroup {

    openingTag = "<ul class='container list-group ms-3 boxShadowUL'>";
    closingTag = "</ul>";
    innerHTML = "";
    debugger;
    addItem(listGroupItem = new ListGroupItem()) {
        this.innerHTML += listGroupItem;
    }
    debugger;
    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}




