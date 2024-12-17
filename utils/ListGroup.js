import { ListGroupItem } from "../utils/ListGroupItem.js";
debugger;
export class ListGroup {

    openingTag = "<ul class='container list-group ms-3 boxShadowUL'>";
    closingTag = "</ul>";
    innerHTML = "";

    addItem(listGroupItem = new ListGroupItem()) {debugger;
        this.innerHTML += listGroupItem;
    }

    toString() {debugger;
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}




