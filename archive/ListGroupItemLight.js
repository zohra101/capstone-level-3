export class ListGroupItemLight {
    openingTag = "<li class='list-group-item list-group-item-color1 list-group-item-text1 boxShadowLI'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    tostring() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
