export class ListGroupItemLight {
    openingTag = "<li class='list-group-item list-group-item-color2 list-group-item-text2 boxShadowLI'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    tostring() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
