import { Column } from "../Column.js";

export class Row {
    openingTag = "<div class='row'>";
    closingTag = "</div>";
    innerHTML = "";

    addColumn (column = new Column()) {
        this.innerHTML += column;
    }

    tostring() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}