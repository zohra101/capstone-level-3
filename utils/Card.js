export class Card {
    openingTag = "<div class='card m-4 p-4 bg-dark text-light'>
    <img class='card-img-top'
    id='${card.id}'
    src='${card.src}'
    alt='${card.title}'/>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
