export class CardBody {
    openingTag = "<div class='card-body'><h5 class='card-title p-1'>${card.title}</h5><p        class='card-text p-1'>${card.description}</p>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
