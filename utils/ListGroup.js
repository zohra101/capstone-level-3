
export class ListGroup {
    openingTag = "<ul class='container list-group ms-3 boxShadowUL'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
\\